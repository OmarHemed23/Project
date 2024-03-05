from django.db import models
from enum import Enum
from django.core.validators import MinValueValidator

# Create your models here.
class Address(models.Model):
    street = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    postal_code = models.CharField(max_length=16)

    def __str__(self):
        return self.street

class PropertyType(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)
    
    def __str__(self):
        return self.name
    
class Status(Enum):
    A = 'Available'
    R = 'Rented'
    S = 'Sold'

class Property(models.Model):
    AVAILABLE = 'Available'
    RENTED = 'Rented'
    SOLD = 'Sold'

    PROPERTY_STATUS_CHOICES = [
        (AVAILABLE,'Available'),
        (RENTED,'Rented'),
        (SOLD, 'SOLD'),
    ]
    name = models.CharField(max_length=100)
    description = models.TextField(null=True, blank=True)
    address = models.ForeignKey(Address, on_delete=models.CASCADE)
    property_type = models.ForeignKey(PropertyType, on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0.0)])
    status = models.CharField(max_length=20, choices=PROPERTY_STATUS_CHOICES, default=AVAILABLE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
