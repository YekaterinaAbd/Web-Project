from django.shortcuts import render

# Create your views here.
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.views import APIView

from api.models import File, Course
from api.serializers import FileSerializer, CourseSerializer


class Courses(generics.ListCreateAPIView):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer


class Files(generics.ListCreateAPIView):
    queryset = File.objects.all()
    serializer_class = FileSerializer


class CourseFiles(APIView):
    def get(self, request, course_id):
        vacancies = File.objects.filter(course_id=course_id)
        serializer = FileSerializer(vacancies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = FileSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)
