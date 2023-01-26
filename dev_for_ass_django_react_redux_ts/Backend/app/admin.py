from django.contrib import admin
from .models import CustomUser, Developer_details, Posts_of_the_associations, Association_details

# Register your models here.
admin.site.register(CustomUser)
admin.site.register(Developer_details)
admin.site.register(Association_details)
admin.site.register(Posts_of_the_associations)
