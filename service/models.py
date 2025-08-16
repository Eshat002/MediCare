from django.db import models


class Service(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    image = models.ImageField(
        upload_to="services/images/",
    )

    class Meta:
        ordering = ["-id"]
