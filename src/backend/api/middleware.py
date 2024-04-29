import uuid

from django.contrib.sessions.models import Session
from users.models import CustomSession


class CustomSessionMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if not request.session.session_key:
            request.session.create()

        session_key = request.session.session_key

        try:
            session = Session.objects.get(session_key=session_key)
            custom_session, created = CustomSession.objects.get_or_create(
                session=session
            )

            if created:
                user_identifier = str(uuid.uuid4())
                custom_session.user_identifier = user_identifier
                custom_session.save()
            else:
                user_identifier = custom_session.user_identifier
            print(
                f"User with session key {session_key} has user identifier: {user_identifier}"
            )
        except Session.DoesNotExist:
            pass

        response = self.get_response(request)
        return response
