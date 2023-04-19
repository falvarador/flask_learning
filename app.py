import json
from flask import Flask, render_template

app = Flask(__name__, template_folder="src/templates",
            static_folder="src/static")

with open('./src/static/dist/manifest.json') as user_file:
    file_contents = user_file.read()

manifest = json.loads(file_contents)


js_file = manifest.get('src/components/index.js').get('file')


app.jinja_env.globals['js_bundle_file'] = 'dist/' + js_file


@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(port=3000, debug=False)
