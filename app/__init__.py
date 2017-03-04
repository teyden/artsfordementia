from flask import Flask

app = Flask(__name__, static_url_path='/static')

# Import components using blueprint handler variable
from app.api.controller import api as api_module

# Register blueprints
app.register_blueprint(api_module) 