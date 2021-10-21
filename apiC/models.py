from django.db import models
# from phonenumber_field.modelfields import PhoneNumberField

# Create your models here.
class Products(models.Model):
    pro_name=models.CharField('Nombre',blank=True, max_length=90)
    pro_provider=models.CharField('Provedor',blank=True, max_length=50)
    pro_existences=models.IntegerField('Existentes',blank=True)
    pro_date=models.DateField('Fecha',auto_now=True)
    pro_description=models.TextField('Descripción')
    pro_category=models.CharField('Categoria',max_length=100)

    def __str__(self):
        return self.pro_name