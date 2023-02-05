from django.db import models
from authentication.models import User
# Create your models here.


class Bookshelf(models.Model):
    book = models.ForeignKey('Book', on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField()
    date_updated = models.DateTimeField()


class Book(models.Model):
    # Question: Could this reduce the number of requests? Possible TODO
    # api_id = models.CharField()
    # api_link = models.URLField()
    # book_info = models.JSONField()
    pass
