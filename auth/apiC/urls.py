from django.urls import path
from .views import UsersCrudView

urlpatterns=[
    path('products/', UsersCrudView.as_view(), name='products_list'),
    path('products/<int:id>', UsersCrudView.as_view(), name='products_process')
]