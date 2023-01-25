# -*- coding: utf-8 -*-
from django.db import models

DOCUMENTS_CHOICES = (
    ("AS", u"Adulto sin identificar"),
    ("CC", u"Cédula de Ciudadania"),
    ("CE", u"Cédula de Extranjeria"),
    ("MS", u"Menor sin Identificar"),
    ("PA", u"Pasaporte"),
    ("RC", u"Registro Civil"),
    ("TI", u"Tarjeta de Identidad"),
    ("PEP", u"Permiso Especial de Permanencia"),
    ("PPT", u"Permiso de Protección Temporal"),
)

LOCALITIES_CHOICES = (
    (1, "Usaquen"),
    (2, "Chapiner"),
    (3, "Santafe"),
    (4, "San Cristobal"),
    (5, "Usme"),
    (6, "Tunjuelito"),
    (7, "Bosa"),
    (8, "Kennedy"),
    (9, "Fontibon"),
    (10, "Engativa"),
    (11, "Suba"),
    (12, "Barrios Unidos"),
    (13, "Teusaquillo"),
    (14, "Los Martires"),
    (15, "Antonio Narino"),
    (16, "Puente Aranda"),
    (17, "La Candelaria"),
    (18, "Rafael Uribe"),
    (19, "Ciudad Bolivar"),
    (20, "Sumapaz"),
)

DEATH_CHOICES = (
    ("1", "Viva"),
    ("2", "Fallecida"),
)

SDM_CHOICES = (
    ("1", "Exceptuado por Pico y Placa"),
    ("2", "propietario de vehiculo"),
    ("3", "por solicitud del beneficiario"),
)

EXCLUED_KEYS = (
    'created_at', 
    'updated_at',
    '_state',
)

VALID_CHOICE=[]
for choice in SDM_CHOICES:
    VALID_CHOICE.append(choice[0])

class Card(models.Model):
    card_kind = models.CharField(max_length=200)
    person = models.OneToOneField("Person", on_delete=models.DO_NOTHING, null=True)

class Vehicle(models.Model):
    license_plate = models.CharField(max_length=10, blank=True, null=True)
    transit_entity = models.CharField(max_length=300, blank=True, null=True)

    def __unicode__(self):
        return u"{0.license_plate}".format(self)

class Person(models.Model):
    record_day = models.PositiveSmallIntegerField()
    record_month = models.PositiveSmallIntegerField()
    record_year = models.PositiveSmallIntegerField()
    first_name = models.CharField(max_length=300)
    second_name = models.CharField(max_length=300, blank=True, null=True)
    last_name = models.CharField(max_length=300)
    last_name_second = models.CharField(max_length=300, blank=True, null=True)
    kind_document = models.CharField(max_length=20, choices=DOCUMENTS_CHOICES)
    document = models.CharField(max_length=200, unique=True)
    birth_day = models.DateField()
    address = models.CharField(max_length=500, blank=True, null=True)
    locality = models.PositiveSmallIntegerField(choices=LOCALITIES_CHOICES)
    neighborhood = models.CharField(max_length=300, blank=True, null=True)
    is_death = models.CharField(max_length=1, choices=DEATH_CHOICES, default="2")
    vehicles = models.ManyToManyField('Vehicle', blank=True, null=True, related_name='owner')

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return u"{0.kind_document} {0.document} - {0.first_name} {0.second_name} {0.last_name} {0.last_name_second}".format(self)

    def __eq__(self, other):
        return self._compare(self, other)

    def __ne__(self, other):
        return not self._compare(self, other)

    def _compare(self, obj1, obj2):
        d1, d2 = obj1.__dict__, obj2.__dict__
        for k, v in d1.items():
            if k in EXCLUED_KEYS:
                continue
            try:
                if v != d2[k] :
                    return False
            except KeyError:
                raise RuntimeError('Invalid property {p} in {o}'.format(p=k, o=d2))
        return True
                


class Novelty(models.Model):
    sdm = models.CharField(max_length=1, choices=SDM_CHOICES, blank=True, null=True)
    person = models.ForeignKey('Person', on_delete=models.CASCADE,  related_name='novelties')

    def save(self, force_insert=False, force_update=False):
        if self.sdm in VALID_CHOICE:
            models.Model.save(self, force_insert, force_update)

