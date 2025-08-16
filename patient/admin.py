from django.contrib import admin
from .models import Patient

from unfold.admin import ModelAdmin as UnfoldModelAdmin


@admin.register(Patient)
class PatientAdmin(UnfoldModelAdmin):
    pass
