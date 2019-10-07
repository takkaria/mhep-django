from rest_framework.test import APITestCase
from rest_framework import status


class TestListOrganisationAssessments(APITestCase):
    def test_list_organisation_assessments(self):
        # NOTE: any organisation ID should work, since there's no concept of an organisation
        # at the moment
        response = self.client.get("/api/v1/organisations/1/assessments/")
        assert response.status_code == status.HTTP_200_OK

        assert [] == response.data

    def test_create_organisation_assessment(self):
        new_assessment = {
            "openbem_version": "10.1.1",
            "name": "test assessment 1",
            "description": "test description 2",
        }

        response = self.client.post(
            "/api/v1/organisations/1/assessments/",
            new_assessment,
            format="json"
        )

        assert response.status_code == status.HTTP_400_BAD_REQUEST
        assert None is response.data