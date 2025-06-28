from django.urls import path
from doctor.api import views

urlpatterns = [
    path("", views.DoctorListView.as_view(), name="doctor-list"),
    path("create/", views.DoctorCreateView.as_view(), name="create-doctor"),
]
