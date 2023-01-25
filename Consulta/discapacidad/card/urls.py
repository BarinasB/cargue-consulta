"""card URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from card.views import index
from file.views import vista_faq
from file.views import vista_error_archivo
from file.views import vista_archivo 
from file.views import salud
from file.views import movilidad
from file.views import descargar_archivo
from loginDA.views import login 
from loginDA.views import buscar





urlpatterns = [
    path('admin/', admin.site.urls),
    path('tarjeta/', index, name='tarjeta'),
    path('faq/', vista_faq, name='faq'),
    path('error_archivo/', vista_error_archivo),
    path('archivo/', vista_archivo, name='archivo'),
    path('login/', login, name='login'),
    path('salud/', salud, name='salud'),
    path('movilidad/', movilidad, name='movilidad'),
    path('Asalida/', descargar_archivo , name='Asalida'),
    path('buscar/', buscar, name='buscar'),
     
]
