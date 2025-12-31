from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from django.contrib.auth import authenticate
from django.contrib.auth.models import User  # [필수] User 모델 가져오기

@api_view(['POST'])
def signup(request):
    # [추가된 로직] 아이디 중복 체크
    username = request.data.get('username')
    if User.objects.filter(username=username).exists():
        return Response(
            {"message": "이미 가입된 아이디입니다."}, 
            status=status.HTTP_409_CONFLICT
        )

    # 기존 회원가입 로직
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "회원가입 성공!", "user": serializer.data}, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def signin(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username=username, password=password)

    if user is not None:
        return Response({"message": "로그인 성공!", "username": user.username}, status=status.HTTP_200_OK)
    else:
        return Response({"message": "아이디 또는 비밀번호가 올바르지 않습니다."}, status=status.HTTP_401_UNAUTHORIZED)