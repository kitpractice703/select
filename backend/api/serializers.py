from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        # 비밀번호는 쓸 때만 입력받고, 조회할 때는 안 보이게 설정 (보안)
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # ★ 핵심: create_user를 써야 비밀번호가 암호화되어 저장됩니다.
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        return user