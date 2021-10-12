from flask import Flask, render_template, redirect, abort, request
import Controlador

app = Flask(__name__)

@app.route("/")
def hello():
    return render_template('index.html')

@app.route("/guardar_puntuacion", methods=['POST'])
def guardar_puntuacion():
    nickname=request.form['Nickname'] 
    puntaje=request.form['Puntuacion']
    Controlador.insertar_puntaje(nickname,puntaje)
    return redirect("/")
    
@app.route("/ranking")
def ranking():
    tablas = Controlador.obtener_tabla()
    return render_template('ranking.html', tablas=tablas)
@app.route("/instrucciones")
def instrucciones():
    return render_template('instrucciones.html')

@app.route("/game")
def game():
    return render_template('juego.html')
if __name__ == '__main__':
    app.run(port=3000, debug= True)
