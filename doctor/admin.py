from django.contrib import admin
from .models import Doctor

@admin.register(Doctor)
class DoctorAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'specialization', 'years_of_experience','available', 'date_joined')
    list_filter = ('specialization', 'available', 'gender')
    search_fields = ('first_name', 'last_name', 'email', 'phone')

