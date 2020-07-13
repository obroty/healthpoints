from django.urls import path
from .views import SpotApiView

urlpatterns = [
    path('', SpotApiView.as_view()),
]
