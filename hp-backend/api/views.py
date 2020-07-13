from rest_framework import generics

from spot.models import Spot
from .serializers import SpotSerializer

class SpotApiView(generics.ListAPIView):
    queryset = Spot.objects.all()
    serializer_class = SpotSerializer
