from django.urls import path

from .views import UserDataView, RetrieveUserProfileView


urlpatterns = [
    path("info/", UserDataView.as_view(), name="user_data"),
    path("profile/<slug:identifier>/", RetrieveUserProfileView.as_view(), name="profile"),
]
