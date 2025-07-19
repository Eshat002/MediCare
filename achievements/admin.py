from django.contrib import admin
from .models import Achievement
 
from unfold.admin import ModelAdmin as UnfoldModelAdmin


@admin.register(Achievement)
class AchievementAdmin(UnfoldModelAdmin):
    pass
