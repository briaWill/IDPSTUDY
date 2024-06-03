# app.py
from flask import Flask
import os
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hello, World! This is the landing page for ClearImpact, Revolutionizing ESG Disclosures."

if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT", 8080)),host='0.0.0.0',debug=True)


