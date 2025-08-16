from django.contrib import admin
from .models import Contact

from unfold.admin import ModelAdmin as UnfoldModelAdmin


@admin.register(Contact)
class ContactAdmin(UnfoldModelAdmin):
    pass
