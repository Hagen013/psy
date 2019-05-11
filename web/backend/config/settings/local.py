from .develop import *

STATIC_ROOT = str(ROOT_DIR.path('frontend/static_production'))

# DATABASES CONFIGURATION START
# ------------------------------------------------------------------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': str(ROOT_DIR.path('backend/db.sqlite3')),
    }
}
# DATABASES CONFIGURATION END
# ------------------------------------------------------------------------------


# MEDIA FILES CONFIGURATION START
# ------------------------------------------------------------------------------
MEDIA_ROOT = "/var/psy/"
MEDIA_URL = '/media/'
# MEDIA FILES CONFIGURATION END
# ------------------------------------------------------------------------------