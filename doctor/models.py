from django.db import models


class Doctor(models.Model):
    SPECIALIZATION_CHOICES = [
        ("cardiology", "Cardiology Doctor"),
        ("neurology", "Neurology Doctor"),
        ("orthopedics", "Orthopedics Doctor"),
        ("pediatrics", "Pediatrics Doctor"),
        ("dermatology", "Dermatology Doctor"),
        ("leading_diagnostic", "Leading Diagnostic Doctor"),
        ("consultant_dentist", "Consultant Dentist"),
    ]

    GENDER_CHOICES = [
        ("male", "Male"),
        ("female", "Female"),
        ("other", "Other"),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    avatar = models.ImageField(upload_to="doctors/avatars/", default="doctors/avatars/doctor.png")
    specialization = models.CharField(max_length=50, choices=SPECIALIZATION_CHOICES)
    years_of_experience = models.PositiveIntegerField()
    email = models.EmailField()
    phone = models.CharField(max_length=15)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    available = models.BooleanField(default=True)
    happy_clients = models.PositiveIntegerField()
    doctor_at = models.CharField(max_length=100, default="iMedical Central Clinic, LA")
    date_joined = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-date_joined"]

    def __str__(self):
        return f"{self.first_name} {self.last_name} - {self.specialization}"
