import csv
import json
import requests
from os import environ
from urllib.parse import urlencode
from .models import Spot, Type


def get_gps_coordinates(address):
    apikey = environ.get('MGAPIKEY')
    endpoint = "https://maps.googleapis.com/maps/api/geocode/json"
    params = {'address': address, 'key': apikey}
    url_params = urlencode(params)
    request = requests.get(f"{endpoint}?{url_params}")
    if request.status_code != 200:
        return {}
    crdnts = request.json()['results'][0]['geometry']['location']
    return (crdnts.get('lat'), crdnts.get('lng'))


def get_coordinates_from_csv(csv_file_path, name_label, address_label, city_name):
    data = {}
    with open(csv_file_path, newline='\n') as csvfile:
        reader = csv.DictReader(csvfile, delimiter=';')
        for line in reader:
            full_address = f'{line[address_label]},{city_name}'
            crdnts = get_gps_coordinates(full_address)
            spot = Spot(
                name = line[name_label],
                type = Type.objects.get(name='Defibrilators AED'),
                address = line[address_label],
                city = city_name,
                latitude = crdnts[0],
                longitude = crdnts[1]
            )
            print(spot)
            spot.save()

get_coordinates_from_csv('defibs.csv', 'Miejsce', 'Adres', 'Szczecin')
