from flask import Flask, request
import rates

app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0')