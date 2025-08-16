from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView
from ..models import Service
from .serializers import ServiceSerializer
from rest_framework.permissions import AllowAny


class ServiceListView(ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        count = int(self.request.query_params.get("count", 4))
        return Service.objects.all()[:count]


class ServiceCreateView(CreateAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer
    permission_classes = [AllowAny]
