from django.urls import path

from .views import UserDataView, RetrieveUserProfileView, TextView


urlpatterns = [
    path("info/", UserDataView.as_view(), name="user_data"),
    path("profile/<slug:identifier>/", RetrieveUserProfileView.as_view(), name="profile"),
    path("texts/", TextView.as_view(), name="texts"),
]
