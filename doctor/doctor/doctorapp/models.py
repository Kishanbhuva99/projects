from django.db import models

# Create your models here.


class DoctorProfile(models.Model):
    firstname=models.CharField(max_length=30)
    lastname=models.CharField(max_length=30)
    drt=models.CharField(max_length=70)
    city=models.CharField(max_length=50)
    mobile=models.BigIntegerField()
    email=models.EmailField()
    password=models.CharField(max_length=12)
    
class PatientRegistration(models.Model):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    username = models.EmailField()  
    password = models.CharField(max_length=12)  
    city = models.CharField(max_length=100)
    mobile = models.BigIntegerField()

class Appointment(models.Model):
    created=models.DateTimeField(auto_now_add=True)
    fullname=models.CharField(max_length=100)
    email=models.EmailField()
    appointdate=models.DateField()
    drt=models.CharField(max_length=100)
    mobile=models.BigIntegerField()
    message=models.TextField()