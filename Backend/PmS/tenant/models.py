from django.contrib.auth.models import AbstractUser
from django.db import models
from base.models import Property
from landlord.models import Landlord

# Create your models here.
class LeaseInfo(models.Model):
    CANCELLED = 'Cancelled'
    ACTIVE = 'Active'

    LEASE_STATUS_CHOICES = [
        (CANCELLED, 'Cancelled'),
        (ACTIVE, 'Active'),
    ]

    property_leased = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='property_leases')
    landlord = models.ForeignKey(Landlord, on_delete=models.CASCADE)
    tenant = models.ForeignKey('Tenant', on_delete=models.CASCADE, related_name='tenant_leases')
    lease_start_date = models.DateField()
    lease_end_date = models.DateField()
    monthly_rent = models.DecimalField(max_digits=10, decimal_places=2)
    security_deposit = models.DecimalField(max_digits=10, decimal_places=2)
    additional_terms = models.TextField(blank=True, null=True)
    status = models.CharField(max_length=15, choices=LEASE_STATUS_CHOICES, default=ACTIVE)

    def __str__(self):
        return f"Lease Information for {self.property_leased.name}"

class Tenant(AbstractUser):
    phone_number = models.CharField(max_length=15)
    property_leased = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='tenant_property_leased')
    lease_info = models.ForeignKey(LeaseInfo, on_delete=models.CASCADE, related_name='tenant_lease_info')
    groups = models.ManyToManyField('auth.Group', related_name='tenant_groups',blank=True)
    user_permissions = models.ManyToManyField('auth.Permission', related_name='tenant_user_permissions',blank=True)

    def __str__(self):
        return self.username
    
class TenantProfile(models.Model):
    tenant = models.OneToOneField(Tenant, related_name='profile', on_delete=models.CASCADE)
    biography = models.TextField(blank=True, null=True)

    def __str__(self):
        return f"{self.tenant.username}'s Profile"
    

