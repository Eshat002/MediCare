from django.contrib import admin
from .models import Service
from unfold.admin import ModelAdmin as UnfoldModelAdmin

@admin.register(Service)
class ServiceAdmin(UnfoldModelAdmin):
    pass
