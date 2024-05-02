from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    identifier = models.CharField(max_length=50, unique=True)
    avg_speed = models.PositiveSmallIntegerField(default=0)
    races = models.PositiveSmallIntegerField(default=0)

    def __str__(self) -> str:
        return self.identifier

