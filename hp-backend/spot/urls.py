from django.urls import path
from .views import SpotTypeListView

urlpatterns = [
    path('', SpotTypeListView.as_view(), name='spot-types')
]
