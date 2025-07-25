# Generated by Django 5.2.2 on 2025-07-19 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Achievement",
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
                ("name", models.CharField(max_length=255)),
                ("description", models.TextField()),
                (
                    "certificate",
                    models.ImageField(blank=True, null=True, upload_to="certificates/"),
                ),
                ("date_achieved", models.DateTimeField(auto_now_add=True)),
            ],
            options={
                "verbose_name": "Achievement",
                "verbose_name_plural": "Achievements",
                "ordering": ["-date_achieved"],
            },
        ),
    ]
