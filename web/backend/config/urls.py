from django.conf import settings
from django.views.generic import TemplateView
from django.conf.urls import url, include

from api.urls import urls_api

urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name='index.html')),
    url(r'^policy/$', TemplateView.as_view(template_name='pages/policy.html')),
    url(r'^api/', include(urls_api, namespace='api')),
]
