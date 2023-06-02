from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('api/', include('socios.urls_api')),
    path('admin/', admin.site.urls),
]
