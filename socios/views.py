from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Socio
from .serializers import SocioSerializer
from rest_framework import status, permissions
from django.http import Http404
from django.db.models import Q


class SocioAPIView(APIView):
    def get(self, request, format=None, *args, **kwargs):
        q = {}
        gba = request.GET.get('gba')
        if gba is not None:
            q.update({'gba': gba == 'true'})

        nombre = request.GET.get('nombre')
        if nombre is not None:
            q.update({'nombre': nombre})

        apellido = request.GET.get('apellido')
        if apellido is not None:
            q.update({'apellido': apellido})

        socio = Socio.objects.filter(**q)

        serializer = SocioSerializer(socio, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = SocioSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SocioAPIViewDetail(APIView):

    def get_object(self, pk):
        try:
            return Socio.objects.get(pk=pk)
        except Socio.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        socio = self.get_object(pk)
        serializer = SocioSerializer(socio)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        socio = self.get_object(pk)
        serializer = SocioSerializer(socio, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk, format=None):
        socio = self.get_object(pk)
        socio.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
