import json

# TODO: utilize this feature in React


class BookshelfUtils:
    @staticmethod
    def serialize_books(bookshelf):
        books = list(bookshelf.book_set.all())
        book_list = [book.book_info for book in books]
        bookshelf.list_of_books = json.dumps(book_list)
        bookshelf.save()
