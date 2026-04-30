# SN-YO: Surya Namaskar Yoga Ontology

[![SN-YO Website](https://img.shields.io/badge/Website-SN--YO-1f6f8b?style=for-the-badge)](https://ai4society.github.io/sn-yo/)
[![Repository](https://img.shields.io/badge/GitHub-ai4society%2Fsn--yo-24292f?style=for-the-badge&logo=github)](https://github.com/ai4society/sn-yo)
[![SN-YE Explorer](https://img.shields.io/badge/Explorer-SN--YE-2563eb?style=for-the-badge)](https://ai4society.github.io/sn-ye/)

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

Push this folder to the [ai4society/sn-yo](https://github.com/ai4society/sn-yo) repository, then enable GitHub Pages from the repository root. The ontology file is published from [`models/master.owl`](models/master.owl).

If the repository owner or repository name changes, update the WebVOWL links in `index.html` and `docs/ontology-doc.html`.

## Related Project

[![Open SN-YE Explorer](https://img.shields.io/badge/Open-SN--YE%20Explorer-2563eb?style=for-the-badge)](https://ai4society.github.io/sn-ye/)

Update the related-project link if the SN-YE repository is published under a different owner or name.

## License

This project is licensed under the MIT License.
