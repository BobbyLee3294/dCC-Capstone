from django.views.generic import CreateView

from backend.bookshelf.models import Bookshelf

# Create your views here.

# Question: Could I create bookshevles without having to using google's API
# Better Question: How can I make bookshevles that are better than Google's (lul)
#


class BookshelfCreateView(CreateView):
    model = Bookshelf
    template_name_suffix = "Shelf"
    # form_class =
