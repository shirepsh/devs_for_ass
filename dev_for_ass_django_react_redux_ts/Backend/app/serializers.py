from .models import *
from rest_framework import serializers

# the users serializer
class CustomUserSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = CustomUser
        fields = '__all__'

    def create(self, validated_data): 
        user = self.context['user']
        return CustomUser.objects.create(**validated_data, user =  user)

# the developer serializer
class DeveloperDetailsSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Developer_details
        fields = '__all__'

    def create(self, validated_data): 
        user = self.context['user']
        return Developer_details.objects.create(**validated_data, user =  user)

# the association serializer
class AssociationDetailsSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Association_details
        fields = '__all__'

    def create(self, validated_data): 
        user = self.context['user']
        return Association_details.objects.create(**validated_data, user =  user)

# the posts serializer
class PostsSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Posts_of_the_associations
        fields = '__all__'

    def create(self, validated_data): 
        user = self.context['user']
        return Posts_of_the_associations.objects.create(**validated_data, user =  user)