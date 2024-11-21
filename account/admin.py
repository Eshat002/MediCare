from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as DefaultUserAdmin, GroupAdmin as DefaultGroupAdmin
from django.contrib.auth.models import Group
from .models import UserAccount  # Import your custom user model
from unfold.admin import ModelAdmin  # Import Unfold's ModelAdmin
from django.contrib.auth.forms import UserCreationForm
from .forms import CustomUserCreationForm 


# Custom User Admin
@admin.register(UserAccount)
class CustomUserAdmin(DefaultUserAdmin, ModelAdmin):
    """
    Custom UserAdmin retaining all default settings while integrating Unfold features.
    """
    model = UserAccount
    add_form = CustomUserCreationForm 
    list_display = ('email' ,'first_name', 'last_name', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    search_fields = ('email', 'first_name', 'last_name')
    ordering = ('email',)
    fieldsets = (
        (None, {'fields': ('email', 'password')}),
        ('Personal Info', {'fields': ('first_name', 'last_name')}),
        ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important Dates', {'fields': ('last_login',)}),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'first_name', 'last_name', 'password1', 'password2', 'is_staff', 'is_active'),
        }),
    )

    class Media:
        css = {
            'all': ('css/admin_custom.css',)  # Your custom CSS file
        }


admin.site.unregister(Group)

# Custom Group Admin
@admin.register(Group)
class CustomGroupAdmin(DefaultGroupAdmin, ModelAdmin):
    """
    Custom GroupAdmin retaining all default settings while integrating Unfold features.
    """
    pass




""""
Unfold Admin with Default User Model
"""
# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
# from django.contrib.auth.admin import GroupAdmin as BaseGroupAdmin
# from django.contrib.auth.models import User, Group
# from unfold.admin import ModelAdmin


# admin.site.unregister(User)
# admin.site.unregister(Group)


# @admin.register(User)
# class UserAdmin(BaseUserAdmin, ModelAdmin):
#     pass


# @admin.register(Group)
# class GroupAdmin(BaseGroupAdmin, ModelAdmin):
#     pass
