from django.contrib import admin
from .models import Products
# Register your models here.
class ProductsAdmin(admin.ModelAdmin):
    list_display=(
        'pro_name',
        'pro_provider',
        'pro_existences',
        'pro_date',
        'pro_description',
        'pro_category',
        'id'

    )
    search_fields=('pro_name', 'pro_provider','pro_existences','pro_date','pro_description','pro_category',)

    list_filter=('pro_name',)

admin.site.register(Products, ProductsAdmin)