from django.db import models
from base.models import Property

# Create your models here.
class Landlord(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    phone_number = models.CharField(max_length=15)
    properties_owned = models.ManyToManyField(Property, related_name='landlord_properties')

    def __str__(self):
        return self.user.username
