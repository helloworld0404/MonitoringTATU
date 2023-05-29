from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_moderator = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return str(f'{self.first_name} {self.last_name}')
