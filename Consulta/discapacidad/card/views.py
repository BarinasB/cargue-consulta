from django.shortcuts import render, redirect
#from appointment.forms import AppointmentStep1
from card.forms import SearchForm, ConfirmationForm
from django import forms

from .models import Person


def index(request):
    context = {}
    MSG_NOBD = False # No esta en la BD
    MSG_PYP = False # Pico y placa
    MSG_VHCL = False # propietario
    MSG_CHC = False
    MSG_DTH = False # fallecido
    
   
   
     
    if request.method == "POST":
        search_form = SearchForm(request.POST)
        if search_form.is_valid():
            kd = search_form.cleaned_data['kind_document']
            d = search_form.cleaned_data['document']
            qs = Person.objects.all().filter(kind_document=kd, document=d)
     
            
            if qs.exists():
                print ("qs exist"+str(qs))
                person = qs[0]
                print ("Person"+str(person))
                context['person'] = person
                print ("context"+str(context))
                # context['show_person_data'] = True
                
                if person.novelties.filter(sdm="1").exists():
                    print ("person.novelties.filter(sdm=1)"+str(person.novelties.filter))
                    MSG_PYP = True
                    search_form = None
                elif person.novelties.filter(sdm="2").exists():
                    search_form = None
                    MSG_VHCL = True
                    plates = [v.license_plate for v in person.vehicles.all()]
                    vehicles_count = person.vehicles.all().count()
                    plates = list(set(plates))
                    vehicles_count=len(plates)
                    context['plates'] = plates
                    context['vehicles_count'] = vehicles_count
                elif person.novelties.filter(sdm="3").exists():
                    search_form = None
                    MSG_CHC = True
                elif person.is_death == "2":
                    search_form = None
                    MSG_DTH = True
                else:
                    context['person'] = person
                    context['show_person_data'] = True
                    confirmation_form = ConfirmationForm(
                            initial = {
                                    'person_id': person.id,
                                    'person_document': person.document,
                                    'confirm' : True,
                                }
                        )
                    context['confirmation_form'] = confirmation_form
            else:
                search_form = None
                MSG_NOBD = True
    else:
        search_form = SearchForm()

    context['search_form'] = search_form
    context['MSG_NOBD'] = MSG_NOBD
    context['MSG_PYP'] = MSG_PYP
    context['MSG_VHCL'] = MSG_VHCL
    context['MSG_CHC'] = MSG_CHC
    context['MSG_DTH'] = MSG_DTH
    return render(request, "index.html", context)

def root_index(request):
    return redirect('index')

