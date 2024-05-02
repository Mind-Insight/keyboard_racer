from django.contrib.auth import get_user_model

from rest_framework.views import APIView
from rest_framework.response import Response

User = get_user_model()


class UserDataView(APIView):
    def post(self, request):
        user_data = request.data
        print(user_data)
        return Response({"message": f"Data received successfuly {user_data}"})
