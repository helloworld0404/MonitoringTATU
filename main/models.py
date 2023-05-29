from django.db import models
from datetime import datetime
# Create your models here.
hozir = datetime.now()


class Device(models.Model):
    name = models.CharField(max_length=150)
    slug = models.SlugField(max_length=150, unique=True)

    def __str__(self):
        return str(self.name)


class DeviceInformation(models.Model):
    device = models.ForeignKey(
        Device, on_delete=models.PROTECT, related_name='device')
    total_number = models.PositiveIntegerField(default=0)
    in_work = models.PositiveIntegerField(default=0)
    broken = models.PositiveIntegerField(default=0)
    time = models.DateField("%d.%m.%Y")
    persentage = models.PositiveIntegerField(default=0)
    
    def get_cost(self):
        if self.total_number and self.in_work:
            return (round((100 * self.in_work) / self.total_number ))
        else:
            return self.persentage
        
    def __str__(self):
        return '{}--{}'.format(self.time, self.persentage) 
    
