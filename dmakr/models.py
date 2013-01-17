from django.db import models


class Domain(models.Model):
    id = models.AutoField(primary_key=True)
    tld = models.CharField(max_length=6)
    country = models.CharField(max_length=200)

    def __unicode__(self):
        return self.tld

