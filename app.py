import json
from flask import Flask, render_template

app = Flask(__name__, template_folder="src/templates",
            static_folder="src/static")

manifest = '../src/static/dist/manifest.json'

with open(manifest) as user_file:
    file_contents = user_file.read()

manifest = json.loads(file_contents)


# css_file = manifest.get('src/components/index.css').get('file')
js_file = manifest.get('src/components/index.js').get('file')


app.jinja_env.globals['enviroment'] = 'development'
# app.jinja_env.globals['css_bundle_file'] = 'dist/' + css_file
app.jinja_env.globals['js_bundle_file'] = 'dist/' + js_file


@app.route("/")
@app.route("/index")
@app.route("/hello")
def index():
    return render_template("index.html")


if __name__ == '__main__':
    app.run(port=3000, debug=False)
