from rest_framework import serializers
from ..models import Subscription
from rest_framework.validators import UniqueValidator


class SubscriptionSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        validators=[
            UniqueValidator(
                queryset=Subscription.objects.all(),
                message="This email already exists.",
            ),
        ],
        error_messages={"blank": "This field is required."},
    )

    class Meta:
        model = Subscription
        fields = ["email"]
