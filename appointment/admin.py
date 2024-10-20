from django.contrib import admin
from .models import Appointment
from unfold.admin import ModelAdmin as UnfoldModelAdmin


@admin.register(Appointment)
class AppointmentAdmin(UnfoldModelAdmin):
    pass




