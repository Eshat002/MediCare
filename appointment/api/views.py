from rest_framework import generics
from ..models import Appointment
from .serializers import AppointmentSerializer 
from rest_framework import permissions

class AppointmentCreateView(generics.CreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = [permissions.IsAuthenticated]  # ⬅️ only logged-in users can create

    def perform_create(self, serializer):
        # Attach the logged-in user as the patient
        serializer.save(patient=self.request.user.patient)
