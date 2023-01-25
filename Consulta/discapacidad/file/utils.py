def handle_uploaded_file(f):
    
    archivo="C:/Users/USER/Desktop/Refactor discapacidad/FiletoRead.csv"
    destination = open(archivo, 'wb+')
    for chunk in f.chunks():
        destination.write(chunk)
	#print chunk.split(';')
    destination.close()

    contador= 0
    for linea in open(archivo).xreadlines( ): contador+= 1

    return contador