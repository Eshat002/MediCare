from django.urls import path
from service.api import views

urlpatterns = [
    path("", views.ServiceListView.as_view(), name="service-list"),
    path("create/", views.ServiceCreateView.as_view(), name="create-service"),
]
