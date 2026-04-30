# SN-YO: Surya Namaskar Yoga Ontology

SN-YO is the ontology-focused website and data repository for the Surya Namaskar Yoga Ontology. It contains the OWL knowledge graph, ontology modules, documentation, metadata, source references, and the static website used to present the ontology.

## Contents

- `index.html`: GitHub Pages entry point for the SN-YO website.
- `models/`: OWL files, ontology modules, label CSV, and label-generation helper script.
- `docs/ontology-doc.html`: Generated ontology documentation.
- `metadata/`: Ontology metadata.
- `source/`: Source PDFs and spreadsheet used for ontology construction.
- `images/`: Ontology diagrams and visual exports used by the website.
- `css/` and `js/`: Static website styling and behavior.

## Run Locally

Serve the folder with any static file server:

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.

## GitHub Pages

Push this folder to `https://github.com/ai4society/sn-yo`, then enable GitHub Pages from the repository root. The ontology file will be available at:

```text
https://ai4society.github.io/sn-yo/models/master.owl
```

If the repository owner or repository name changes, update the WebVOWL links in `index.html` and `docs/ontology-doc.html`.

## Related Project

The Explorer Tool button points to the standalone SN-YE repository:

```text
https://ai4society.github.io/sn-ye/
```

Update that link if the SN-YE repository is published under a different owner or name.

## License

This project is licensed under the MIT License.
