from django.shortcuts import render
from rest_framework.generics import ListAPIView
from ..models import Doctor
from .serializers import DoctorSerializer


class DoctorListView(ListAPIView):
    serializer_class = DoctorSerializer

    def get_queryset(self):
        count = int(self.request.query_params.get("count", 4))
        return Doctor.objects.all()[:count]

 