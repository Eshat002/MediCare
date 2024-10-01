from django.contrib import admin
from django.contrib.auth.models import User, Group
from unfold.admin import ModelAdmin as UnfoldModelAdmin

class CustomUserAdmin(UnfoldModelAdmin):
    pass

class CustomGroupAdmin(UnfoldModelAdmin):
    pass

admin.site.register(User, CustomUserAdmin)
admin.site.register(Group, CustomGroupAdmin)