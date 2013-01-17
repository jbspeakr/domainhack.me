from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

from dmakr import views

urlpatterns = patterns('dmakr.urls',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', views.index, {}, name='index'),
    url(r'^domainhack/(?P<word>([a-z]+)/$)', views.hack, {}, name='domainhack'),
)
