# app/views.py
from rest_framework import generics, status
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
from ..models import Contact 
from .serializers import ContactSerializer

class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        contact = serializer.save()

        # Send email notification
        subject = f"New Contact Form Submission from {contact.name}"
        message = f"Name: {contact.name}\nEmail: {contact.email}\nMessage:\n{contact.message}"
        send_mail(subject, message, settings.DEFAULT_FROM_EMAIL, [settings.EMAIL_HOST_USER])

        return Response({"message": "Contact saved and email sent successfully."}, status=status.HTTP_201_CREATED)
