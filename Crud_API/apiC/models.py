from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Users(models.Model):
    name=models.CharField('Nombre',max_length=15)
    lastName=models.CharField('Apellido',max_length=20)
    phoneNumber = PhoneNumberField('Numero de celular',unique = True, null = False, blank = False)

    def __str__(self):
        return self.name