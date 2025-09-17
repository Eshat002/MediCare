from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from account.models import UserAccount



class Patient(models.Model):
    GENDER_CHOICES = [
        ("M", "Male"),
        ("F", "Female"),
        ("O", "Other"),
    ]

    BLOOD_GROUP_CHOICES = [
        ("A+", "A+"),
        ("A-", "A-"),
        ("B+", "B+"),
        ("B-", "B-"),
        ("AB+", "AB+"),
        ("AB-", "AB-"),
        ("O+", "O+"),
        ("O-", "O-"),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    user = models.OneToOneField(UserAccount, on_delete=models.CASCADE)
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    blood_group = models.CharField(max_length=3, choices=BLOOD_GROUP_CHOICES)
    phone = models.CharField(max_length=15, unique=True)
    email = models.EmailField()
    address = models.TextField()
    avatar = models.ImageField(upload_to="avatars/", null=True, blank=True)
    medical_history = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        full_name = f"{self.first_name} {self.last_name or ''}".strip()
        return f"{full_name} ({self.phone})"



 

@receiver(post_save, sender=UserAccount)
def create_patient_profile(sender, instance, created, **kwargs):
    if created and not instance.is_staff:
        try:
            Patient.objects.create(
                user=instance,
                first_name=instance.first_name,
                last_name=instance.last_name,
                email=instance.email,
                age=0,
                gender="O",
                blood_group="O+",
                phone="5552342342",
                address="Not provided",
            )
        except Exception as e:
            # Log error but do not prevent user creation
            print(f"Failed to create Patient for user {instance.email}: {e}")
