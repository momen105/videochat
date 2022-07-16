from django.urls import re_path
from . import consumers

websocket_urlpatterns = [
    re_path(r'socket/', consumers.VideoChatConsumer.as_asgi()),
]
