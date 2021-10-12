from django.urls import path
from .views import UsersCrudView

urlpatterns=[
    path('users/', UsersCrudView.as_view(), name='users_list'),
    path('users/<int:id>', UsersCrudView.as_view(), name='users_process')
]