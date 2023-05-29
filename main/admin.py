from django.contrib import admin
from .models import Device, DeviceInformation

# Register your models here.


@admin.register(Device)
class DeviceAdmin(admin.ModelAdmin):
    list_display = ["name"]
    prepopulated_fields = {"slug": ("name",)}


@admin.register(DeviceInformation)
class DeviceInformationAdmin(admin.ModelAdmin):
    list_display = ["device", "total_number", "in_work", "broken", "time"]
