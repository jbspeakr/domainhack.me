=====
DMakr
=====

DMakr is a simple domain hacking app written in Python using Django 1.4.3.
> A domain hack is an unconventional domain name that combines domain levels,
> especially the top-level domain (TLD), to spell out the full "name"
> or title of the domain.
(Wikipedia)

DMakr tries to find TLDs in a given single word string and presents possible
domain hacks. Check this out on:

[www.domainmakr.eu](http://www.domainmakr.eu)


Quick start
-----------

1. Add "polls" to your INSTALLED_APPS setting like this::

      INSTALLED_APPS = (
          ...
          'dmakr',
      )

2. Include the polls URLconf in your project urls.py like this::

      url(r'^dmakr/', include('dmakr.urls')),

3. Run *python manage.py syncdb* to create the polls models.

4. Run *python manage.py loaddata dmakr-domain* to load TLDs into your database.

License
-------

DMakr is licensed under the MIT License.
