# Generated by Django 5.2.2 on 2025-06-23 12:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("doctor", "0003_alter_doctor_certificates"),
    ]

    operations = [
        migrations.AlterField(
            model_name="doctor",
            name="certificates",
            field=models.PositiveIntegerField(blank=True),
        ),
    ]
