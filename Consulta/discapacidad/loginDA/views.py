from django.http import HttpResponse
from django.template import loader   ## permite
from django.shortcuts import render  ## permite llamar a render 

def login(request):
    
    
    diccionario = {}

    return render(request,'login.html',context=diccionario)


def buscar(request):
    
    import requests 
    import json 
    
    usuario=request.GET["username"]
    contraseña=request.GET["password"]  
    grupo=request.GET["grupo"]    

    print(usuario) 
    print(contraseña)
    print(grupo) 

    
    ### autenticacion con el directorio activo y almacenamiento del token
    url ='https://eyarfbj020.execute-api.us-west-2.amazonaws.com/auth/ldap'
    payload = {'username': usuario,'password': contraseña, 'group': grupo}
    ##payload = {'username': 'usercs','password': '0i2GXUvv6R', 'group': 'ConductaQA'} ## usuario de prueba
    response = requests.post(url, json=payload)
    print(response.url)
    
    if response.status_code == 200:
        response_json = response.json()
        access_token= response_json  
        token = access_token["token"]
        print (access_token)  
    ###
        ### solicitud de los datos usando el token
        url ='https://eyarfbj020.execute-api.us-west-2.amazonaws.com/ldap/getData'
        payload = {'username': usuario,'password': contraseña, 'group': grupo}
       ## payload = {'username': 'usercs','password': '0i2GXUvv6R', 'group': 'ConductaQA'} ## usuario de prueba
        hed = {'Authorization': 'Bearer ' + token}
        response = requests.post(url, json=payload, headers=hed)
        print(response.url) 

    if response.status_code == 200:
            print(response.content) 
            response_json2 =response.json()
            Dlogin = response_json2  
            validacion=str(Dlogin["login"])
    ###
            if validacion == 'True': 
                print("ingreso exitoso de usuario  %s. "%Dlogin["names"])
                respuesta = 0
                return render(request,'menu.html')
    else:
        print("datos incorrectos de ingreso ") 
        respuesta = 1

    diccionario = {'respuesta':respuesta}

    return render(request,'login.html',context=diccionario)
