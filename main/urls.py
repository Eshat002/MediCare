from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("djoser.urls")),
    path("auth/", include("djoser.urls.jwt")),
    path("api/doctors/", include("doctor.api.urls")),
    path("api/appointments/", include("appointment.api.urls")),
    path("api/newsletter/", include("newsletter.api.urls")),
    path("api/services/", include("service.api.urls")),
    path("api/achievements/", include("achievements.api.urls")),
    path("api/contact/", include("contact.api.urls")),
    path("accounts/", include('django.contrib.auth.urls')),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
