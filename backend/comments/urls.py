from django.contrib import admin
from django.urls import path, include
from comments import views

urlpatterns = [
    path('', views.user_comments),
    path('all/', views.get_all_comments),
]
