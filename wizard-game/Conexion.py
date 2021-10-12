import pymysql
def obtenerC():
    return pymysql.connect(host='localhost',
                          user='root',
                          password='David1000017432',
                          db='puntuacion')