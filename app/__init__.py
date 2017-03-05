from flask import Flask

app = Flask(__name__, static_url_path='/static')

# Import components using blueprint handler variable
from app.api.controller import api as api_module

# Register blueprints
app.register_blueprint(api_module)

import os 
UPLOAD_FOLDER = os.path.dirname(os.path.abspath(__file__))
app.config['UPLOAD_FOLDER'] = os.path.join(UPLOAD_FOLDER, 'uploads/')