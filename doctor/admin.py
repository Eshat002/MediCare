from django.contrib import admin
from .models import Doctor
from unfold.admin import ModelAdmin as UnfoldModelAdmin


@admin.register(Doctor)
class DoctorAdmin(UnfoldModelAdmin):
    pass
    list_display = (
        "first_name",
        "last_name",
        "specialization",
        "years_of_experience",
        "available",
        "date_joined",
    )
    list_filter = ("specialization", "available", "gender")
    search_fields = ("first_name", "last_name", "email", "phone")
