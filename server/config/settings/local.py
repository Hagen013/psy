from .develop import *

# DATABASES CONFIGURATION START
# ------------------------------------------------------------------------------
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': str(ROOT_DIR.path('server/db.sqlite3')),
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