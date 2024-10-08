from rest_framework import serializers
from ..models import Doctor


class DoctorSerializer(serializers.ModelSerializer):
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = Doctor
        fields = "__all__"
    
    def get_full_name(self, obj):
        return f"{obj.first_name} {obj.last_name}"