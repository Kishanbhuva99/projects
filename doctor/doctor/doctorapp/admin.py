from django.contrib import admin
from .models import *

# Register your models here.

class Doctorinfo(admin.ModelAdmin):
    ordering = ["id"]
    list_display = ["id", "firstname", "lastname", "drt", "city", "mobile", "email"]
    
admin.site.register(DoctorProfile, Doctorinfo)