from django.urls import path
from .views import signup, signin  # signin 추가

urlpatterns = [
    path('signup/', signup),
    path('signin/', signin),       # 경로 추가
]