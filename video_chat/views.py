import json

from django.shortcuts import render
from channels.generic.websocket import AsyncWebsocketConsumer


def index(request):
    context = {}
    return render(request, 'index.html', context=context)


