from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

from .models import Bookshelf
from .serializers import BookshelfSerializer

# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_bookshelves(request):
    bookshelves = Bookshelf.objects.all()
    serializer = BookshelfSerializer(bookshelves, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_bookshelves(request):
    if request.method == 'POST':
        serializer = BookshelfSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(created_by=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        user_bookshelf = Bookshelf.objects.filter(
            created_by_id=request.user.id)
        serializer = BookshelfSerializer(user_bookshelf, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
