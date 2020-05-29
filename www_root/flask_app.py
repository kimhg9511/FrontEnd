from flask import Flask, request, session, render_template, redirect, url_for
app = Flask(__name__)

@app.route('/')
def hello():
    str = 'hello'
    return str


@app.route('/dashboard')
def dashboard():
    return render_template('dashboard/index.html')


@app.route('/mogo')
def mogo():
    return render_template('mogo/Mogo.html')


@app.route('/storyboard')
def storyboard():
    return render_template('storyboard/index0.html')


if __name__ == '__main__':
    hello()
    app.debug = True
    app.run()