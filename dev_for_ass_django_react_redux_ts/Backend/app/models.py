from django.db import models
from django.contrib.auth.models import AbstractUser

# new user table for all the users , developer and association as well
class CustomUser(AbstractUser):
    city = models.CharField(max_length = 30, blank = True)
    is_developer = models.BooleanField(null = True, blank = True)
    is_association = models.BooleanField(null = True, blank = True)

    def __str__(self):
        return self.email

# profile developer table
class Developer_details(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    email_from_reg = models.CharField(max_length = 255, null = False, blank = False)
    profile_picture = models.ImageField(null=True,blank=True,default='/placeholder.png')
    full_name = models.CharField(max_length = 255, null = True, blank = True)
    years_of_experience = models.IntegerField(null = True, blank = True)
    description = models.CharField(max_length = 255, null = True, blank = True)
    contact_phone_number = models.CharField(max_length = 255, null = True, blank = True)
    linkdin_url = models.CharField(max_length = 255, null = True, blank = True)
    GitHub_url = models.CharField(max_length = 255, null = True, blank = True)

    def __str__(self):
        return self.email_from_reg
    
#  association profile table
class Association_details(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    email_from_reg = models.CharField(max_length = 255, null = False, blank = False)
    profile_picture = models.ImageField(null=True,blank=True,default='/placeholder.png')
    association_name = models.CharField(max_length = 255, null = True, blank = True)
    description = models.CharField(max_length = 255, null = True, blank = True)
    contact_info = models.CharField(max_length = 255, null = True, blank = True)
    location = models.CharField(max_length = 255, null = True, blank = True)
    image = models.ImageField(null=True,blank=True,default='/placeholder.png')

    def __str__(self):
        return self.association_name

# posts of associations table
class Posts_of_the_associations(models.Model):
    user = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True )
    email_from_reg = models.CharField(max_length = 255, null = False, blank = False)
    post_title = models.CharField(max_length = 255, null = True, blank = True)
    post_description = models.CharField(max_length = 255, null = True, blank = True)
    photos = models.ImageField(null=True,blank=True,default='/placeholder.png')
    contact_phone_number = models.CharField(max_length = 255, null = True, blank = True)

    def __str__(self):
        return self.post_title