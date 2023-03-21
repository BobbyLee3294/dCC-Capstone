import json

# TODO: utilize this feature in React


class BookshelfUtils:
    @staticmethod
    def serialize_books(bookshelf):
        books = list(bookshelf.list_of_books.all())
        book_list = [book.title for book in books]
        bookshelf.list_of_books = json.dumps(book_list)
        bookshelf.save()
