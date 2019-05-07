from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class SubscribeListAPIView(APIView):

    def get(self, request, *args, **kwargs):
        return Response(
            {},
            status=status.HTTP_200_OK
        )

    def post(self, request, *args, **kwargs):
        return Response(
            {},
            status=status.HTTP_201_CREATED
        )
