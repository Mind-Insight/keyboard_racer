from django.contrib.auth.models import AbstractBaseUser
from django.db import models


class User(AbstractBaseUser):
    identifier = models.CharField(max_length=50, unique=True)
    avg_speed = models.PositiveSmallIntegerField(default=0)
    races = models.PositiveSmallIntegerField(default=0)

    USERNAME_FIELD = "identifier"

    def __str__(self) -> str:
        return self.identifier

