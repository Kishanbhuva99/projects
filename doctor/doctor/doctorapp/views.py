from django.shortcuts import render,redirect
from .forms import *
from .models import *
from django.contrib.auth import logout

# Create your views here.

def index(request):
    user=request.session.get('user')
    return render(request,'index.html',{'user':user})

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def doctors(request):
    if request.method == 'POST':
        form = appointmentForm(request.POST )
        if form.is_valid():
                form.save()
                print("Data Is Added successfully")
                return redirect('/')
        else:
                print("Form is not valid")
                print(form.errors)
    return render(request, 'doctors.html')

def login(request):
     msg=""
     if request.method == "POST":
        unm = request.POST.get("username")
        pas = request.POST.get("password")

        user = PatientRegistration.objects.filter(username=unm, password=pas)
        if user: 
            print("Login Successfully!")
            msg="Login Successfully!"
            request.session["user"] = unm  
            return redirect("/")
        else:
            print("Error!Login faild...")
            msg="Error!Login faild..."
     return render(request, 'login.html', {'msg': msg})

def registration(request):
    msg=""
    if request.method=='POST':
        newuser=PatientRegistrationForm(request.POST)
        if newuser.is_valid():
            newuser.save()
            print("Registration Successfully!")
            msg="Registration Successfully!"
            return redirect('/login')
        else:
            print(newuser.errors)
            msg="Error!"
    return render(request,'registration.html',{'msg':msg})

def userlogout(request):
    logout(request)
    return redirect('/')

def doctorprofile(request):
    msg=""
    if request.method=='POST':
        dp=DoctorProfileForm(request.POST)
        if dp.is_valid():
            dp.save()
            print("Record Inserted Successfully!")
            msg="Record Inserted Successfully!"
        else:
            print(dp.errors)
            msg="Error! Something went Wrong! Try Again "
    return render(request,'doctorprofile.html',{'msg':msg})

def showdata(request):
    data=DoctorProfile.objects.all()
    return render(request,'showdata.html',{'data':data})

def delete(request, id):
    data=DoctorProfile.objects.get(id=id)
    data.delete()
    return redirect('/showdata')

def update(request, id):
    msg=""
    data=DoctorProfile.objects.get(id=id)
    if request.method == 'POST':
        form=updateForm(request.POST, instance=data)
        if form.is_valid():
            form.save()
            print("Record Updated Successfully!")
            msg="Record Updated!"
            return redirect('/showdata')
        else:
            print(form.errors)
            msg="Error!"
    return render(request,'update.html',{'data':data})