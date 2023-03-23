from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .models import Bookshelf
from .serializers import BookshelfSerializer

# Create your views here.


@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def get_all_bookshelves(request):
    bookshelves = Bookshelf.objects.all()
    if request.method == 'POST':
        serializer = BookshelfSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        serializer = BookshelfSerializer(bookshelves, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_bookshelves(request):
    user_bookshelf = Bookshelf.objects.filter(created_by_id=request.user.id)
    if request.method == 'POST':
        serializer = BookshelfSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(created_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        serializer = BookshelfSerializer(user_bookshelf, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        user_bookshelf.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def bookshelf_detail(request, bookshelf_id):
    bookshelf = Bookshelf.objects.get(id=bookshelf_id)
    if request.method == 'GET':
        serializer = BookshelfSerializer(bookshelf, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    if request.method == 'PUT':
        serializer = BookshelfSerializer(bookshelf, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
