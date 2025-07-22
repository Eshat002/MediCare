# views.py
from rest_framework import viewsets
from ..models import Achievement
from .serializers import AchievementSerializer
from rest_framework.permissions import AllowAny
from rest_framework.permissions import IsAdminUser, SAFE_METHODS, BasePermission

class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.method in SAFE_METHODS:
            return True  # Allow read-only methods for all
        return request.user and request.user.is_staff  # Write only for admin

class AchievementViewSet(viewsets.ModelViewSet):
    queryset = Achievement.objects.all()
    serializer_class = AchievementSerializer
    permission_classes = [IsAdminOrReadOnly]
