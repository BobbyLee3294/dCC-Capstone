from django.db import models
from authentication.models import User
# Create your models here.


class Bookshelf(models.Model):
    book = models.ForeignKey('Book', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField()
    date_updated = models.DateTimeField()


class Book(models.Model):
    api_id = models.CharField(max_length=12)
    api_link = models.URLField()
    book_info = models.JSONField()
