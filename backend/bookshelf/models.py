import json
from django.db import models
from authentication.models import User
# Create your models here.


class Bookshelf(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)
    date_updated = models.DateTimeField(auto_now=True)
    total_books = models.PositiveIntegerField(default=0)
    list_of_books = models.JSONField(blank=True, default=list)

    def __str__(self) -> str:
        return '%s %s' % (self.created_by, self.name)


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.CharField(max_length=100)
    book_info = models.JSONField(default=dict)
    bookshelves = models.ManyToManyField(Bookshelf, related_name='books')

    def __str__(self) -> str:
        return self.title
