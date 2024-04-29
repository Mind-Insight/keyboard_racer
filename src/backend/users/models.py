from django.contrib.sessions.models import Session
from django.db import models


class CustomSession(models.Model):
    session = models.OneToOneField(Session, on_delete=models.CASCADE)
    user_identifier = models.CharField(max_length=36)
    user_info = models.JSONField(
        null=True, blank=True
    )

    def __str__(self):
        return f"CustomSession: {self.session.session_key}"
