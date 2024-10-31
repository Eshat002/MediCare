from rest_framework import generics
from ..models import Subscription
from .serializers import SubscriptionSerializer

class SubscriptionCreateAPIView(generics.CreateAPIView):
    queryset = Subscription.objects.all()
    serializer_class = SubscriptionSerializer
