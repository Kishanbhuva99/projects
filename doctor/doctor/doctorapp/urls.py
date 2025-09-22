from django.contrib import admin
from django.urls import path,include
from doctorapp import views

urlpatterns = [
    path('login/', views.login),
    path('registration/', views.registration),
    path('', views.index),
    path('about/', views.about),
    path('contact/', views.contact),
    path('doctors/', views.doctors,name='doctors'),
    path('doctorprofile/', views.doctorprofile),
    path('showdata/', views.showdata,name='showdata'),
    path('delete/<int:id>/', views.delete, name='delete'),
    path('update/<int:id>/', views.update, name='update'),
    path('userlogout/', views.userlogout ,name='userlogout'),
    
]
