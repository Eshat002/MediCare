from django.urls import path
from .views import SubscriptionCreateAPIView

urlpatterns = [
    path('subscribe/', SubscriptionCreateAPIView.as_view(), name='subscribe'),
]