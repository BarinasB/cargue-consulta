# -*- coding: utf-8 -*-
from django import forms

from card.models import DOCUMENTS_CHOICES

class SearchForm(forms.Form):
    kind_document = forms.ChoiceField(choices=(('','Seleccione un tipo de documento'),)+DOCUMENTS_CHOICES, label=u"Tipo de identificación")
    document = forms.CharField(max_length=200, label=u"Identificación")
    

class ConfirmationForm(forms.Form):
    person_id = forms.IntegerField(widget=forms.HiddenInput)
    person_document = forms.CharField(max_length=200, widget=forms.HiddenInput)
    confirm = forms.BooleanField(required=False, widget=forms.HiddenInput)