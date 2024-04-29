import uuid

from django.contrib.sessions.models import Session
from django.http import HttpResponse

from users.models import CustomSession


def set_user_info(request):
    session_key = request.session.session_key
    if not session_key:
        request.session.create()

    user_info = {
        "username": "JohnDoe",
        "email": "johndoe@example.com",
    }

    session = Session.objects.get(session_key=session_key)
    custom_session, _ = CustomSession.objects.get_or_create(session=session)
    custom_session.user_info = user_info
    custom_session.save()

    return HttpResponse("User information set successfully")


def get_user_info(request):
    session_key = request.session.session_key
    session = Session.objects.get(session_key=session_key)
    custom_session = CustomSession.objects.get(session=session)
    user_info = custom_session.user_info

    if user_info:
        username = user_info.get("username")
        email = user_info.get("email")
        return HttpResponse(f"Username: {username}, Email: {email}, id: {custom_session.user_identifier}")
    else:
        return HttpResponse("User information not found")
