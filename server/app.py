from dotenv import load_dotenv
from flask import Flask, request as r
from flask_cors import CORS
from requests import request
import os

load_dotenv()
API_KEY = os.getenv("API_KEY")

def create_app():
    app = Flask(__name__)
    CORS(app)

    @app.route("/recommendations/", methods=["GET"])
    def recommend_artists():
        artist = r.args.get('artist')

        recommend_url = f"https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist={artist}&api_key={API_KEY}&format=json"
        try:
            response = request("get", recommend_url)
            data = response.json()
            print(data)
            return data
        except Exception as e:
            raise e

    return app

if __name__ == "__main__":
    app = create_app()
    app.run()