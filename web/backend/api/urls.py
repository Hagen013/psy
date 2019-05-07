from django.conf.urls import url, include

from .views import SubscribeListAPIView

urls_api = ([
    url(r'subscribes/$', SubscribeListAPIView.as_view(), name='list'),
])
