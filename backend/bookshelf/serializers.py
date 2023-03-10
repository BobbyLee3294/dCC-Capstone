from rest_framework import serializers
from .models import Bookshelf, Book


class BookshelfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookshelf
        fields = ['books', 'books_id', 'name', 'description',
                  'created_by', 'date_created', 'date_updated']
        depth = 1
    books_id = serializers.IntegerField(write_only=True)


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['api_id', 'api_link', 'book_info']
