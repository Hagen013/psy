from django.conf import settings
# from django.urls import path, include
from django.views.generic import TemplateView
from django.conf.urls import url, include


urlpatterns = [
    url(r'', TemplateView.as_view(template_name='index.html')),
]

# if settings.DEBUG:
#     import debug_toolbar
#     from django.conf.urls.static import static

#     urlpatterns += [
#         path('__debug__/', include(debug_toolbar.urls)),
#     ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
