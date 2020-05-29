from flask import Flask

@app.route('/')
def hello():
    str = 'hello'
    return str
    