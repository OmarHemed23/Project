# Generated by Django 5.0.1 on 2024-01-29 10:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
        ('tenant', '0002_alter_tenant_groups_alter_tenant_user_permissions'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tenant',
            name='groups',
            field=models.ManyToManyField(blank=True, related_name='tenant_groups', to='auth.group'),
        ),
        migrations.AlterField(
            model_name='tenant',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, related_name='tenant_user_permissions', to='auth.permission'),
        ),
    ]
