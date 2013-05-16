"""
This file demonstrates writing tests using the unittest module. These will pass
when you run "manage.py test".

Replace this with more appropriate tests for your application.
"""

from django.test import TestCase
from django.core.urlresolvers import reverse

from dmakr.models import Domain


class DomainViewTest(TestCase):

    def test_index_okay(self):
        response = self.client.get(reverse('dmakr:index'))
        self.assertEqual(response.status_code, 200)

    def test_has_domain_hacks(self):
        """
        Tests that 'domain' always gets following domain-hacks:
        # http://dom.ai/n
        # http://.do/main
        # http://doma.in
        # http://do.ma/in
        # http://d.om/ain
        """

        create_domain(tld='ai', country='aiTest')
        response = self.client.get(reverse('dmakr:domainhack', args=('domain/', )))
        self.assertEqual(response.status_code, 200)
        self.assertEquals(response.context['word'], 'domain/')
        self.assertQuerysetEqual(
            response.context['domain_hacks'],
            ["u'http://dom.ai/n'"]
        )


def create_domain(tld, country):
    """
    Creates a poll with the given `question` published the given number of
    `days` offset to now (negative for polls published in the past,
    positive for polls that have yet to be published).
    """
    return Domain.objects.create(tld=tld, country=country)
