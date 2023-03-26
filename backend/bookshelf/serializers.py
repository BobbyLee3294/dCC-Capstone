from pytz import timezone
from rest_framework import serializers
from .models import Bookshelf, Book


class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['title', 'author', 'book_info', 'bookshelf']

        def create(self, validated_data):
            # Extract the associated bookshelf ID from the validated data
            bookshelf_id = validated_data.pop('bookshelf')

            # Create the new book object
            book = Book.objects.create(**validated_data)

            # Update the associated bookshelf's total_books field
            bookshelf = Bookshelf.objects.get(id=bookshelf_id)
            bookshelf.total_books = bookshelf.book_set.count()
            bookshelf.save()

            return book


class BookshelfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookshelf
        fields = ['id', 'name', 'description', 'date_created',
                  'date_updated', 'total_books', 'list_of_books', 'created_by']
        # depth = 1

    def update(self, instance, validated_data):
        if 'books' in validated_data:
            books_data = validated_data.pop('books')
            instance.books.all().delete()
            list_of_books = []
            for book_data in books_data:
                book = Book.objects.create(bookshelf=instance, **book_data)
                list_of_books.append(book.title)
            instance.list_of_books = list_of_books
            instance.total_books = len(list_of_books)
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.date_updated = timezone.now()
        instance.save()
        return instance
