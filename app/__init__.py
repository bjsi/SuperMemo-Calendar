from flask import Flask
from flask_cors import CORS


def create_app():
    """Application Factory"""

    app = Flask(__name__)
    CORS(app)
    app.config.from_object('config.Config')

    with app.app_context():
        from . import views
        return app
