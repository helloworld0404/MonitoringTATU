from django.urls import path
from .import views

app_name = 'main'

urlpatterns = [
    path('', views.ComputerPageView.as_view(), name='computer'),
    path('printer/', views.PrinterPageView.as_view(), name='printer'),
    path('proektor/', views.ProektorPageView.as_view(), name='proektor'),
    path('wifi/', views.WifiPageView.as_view(), name='wifi'),
    path('camera/', views.CameraPageView.as_view(), name='camera'),
    path('base-edit/', views.BasePageView.as_view(), name='base_edit'),
    path('base-update/', views.updateDevice, name='base_edit'),

]
