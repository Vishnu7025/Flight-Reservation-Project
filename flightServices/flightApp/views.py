from django.shortcuts import render
from flightApp.models import Flight,Passenger,Reservation
from flightApp.serializers import FlightSerializer,PassengerSerializer,ReservationSerializer
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.

@api_view(['POST'])
def find_flights(request):
    flights = Flight.objects.filter(departureCity = request.data['departureCity'], arrivalCity = request.data['arrivalCity'],dateOfDeparture = request.data['dateOfDeparture'])
    serializer = FlightSerializer(flights,many = True)
    return Response(serializer.data)


class FlightViewSet(viewsets.ModelViewSet):
    queryset = Flight.objects.all()
    serializer_class = FlightSerializer

class PassengerViewSet(viewsets.ModelViewSet):
    queryset = Passenger.objects.all()
    serializer_class = PassengerSerializer

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
