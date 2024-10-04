from django.urls import path
from doctor.api import views

urlpatterns = [
    path("", views.DoctorListView.as_view(), name="doctor-list")
]