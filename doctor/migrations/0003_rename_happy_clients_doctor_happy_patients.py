# Generated by Django 5.1 on 2024-10-08 13:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("doctor", "0002_alter_doctor_doctor_at"),
    ]

    operations = [
        migrations.RenameField(
            model_name="doctor",
            old_name="happy_clients",
            new_name="happy_patients",
        ),
    ]