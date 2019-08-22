from django.test import TestCase
from mhep.assessments.models import Assessment

import pytest


@pytest.mark.django_db
class TestAssessmentModel(TestCase):
    def tearDownClass(cls):
        Assessment.objects.delete()

    def test_sensible_default_values(self):
        a = Assessment.objects.create()

        assert a.openbem_version == '10.1.1'
        assert a.status == 'In progress'
