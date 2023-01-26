from django.urls import path
from . import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('dev_register', views.dev_register),
    path('ass_register', views.ass_register),
    path('login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('test', views.type_logged),
    path('logout', auth_views.LogoutView.as_view(), name='logout'),

    path('get_all_dev', views.get_all_developer_profile),
    path('get_my_dev_profile', views.get_my_developer_profile),
    path('dev', views.dev_profile),
    
    path('get_all_ass', views.get_all_association_profile),
    path('get_my_ass_profile', views.get_my_association_profile ),
    path('ass', views.association_profile),

    path('get_all_posts', views.get_all_posts),
    path('get_my_posts', views.get_my_association_posts),
    path('post', views.posts)
    
]
