from django.urls import path

from .views import set_user_info, get_user_info


urlpatterns = [
    path("set-info/", set_user_info),
    path("get-info/", get_user_info),
]
