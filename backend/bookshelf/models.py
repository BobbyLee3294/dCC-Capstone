from django.db import models
from authentication.models import User
# Create your models here.


class Bookshelf(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    total_books = models.IntegerField(default=0)
    list_of_books = models.JSONField(blank=True, null=True)


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    book_info = models.JSONField(default=dict)
    bookshelf = models.ManyToManyField(Bookshelf)
