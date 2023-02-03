from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .models import *
from rest_framework import status
from .serializers import *
from rest_framework.permissions import IsAuthenticated

#################################################################################################################
#  /////////////// login 
##################################################################################################################
class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['username'] = user.username
        return token
 
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

#########################################################################################################################
# ///////////////// developer registered 
####################################################################################################################
@api_view(['POST'])
def dev_register(request):
    # User - check for 'Class'.object (CustomUser, User or AbstactUser)
    user = CustomUser.objects.create_user(
                username=request.data['username'],
                email=request.data['email'],
                password=request.data['password']
            )
    user.is_active = True
    user.is_staff = False
    user.is_developer = True
    user.is_association = False
    user.save()
    return Response("new developer born")

##############################################################################################################################
# ///////////////// association registered
##################################################################################################################
@api_view(['POST'])
def ass_register(request):
    user = CustomUser.objects.create_user(
                username=request.data['username'],
                email=request.data['email'],
                password=request.data['password']
            )
    user.is_active = True
    user.is_staff = False
    user.is_developer = False
    user.is_association = True
    user.save()
    return Response("new association born")

#########################################################################################################################
# ////////////// check who was logged
##################################################################################################################3
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def type_logged(request):
    if request.user.is_developer:
        return Response("dev")
    elif request.user.is_association:
        return Response("ass")

###########################################################################################################
#//////////////// get custom user logein - email (for create profile)
##########################################################################################################
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getEmail(request):
    if request.method == "GET":
        try:
            # user that coneccted == the email of the user are connected (by email str)
            user= request.user
            serializer = CustomUserSerializer(CustomUser.objects.get(email = user))
        except:
                return Response(status=status.HTTP_400_BAD_REQUEST, data="not found")
        return Response(status=status.HTTP_200_OK, data=serializer.data['email'])
    
###################################################################################################################
# ////////////// create profile as developer - full crud
##################################################################################################################

# get functon that everyone can look at our developers (without authentication)
@api_view(["GET"])
def get_all_developer_profile(request,_id=-1):
    if request.method == "GET":
        serializer = DeveloperDetailsSerializer(Developer_details.objects.all(), many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

# get function that each developer can look at his profile
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_my_developer_profile(request):
    if request.method == "GET":
        try:
            # user that coneccted == the email of the user are connected (by email str)
            user= request.user
            serializer = DeveloperDetailsSerializer(Developer_details.objects.get(email_from_reg = user))
        except:
                return Response(status=status.HTTP_400_BAD_REQUEST, data="dev not found")
        return Response(status=status.HTTP_200_OK, data=serializer.data)

#  multi function that each developer can add, delete, and update his profile
@api_view(["POST","DELETE","PUT"])
@permission_classes([IsAuthenticated])
def dev_profile(request,_id=-1):
    # add profile
    if request.method == "POST":
        api_serializer=DeveloperDetailsSerializer(data=request.data, context={'user':request.user})
    
        if api_serializer.is_valid():
            api_serializer.save()
            return Response(api_serializer.data,status=status.HTTP_201_CREATED)
        else:
            print('error',api_serializer.errors)
            return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    # delete profile
    elif request.method == "DELETE":
        # the dev that coneect (by email str)
        dev_2_del = request.user
        # print(request.user)
        try:
            dev = Developer_details.objects.get(email_from_reg=dev_2_del)
            dev.delete()
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST, data="dev not found")
        return Response(status=status.HTTP_200_OK, data=request.user.id)

    # update by id
    elif request.method == "PUT":
         # the association that coneect (by email str)
        dev_2_upd = request.user
        try:
            print("aaa")
            temp_upd = Developer_details.objects.get(email_from_reg=dev_2_upd)
            ser = DeveloperDetailsSerializer(instance=temp_upd, data=request.data)
            if ser.is_valid():
                print("why not valid")
                ser.save()
                return Response(ser.data, status=status.HTTP_200_OK)
            return Response("NOT VALID", status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST, data="devloper not found")
    

# ######################################################################################################################
# ///////////// create profile as association - full crud
##########################################################################################################################

# get functon that everyone can look at our associations (without authentication)
@api_view(["GET"])
def get_all_association_profile(request,_id=-1):
    if request.method == "GET":
        serializer = AssociationDetailsSerializer(Association_details.objects.all(), many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

# get function that each association can look at his profile
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_my_association_profile(request):
    if request.method == "GET":
        try:
            # user that coneccted == the email of the user are connected (by email str)
            user= request.user
            serializer = AssociationDetailsSerializer(Association_details.objects.get(email_from_reg = user))
        except:
                return Response(status=status.HTTP_400_BAD_REQUEST, data="association not found")
        return Response(status=status.HTTP_200_OK, data=serializer.data)

#  multi function that each association can add, delete, and update his profile
@api_view(["POST","DELETE","PUT"])
@permission_classes([IsAuthenticated])
def association_profile(request,_id=-1):
    # add profile
    if request.method == "POST":
        api_serializer=AssociationDetailsSerializer(data=request.data, context={'user':request.user})
    
        if api_serializer.is_valid():
            api_serializer.save()
            return Response(api_serializer.data,status=status.HTTP_201_CREATED)
        else:
            print('error',api_serializer.errors)
            return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    # delete profile
    elif request.method == "DELETE":
        # the association that coneect (by email str)
        ass_2_del = request.user
        # print(request.user)
        try:
            association = Association_details.objects.get(email_from_reg=ass_2_del)
            association.delete()
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST, data="association not found")
        return Response(status=status.HTTP_200_OK, data="association delete")

    # update by id
    elif request.method == "PUT":
         # the association that coneect (by email str)
        ass_2_upd = request.user
        try:
            print("aaa")
            temp_upd = Association_details.objects.get(email_from_reg=ass_2_upd.email)
            ser = AssociationDetailsSerializer(instance=temp_upd, data=request.data)
            if ser.is_valid():
                print("bbb")
                ser.save()
                return Response(ser.data, status=status.HTTP_200_OK)
            return Response("NOT VALID", status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST, data="association not found")

    

# ######################################################################################################################
# ///////////// manage the association posts - full crud
##########################################################################################################################

# get functon that everyone can look at every post (without authentication)
@api_view(["GET"])
def get_all_posts(request,_id=-1):
    if request.method == "GET":
        serializer = PostsSerializer(Posts_of_the_associations.objects.all(), many=True)
        return Response(status=status.HTTP_200_OK, data=serializer.data)

# get function that each association can look at his posts only
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_my_association_posts(request):
    if request.method == "GET":
        try:
            # user that coneccted == the email of the user are connected (by email str)
            user= request.user
            # print(user)
            serializer = PostsSerializer(Posts_of_the_associations.objects.filter(email_from_reg = user), many=True)
            # print(serializer)
        except:
                return Response(status=status.HTTP_400_BAD_REQUEST, data="post not found")
        return Response(status=status.HTTP_200_OK, data=serializer.data)

#  multi function that each association can add, delete, and update his posts
@api_view(["POST","DELETE","PUT"])
@permission_classes([IsAuthenticated])
def posts(request,_id=-1):
    # add post
    if request.method == "POST":
        api_serializer=PostsSerializer(data=request.data, context={'user':request.user})
    
        if api_serializer.is_valid():
            api_serializer.save()
            return Response(api_serializer.data,status=status.HTTP_201_CREATED)
        else:
            print('error',api_serializer.errors)
            return Response(api_serializer.errors,status=status.HTTP_400_BAD_REQUEST)

    # delete post
    elif request.method == "DELETE":
        # the dev that coneect (by email str)
        id_2_del = _id
        try:
            post = Posts_of_the_associations.objects.get(id=id_2_del)
            post.delete()
        except:
            return Response(status=status.HTTP_400_BAD_REQUEST, data="post not found")
        return Response(status=status.HTTP_200_OK, data=id_2_del)

  