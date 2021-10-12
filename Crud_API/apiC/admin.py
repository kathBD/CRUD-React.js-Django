from django.contrib import admin
from .models import Users
# Register your models here.
class UsersAdmin(admin.ModelAdmin):
    list_display=(
        'name',
        'lastName',
        'id'

    )
    search_fields=('name', 'lastName',)

    list_filter=('name',)

admin.site.register(Users, UsersAdmin)