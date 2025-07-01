from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/calcular', methods=['POST'])
def calcular():
    expressao = request.form['expressao']
    try:
        resultado = eval(expressao)
        return str(resultado)
    except:
        return "Erro"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000)
