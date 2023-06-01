from django.urls import path
from .views import *


urlpatterns = [
    path("socios/", SocioAPIView.as_view()),
    path("socios/<int:pk>", SocioAPIViewDetail.as_view()),
]
