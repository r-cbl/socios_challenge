from django.db import migrations
import random
import string
import names


def create_data(apps, schema_editor):
    socio = apps.get_model('socios', 'Socio')
    numeros = string.digits
    for i in range(50):
        socio(dni=''.join(random.choice(numeros) for i in range(12)),
              nombre=names.get_first_name(),
              apellido=names.get_last_name(),
              gba=random.choice([True, False])
              ).save()


class Migration(migrations.Migration):
    dependencies = [
        ('socios', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]
