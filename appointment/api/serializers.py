from rest_framework import serializers
from ..models import Appointment


class AppointmentSerializer(serializers.ModelSerializer):
    first_name = serializers.CharField(
        max_length=50,
        error_messages={
            "blank": "Come on, a little effort! Fill this field in.",
        },
    )
    last_name = serializers.CharField(
        max_length=50,
        error_messages={
            "blank": "Come on, a little effort! Fill this field in.",
        },
    )
    email = serializers.EmailField(
        error_messages={
            "blank": "Come on, a little effort! Fill this field in.",
        }
    )
    phone = serializers.CharField(
        max_length=20,
        error_messages={
            "blank": "Come on, a little effort! Fill this field in.",
        },
    )
    appointment_date_time = serializers.DateTimeField(
        error_messages={
            "null": "Come on, a little effort! Fill this field in.",
        }
    )
    message = serializers.CharField(
        style={
            "base_template": "textarea.html"
        },  # Optional: use this for a text area in forms
        error_messages={"blank": "Come on, a little effort! Fill this field in."},
    )

    class Meta:
        model = Appointment
        fields = "__all__"
