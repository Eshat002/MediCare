from django.utils import timezone
from django.db import models

class Appointment(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    appointment_date_time = models.DateTimeField()
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return f"Appointment for {self.first_name} {self.last_name} on {self.appointment_date_time}"

    def __str__(self):
            # Format the appointment_date_time to display in 'Month Day, Year at Hour:Minute AM/PM' format
            appointment_time = timezone.localtime(self.appointment_date_time)  # Convert to local time zone
            formatted_time = appointment_time.strftime("%B %d, %Y at %I:%M %p")  # Example: "October 24, 2024 at 06:30 PM"
            return f"Appointment for {self.first_name} {self.last_name} on {formatted_time}"