from django.db import models


class Socio(models.Model):
    dni = models.CharField('documento', max_length=12, unique=True)
    nombre = models.CharField('nombre', max_length=50)
    apellido = models.CharField('apellido', max_length=50)
    gba = models.BooleanField('es del gba', default=False)

    def __str__(self):
        return self.nombre + ' ' + self.apellido
