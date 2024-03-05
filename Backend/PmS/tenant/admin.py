from django.contrib import admin
from tenant.models import Tenant, TenantProfile

# Register your models here.
admin.site.register(Tenant)
admin.site.register(TenantProfile)

