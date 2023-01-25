import csv 
import datetime
import MySQLdb
from MySQLdb import _mysql # api de alto nivel 
import xlwt
import os
from xlwt import *
import mimetypes

from django.http import HttpResponse
from django.template import loader   ## permite
from django.shortcuts import render  ## permite llamar a render 
from django import forms
from .forms import UploadFileForm


def vista_archivo(request):
    
    db=_mysql.connect(host="192.168.71.173",
                      user="root",
                      password="",
                      database="discapacidad") 
    
    vcon = str(db.get_host_info())
    print("Conectado a la BD:", vcon)

       
    RegFile = 0
    Genefile= 0
    if request.method=='POST':
        formUpFile = UploadFileForm(request.POST, request.FILES)
        if formUpFile.is_valid():
            RegFile=handle_uploaded_file(request.FILES['file'])      
            print ("Cantidad de registros: "+str(RegFile)) 
                   
             ### reemplazar los ; por , para evitar problemas en el cargue del archivo
            text = open("C:/Users/USER/Desktop/Recaudo Bogota/Discapacidad/refactor/cargue + consulta/Consulta/FiletoRead.csv", "r")  
            text = ''.join([i for i in text])   
            text = text.replace(";", ",") 
            text = text.replace("?", "N") 
            x = open("C:/Users/USER/Desktop/Recaudo Bogota/Discapacidad/refactor/cargue + consulta/Consulta/FiletoRead.csv","w")
            x.writelines(text)
            x.close()
            print("reemplazado ; por , ")
            ###
            Ctitulo = ['dia_registro','mes_registro','ano_registro','primer_nombre','segundo_nombre','primer_apellido','segundo_apellido','id_tipo_doc_ind','numero_documento','fecha_nacimiento','direccion','id_localidad_ind','barrio','fallecidos','Id_Novedad','Placa','OT','id_tipo_doc_ANTES','numero_identificacion_ANTES']
            archivo="C:/Users/USER/Desktop/Recaudo Bogota/Discapacidad/refactor/cargue + consulta/Consulta/FiletoRead.csv"
            with open(archivo) as file:                
                reader =csv.DictReader(file)
                print(reader.fieldnames[0])
                if reader.fieldnames == Ctitulo:
                    print("formato correcto del archivo")
                    data=handle_loaddata_file(db)
                    Genefile=handle_write_excelfile(db)
                    db.close()
                if not reader.fieldnames == Ctitulo:
                    print("Error en el formato del archivo")
                    return render(request,'error.html')
        
        return render(request, 'FileformUpload.html', {'formUpFile': formUpFile,'nombFile':Genefile,'regFile':RegFile})
    else:
        formUpFile = UploadFileForm()
        namefile = "No seleccionado"
        return render(request, 'FileformUpload.html', {'filePath': namefile,'formUpFile': formUpFile})     
     
def handle_uploaded_file(f):

    archivo="C:/Users/USER/Desktop/Recaudo Bogota/Discapacidad/refactor/cargue + consulta/Consulta/FiletoRead.csv"
    with open(archivo, 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
	
    destination.close()

    
    doc = open(archivo)
    contador = str(len(doc.readlines ())) 
    
    return (contador)


def handle_loaddata_file(db): 
    
    print ('Proceso Mysql inicio '+str(datetime.datetime.now()))
    
    query_str="""truncate table __tmp_data;""" 
    db.query(query_str)
    print ("1 Borrar datos tabla"+str(query_str)) 

    query_str="""ALTER TABLE __tmp_data AUTO_INCREMENT=1;"""
    db.query(query_str)
    print ("2 Borrar datos tabla"+str(query_str))
    
    query_str="""truncate table __tmp_load_data;"""
    db.query(query_str)
    print ("3 Borrar datos tabla"+str(query_str))

    query_str="""ALTER TABLE __tmp_load_data AUTO_INCREMENT=1;"""
    db.query(query_str)
    print ("4 Coloca el ID en 1 "+str(query_str))
    
    query_str="""truncate table card_novelty;"""
    db.query(query_str)
    print ("5 Borrar datos tabla "+str(query_str))

    query_str="""ALTER TABLE card_novelty AUTO_INCREMENT=1;"""
    db.query(query_str)
    print ("6 Coloca el ID en 1"+str(query_str))

    query_str="""truncate table card_person_vehicles;"""
    db.query(query_str)
    print ("7 Borrar datos tabla "+str(query_str))

    query_str="""ALTER TABLE card_person_vehicles AUTO_INCREMENT=1;"""
    db.query(query_str)
    print ("8 Coloca el ID en 1"+str(query_str))

    query_str="""delete from card_vehicle;"""
    db.query(query_str)
    print ("9 Borrar datos tabla"+str(query_str))

    query_str="""ALTER TABLE card_vehicle AUTO_INCREMENT=1;"""
    db.query(query_str)
    print ("10 Coloca el ID en 1"+str(query_str))

    query_str="""delete from card_person;"""
    db.query(query_str) 
    print ("11 borrar datos de la tabla " + str(query_str))

    query_str="""ALTER TABLE card_person AUTO_INCREMENT=1;"""
    db.query(query_str)
    print ("12 Coloca nuevamente el id en 1 " + str(query_str))

    db.query("""LOAD DATA LOCAL INFILE 
    'C:/Users/USER/Desktop/Recaudo Bogota/Discapacidad/refactor/cargue + consulta/Consulta/FiletoRead.csv'
      INTO TABLE discapacidad.__tmp_load_data
      CHARACTER SET UTF8 FIELDS TERMINATED BY ','
      OPTIONALLY ENCLOSED BY '\"' IGNORE 1 LINES
     (  record_day,
     record_month,
     record_year,
     first_name,
     second_name,
     last_name,
     last_name_second,
     kind_document,
     document,
     @birth_day,
     address,
     locality,
     neighborhood,
     is_death,
     sdm,
     license_plate,
     transit_entity,
     change_desc,
     observation  )
     SET birth_day = str_to_date(@birth_day, '%d/%m/%Y' );""")
    
    print("13 Cantidad de registros insertados: "+ str(db.affected_rows()))

    query_str="""update __tmp_load_data set kind_document= 'PEP' where kind_document='PE';"""
    db.query(query_str)
    print ("14 Update observation (PEP): "+str(db.affected_rows()))
  
    query_str="""update __tmp_load_data set kind_document= 'PPT' where kind_document='PT';"""
    db.query(query_str)
    print ("15 Update observation (PPT): "+str(db.affected_rows()))

    query_str="""update __tmp_load_data set observation= TRIM(BOTH '\r' FROM observation);"""
    db.query(query_str)
    print ("16 Update observation (Novedades): "+str(db.affected_rows()))
    
    query_str="""insert into card_person select NULL,
    record_day,
    record_month,
    record_year,
    first_name,
    second_name,
    last_name,
    last_name_second,
    kind_document,
    document,
    birth_day,
    address,
    locality,
    neighborhood,
    is_death,
    NOW(),
    NOW() from __tmp_load_data WHERE id not IN (SELECT id FROM card_person) and document !=''
    group by kind_document, document;"""
    db.query(query_str)
    print ("17 Cantidad de registros actualizados card_person: "+str(db.affected_rows()))
    
    query_str="""update __tmp_load_data a, card_person b set a.id=b.id where a.document=b.document;"""
    db.query(query_str)
    print ("18 cantidad de id actualizados a card person : "+str(db.affected_rows()))
    
    query_str="""UPDATE card_person a, __tmp_load_data b SET 
    a.record_day=b.record_day,
    a.record_month=b.record_month,
    a.record_year=b.record_year,
    a.first_name=b.first_name,
    a.second_name=b.second_name,
    a.last_name=b.last_name, 
    a.last_name_second=b.last_name_second,
    a.document=b.document, 
    a.birth_day=b.birth_day,
    a.address=b.address, 
    a.locality=b.locality, 
    a.neighborhood=b.neighborhood, 
    a.is_death=b.is_death WHERE a.id=b.id;"""
    db.query(query_str)
    print ("19 Actualiza cambios de datos en los registros antiguos: "+str(db.affected_rows()))

    query_str="""insert into card_novelty SELECT 
    null,
    sdm,
    id from __tmp_load_data where id!=0 and sdm in (1,2,3) group by id, sdm;"""
    db.query(query_str)
    print ("20 registros insertados en card_novelty: "+str(db.affected_rows()))

    query_str="""insert ignore into card_vehicle select
     null,
    license_plate, 
    transit_entity from __tmp_load_data where sdm != '';"""
    db.query(query_str)
    print ("21 registros insertados en  card_vehicle: "+str(db.affected_rows()))


    query_str="""insert ignore into  card_person_vehicles  select  null, 
    a.id person_id, 
    b.id vehicle_id  
    from __tmp_load_data a, card_vehicle b  where  
    a.license_plate=b.license_plate and  a.id!=0 and  a.sdm in (1,2,3)  group by b.id;""";
    db.query(query_str)
    print ("22 registros insertados en card_person_vehicles: "+str(db.affected_rows()))

    query_str="""insert into __tmp_data select kind_document, document, null, null from card_person order by document;"""
    db.query(query_str)
    print ("23 actualizando por tipo de documento desde card_person"+str(db.affected_rows()))

    query_str="""delete from __tmp_data where kind_document in ('TI', 'CC') and document not Rlike '^[0-9]*$';"""
    db.query(query_str)
    print ("24 volar los tipo de documento cuando esta vacio en _tmp_data"+str(query_str))    
    
    query_str="""update __tmp_data a, card_person b, card_novelty c set a.amount='0', 
    a.state='excluido' where a.document=b.document and b.id=c.person_id;"""
    db.query(query_str)
    print ("25 actualizar usuario a excluido en _tmp_data si aplica sdm "+str(query_str))
    
    query_str="""update __tmp_data a, card_person b set a.amount='0', 
    a.state='excluido' where a.document=b.document and b.is_death=2;"""
    db.query(query_str)
    print ("26 actualizar el usuario a excluido si aparece como death"+str(query_str))
    
    query_str="""update __tmp_data set amount=29500, state='activo' where amount is null and state is null;""" 
    db.query(query_str)
    print ("27 actualice el valor del subsidio al usuario"+str(query_str))
    
    print ("Proceso en la BD Finalizado "+str(datetime.datetime.now()))


   
def handle_write_excelfile(db):
    count=0
    libro=0
    title = ['Tipo de Documento','Documento','Monto','Estado']
    forma = ['@','0','0','@']

    print ("Proceso Excel inicio"+str(datetime.datetime.now()))

    wb = Workbook()
    style = XFStyle()

    query_str="""SELECT DISTINCT TMP.kind_document, TMP.document,
     CASE WHEN (TM.sdm IS NULL OR TM.is_death =  1 OR TM.license_plate OR TM.sdm<>''
     OR TM.document IS NULL) THEN 0 ELSE 29500 END AS amount, CASE WHEN (TM.sdm IS NULL OR TM.is_death =  1 
     OR TM.license_plate OR TM.sdm<>'' OR TM.document IS NULL)  THEN 'excluido' ELSE 'activo' END AS state 
     FROM __tmp_data TMP LEFT JOIN __tmp_load_data TM ON TMP.kind_document = TM.kind_document AND TMP.document
      = TM.document ;"""

    db.query(query_str)
    print (" Seleccion de los registros de la salida ")
    result=db.store_result()
    

    lista =[""]

    for row in result.fetch_row(maxrows=0):
        if count==0:
            sheet = wb.add_sheet("datos"+str(libro))
            for j in range(4):
             #print(title[j])
                sheet.write(0,j,title[j])
                      
        count+=1
        
        for j in range(4):
          style.num_format_str = forma[j]
          #print(row[j])
          lista.append(row[j])
          
          #print(lista[0])
          sheet.write(count,j,str(row[j]),style)
        
        if count==65000:
          count=0
          libro+=1
        
       
       # print(lista) ## para ensayar que esten llegando los datos de salida
 
    wb.save('C:/Users/USER/Desktop/Recaudo Bogota/Discapacidad/refactor/cargue + consulta/salida.xls')
    

    
    print ('Proceso Excel final '+str(datetime.datetime.now()))
    return result.num_rows()


def vista_faq(request):
    
    diccionario = {}

    return render(request,'faq.html',context=diccionario)


def vista_error_archivo(request):
    
    diccionario = {}

    return render(request,'error.html',context=diccionario)

def login(request):
    
    diccionario = {}

    return render(request,'login.html',context=diccionario)

def salud(request):
    
    diccionario = {}

    return render(request,'salud.html',context=diccionario)
    
def movilidad(request):
    
    diccionario = {}

    return render(request,'movilidad.html',context=diccionario)
    
def descargar_archivo(request): 
    
    diccionario = {}

    return render(request,'descarga.html',context=diccionario)
 
    