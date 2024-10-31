from django.contrib import admin
from .models import Subscription
from unfold.admin import ModelAdmin as UnfoldModelAdmin

@admin.register(Subscription)
class SubscribtionAdmin(UnfoldModelAdmin):
    pass

