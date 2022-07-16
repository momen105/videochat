from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.index, name='door'),
    # re_path(r'', views.VideoChatConsumer.as_asgi(), name='socket')

]
