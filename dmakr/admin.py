from django.contrib import admin
from dmakr.models import Domain


class DomainAdmin(admin.ModelAdmin):
    list_display = ('id', 'tld', 'country')
    list_filter = ['id']
    search_fields = ['tld']

admin.site.register(Domain, DomainAdmin)
