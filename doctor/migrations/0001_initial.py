# Generated by Django 5.1 on 2024-10-04 13:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Doctor",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("first_name", models.CharField(max_length=100)),
                ("last_name", models.CharField(max_length=100)),
                (
                    "avatar",
                    models.ImageField(
                        default="doctors/avatars/doctor.png",
                        upload_to="doctors/avatars/",
                    ),
                ),
                (
                    "specialization",
                    models.CharField(
                        choices=[
                            ("cardiology", "Cardiology Doctor"),
                            ("neurology", "Neurology Doctor"),
                            ("orthopedics", "Orthopedics Doctor"),
                            ("pediatrics", "Pediatrics Doctor"),
                            ("dermatology", "Dermatology Doctor"),
                            ("leading_diagnostic", "Leading Diagnostic Doctor"),
                            ("consultant_dentist", "Consultant Dentist"),
                        ],
                        max_length=50,
                    ),
                ),
                ("years_of_experience", models.PositiveIntegerField()),
                ("email", models.EmailField(max_length=254)),
                ("phone", models.CharField(max_length=15)),
                (
                    "gender",
                    models.CharField(
                        choices=[
                            ("male", "Male"),
                            ("female", "Female"),
                            ("other", "Other"),
                        ],
                        max_length=10,
                    ),
                ),
                ("available", models.BooleanField(default=True)),
                ("happy_clients", models.PositiveIntegerField()),
                ("doctor_at", models.CharField(max_length=100, null=True)),
                ("date_joined", models.DateTimeField(auto_now_add=True)),
            ],
            options={
                "ordering": ["-date_joined"],
            },
        ),
    ]
