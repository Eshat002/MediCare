# Generated by Django 4.0 on 2024-10-01 12:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("doctor", "0001_initial"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="doctor",
            options={"ordering": ["-date_joined"]},
        ),
    ]
