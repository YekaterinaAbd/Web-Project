from django.urls import path
from api.views import Files, CourseFiles, Courses

urlpatterns = [
    path('files/', Files.as_view()),
    path('courses/', Courses.as_view()),
    path('courses/<int:course_id>/files/', CourseFiles.as_view()),
]