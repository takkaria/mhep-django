from django.contrib import admin

from mhep.assessments.models import Assessment, Library, Organisation


@admin.register(Assessment)
class AssessmentAdmin(admin.ModelAdmin):
    list_display = ["name", "status", "owner", "organisation"]
    search_fields = ["name", "description"]


@admin.register(Library)
class LibraryAdmin(admin.ModelAdmin):
    list_display = ["name", "type", "owner", "number_of_items"]
    search_fields = ["name", "type"]

    def number_of_items(self, obj):
        return len(obj.data)


@admin.register(Organisation)
class OrganisationAdmin(admin.ModelAdmin):
    list_display = ["name", "number_of_assessments"]
    search_fields = ["name"]

    def number_of_assessments(self, obj):
        return obj.assessments.all().count()
