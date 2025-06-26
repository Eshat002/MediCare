from rest_framework import generics
from ..models import Subscription
from .serializers import SubscriptionSerializer
from rest_framework.permissions import AllowAny

class SubscriptionCreateAPIView(generics.CreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
    permission_classes = [AllowAny]