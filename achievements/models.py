from django.db import models


# Create your models here.
class Achievement(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    certificate = models.ImageField(upload_to="certificates/", blank=True, null=True)
    date_achieved = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

    class Meta:

        ordering = ["-date_achieved"]
