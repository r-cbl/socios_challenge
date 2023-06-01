from rest_framework import serializers
from socios.models import Socio


class SocioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socio
        fields = ['id', 'dni', 'nombre', 'apellido', 'gba']
