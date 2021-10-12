from pymysql import NULL, STRING
from pymysql.cursors import Cursor
from Conexion import obtenerC

def insertar_puntaje(nickname="anonimo",puntaje=0):
    conexion = obtenerC()
    if(len(nickname) == 0):
        nickname = "anonimo"
    with conexion.cursor() as cursor:
        cursor.execute("INSERT INTO record(Nickname,Puntaje) VALUES (%s,%s)", (nickname,puntaje))
        conexion.commit()
        conexion.close()
def obtener_tabla():
    conexion=obtenerC()
    tabla=[()]
    with conexion.cursor() as cursor:
        cursor.execute("SELECT Nickname,Puntaje from record;")
        tabla = cursor.fetchall()
        
        conexion.commit()
        conexion.close()
    l=list(tabla)
    return sorted(l,key=lambda puntaje:puntaje[1],reverse=True) 
