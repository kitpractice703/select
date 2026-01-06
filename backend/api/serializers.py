from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'password']
        # 비밀번호는 읽을 때(조회할 때) 보이면 안 되므로 write_only 설정
        extra_kwargs = {'password': {'write_only': True}}

    # ★ 여기가 핵심입니다! (이게 없으면 암호화가 안 됩니다)
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user