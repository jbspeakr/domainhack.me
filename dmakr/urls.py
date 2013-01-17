from django.conf.urls import patterns, url

from dmakr import views

urlpatterns = patterns('dmakr.urls',
    url(r'^$', views.index, {}, name='index'),
    url(r'^domainhack/(?P<word>([a-z]+)/$)', views.hack, {}, name='domainhack'),
)
