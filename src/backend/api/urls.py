from django.urls import path

from .views import UserDataView


urlpatterns = [
    path("info/", UserDataView.as_view(), name="user_data"),
]
