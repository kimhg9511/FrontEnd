from flask import Flask, request, session, render_template, redirect, url_for
app = Flask(__name__)

@app.route('/')
def hello():
    str = 'hello'
    return str


@app.route('/dashboard')
def dashboard():
    return render_template('dashboard/html/index.html')


@app.route('/dashboard')
def dashboard():
    return render_template('mogo/html/Mogo.html')


@app.route('/storyboard')
def dashboard():
    return render_template('storyboard/html/index0.html')


if __name__ == '__main__':
    hello()
    app.debug = True
    app.run()