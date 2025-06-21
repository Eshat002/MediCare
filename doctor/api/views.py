from django.shortcuts import render
from rest_framework.generics import ListAPIView, CreateAPIView
from ..models import Doctor
from .serializers import DoctorSerializer
from rest_framework.permissions import AllowAny


class DoctorListView(ListAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        count = int(self.request.query_params.get("count", 4))
        return Doctor.objects.all()[:count]

 

class DoctorCreateView(CreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer