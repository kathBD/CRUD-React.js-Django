from django.views import View
from .models import Users
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http.response import JsonResponse
import json
# Create your views here.

class UsersCrudView(View):

    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self,request, id=0):
        if(id>0):
            users=list(Users.objects.filter(id=id).values())
            if len(users)>0:
                datos={'message':"Success",'users':users}
            else:
                datos={'message':"Users not found..."} 
            return JsonResponse(datos)     
        else:    
            users=list(Users.objects.values())
            if len(users)>0:
                datos={'message':"Success",'users':users}
            else:
                datos={'message':"Users not found..."}  
            return JsonResponse(datos)      

    def post(self,request):
        # print(request.body)
        jd=json.loads(request.body)
        # print(jd)
        Users.objects.create(name=jd['name'], lastName=jd['lastName'], phoneNumber=jd['phoneNumber'])
        datos={'message':"Success"}
        return JsonResponse(datos) 



    def put(self, request, id):
        jd=json.loads(request.body)
        users=list(Users.objects.filter(id=id).values())
        if len(users)>0:
            user=Users.objects.get(id=id)
            user.name=jd['name']
            user.lastName=jd['lastName']
            user.phoneNumber=jd['phoneNumber']
            user.save()
            datos={'message':"Success"}

        else:
            datos={'message':"Users not found..."}     
        return JsonResponse(datos) 

        

    def delete(self,request, id):
        users=list(Users.objects.filter(id=id).values())
        if len(users)>0:
            Users.objects.filter(id=id).delete()
            datos={'message':"Success"}
        else:
            datos={'message':"Users not found..."}     
        return JsonResponse(datos) 


    