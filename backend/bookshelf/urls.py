from django.urls import path, include
from bookshelf import views

urlpatterns = [
    path('', views.user_bookshelves),
    path('all/', views.get_all_bookshelves),
    path('<int:bookshelf_id>/', views.bookshelf_detail),
]
