from django.contrib.auth import get_user_model

from rest_framework.views import APIView
from rest_framework.generics import RetrieveAPIView
from rest_framework.response import Response

from .serializers import UserSerializer

User = get_user_model()


class UserDataView(APIView):
    def post(self, request):
        user_data = request.data
        identifier = user_data["identifier"]
        if not User.objects.filter(identifier=identifier).exists():
            User.objects.create(identifier=identifier)
        user = User.objects.get(identifier=identifier)
        return Response(
            {"user": f"id: {identifier}; races: {user.races}; speed: {user.avg_speed}"}
        )


class RetrieveUserProfileView(RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = "id"

    def get_object(self):
        identifier = self.kwargs["identifier"]
        return User.objects.get(identifier=identifier)


class TextView(APIView):
    def get(self, request, *args, **kwargs):
        words = ["test", "type"]
        return Response(words)
