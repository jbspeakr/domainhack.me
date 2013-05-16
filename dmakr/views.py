from django.shortcuts import render
from dmakr.models import Domain
from django.http import HttpResponse
from django.views.decorators.cache import cache_control
import json


@cache_control(public=True)
def index(request):
    return render(request, 'dmakr/index.html')


@cache_control(public=True)
def hack(request, word):
    domain_hacks = get_domain_hacks(word)
    json_response = json.dumps(domain_hacks)

    return HttpResponse(json_response, mimetype='application/json')


def get_domain_hacks(word):
    domain_hacks = []

    if word.__len__() > 60:
        return domain_hacks
    else:
        for domain in Domain.objects.all():
            if domain.tld in word:
                domain_hack = {}
                domain_hack = create_domain_hack(word, domain)
                domain_hacks.append(domain_hack)
    return domain_hacks


def create_domain_hack(word, domain):
    domain_hack = {}
    domain_hack['tld'] = domain.tld
    domain_hack['country'] = domain.country

    words = word.rsplit(domain.tld, 1)

    if words[-1] == '' or words[-1] == '/':
        domain_hack['domainName'] = words[0]
        domain_hack['suffix'] = ''
    else:
        if words[0] == '':
            domain_hack['domainName'] = 'xxx'
        else:
            domain_hack['domainName'] = words[0]
        domain_hack['suffix'] = '/' + words[1][:-1]

    return domain_hack


def create_error_message():
    msg = []
    return msg
