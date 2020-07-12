from django.db import models

# Create your models here.
class Type(models.Model):
    name = models.CharField(max_length=100)
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    description = models.TextField()

    def __str__(self):
        return self.name

class Spot(models.Model):
    name = models.CharField(max_length=250)
    type = models.ForeignKey('Type', on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    latitude = models.CharField(max_length=10)
    longitude = models.CharField(max_length=10)

    def __str__(self):
        return self.name
