from django.core.validators import FileExtensionValidator
from django.db import models


# Create your models here.

class Course(models.Model):
    name = models.TextField(max_length=300)


class File(models.Model):
    name = models.CharField(max_length=300, default="def")
    file = models.FileField(upload_to='files/',
                            validators=[FileExtensionValidator(allowed_extensions=
                                                               ['pdf'])],
                            blank=True, null=True, verbose_name="")
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='files')