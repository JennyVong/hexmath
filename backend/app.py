from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/hexagon', methods=['GET'])
def get_hexagon():
    # Example response, could be expanded for puzzle generation
    numbers = [2, 4, 6, 8, 10, 5, 7]
    target = 24
    return jsonify({"numbers": numbers, "target": target})

if __name__ == '__main__':
    app.run(debug=True)