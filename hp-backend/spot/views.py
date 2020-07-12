from django.views.generic import ListView
from .models import Spot, Type

# Create your views here.
class SpotTypeListView(ListView):
    model = Type
    template_name = 'spot/types.html'
