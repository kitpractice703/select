from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from django.contrib.auth import authenticate

@api_view(['POST'])
def signup(request):
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save() # DB에 저장 (회원가입 완료)
        return Response({"message": "회원가입 성공!", "user": serializer.data}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signin(request):
    username = request.data.get('username')
    password = request.data.get('password')

    # DB에서 아이디/비번이 맞는지 확인
    user = authenticate(username=username, password=password)

    if user is not None:
        # 인증 성공!
        return Response({"message": "로그인 성공!", "username": user.username}, status=status.HTTP_200_OK)
    else:
        # 인증 실패 (비번 틀림 등)
        return Response({"message": "아이디 또는 비밀번호가 올바르지 않습니다."}, status=status.HTTP_401_UNAUTHORIZED)