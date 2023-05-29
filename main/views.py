from django.shortcuts import render
from django.views.generic import TemplateView, ListView, DetailView
from django.contrib.auth.mixins import LoginRequiredMixin

from .models import Device, DeviceInformation

# Create your views here.


class ComputerPageView(ListView):
    model = DeviceInformation
    template_name = "index.html"
    context_object_name = "device_info"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["qs"] = DeviceInformation.objects.all()
        return context


class PrinterPageView(ListView):
    model = DeviceInformation
    template_name = "printer.html"
    context_object_name = "device_info"


class ProektorPageView(ListView):
    model = DeviceInformation
    template_name = "proektor.html"
    context_object_name = "device_info"


class WifiPageView(ListView):
    model = DeviceInformation
    template_name = "wifi.html"
    context_object_name = "device_info"


class CameraPageView(ListView):
    model = DeviceInformation
    template_name = "camera.html"
    context_object_name = "device_info"
    

class BasePageView(ListView):
    model = DeviceInformation
    template_name = "base-edit.html"
    context_object_name = "device_info"

import json 
from django.http import JsonResponse


def updateDevice(request):
    num = request.GET.get('update')
    obj = request.GET.get('obj_id')
    if num and obj:
        obj = DeviceInformation.objects.get(id=int(obj))
        obj.total_number += int(num)
        obj.save()    
        # print(json.loads(request.POST.get('number')))
        return JsonResponse({"status":200, "total":obj.total_number})
    else:
        return JsonResponse({"status":400})