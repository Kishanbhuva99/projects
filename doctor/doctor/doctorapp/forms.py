from django import forms
from .models import *

class DoctorProfileForm(forms.ModelForm):
    class Meta:
        model = DoctorProfile
        fields = '__all__'
        
class updateForm(forms.ModelForm):
    class Meta:
        model = DoctorProfile
        fields = ['firstname', 'lastname', 'drt','city','mobile', 'email']
        
class PatientRegistrationForm(forms.ModelForm):
    class Meta:
        model = PatientRegistration
        fields = '__all__'
        
class appointmentForm(forms.ModelForm):
    class Meta:
        model=Appointment
        fields= ['fullname','email','appointdate','drt','mobile','message']
