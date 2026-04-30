# SN-YO: Surya Namaskar Yoga Ontology

[![SN-YO Website](https://img.shields.io/badge/Website-SN--YO-1f6f8b?style=for-the-badge)](https://ai4society.github.io/sn-yo/)
[![SN-YO Repository](https://img.shields.io/badge/GitHub-ai4society%2Fsn--yo-24292f?style=for-the-badge&logo=github)](https://github.com/ai4society/sn-yo)
[![SN-YE Explorer](https://img.shields.io/badge/Explorer-SN--YE-2563eb?style=for-the-badge)](https://ai4society.github.io/sn-ye/)
[![SN-YE Repository](https://img.shields.io/badge/GitHub-ai4society%2Fsn--ye-24292f?style=for-the-badge&logo=github)](https://github.com/ai4society/sn-ye)

SN-YO is a Semantic Web ontology for representing Surya Namaskar (Sun Salutation) yoga knowledge. It models asanas, pose occurrences, sequence variants, breathing patterns, mantras, chakras, body-part involvement, posture constraints, common pose errors, and correction guidance in a structured OWL knowledge graph.

The ontology is designed to support queryable yoga knowledge, comparative study of Surya Namaskar traditions, and downstream tools such as educational explorers, reasoning systems, and ontology-grounded coaching interfaces.

## Highlights

- Separates an `Asana` from a numbered `Pose` occurrence in a sequence.
- Models the base Surya Namaskar sequence and multiple traditional variants.
- Captures pose transitions, repeated poses, inverse poses, laterality, support type, chakra, mantra, breathing pattern, and safety annotations.
- Includes a correction layer for posture rules, constraints, common errors, and correction instructions.
- Provides multilingual labels for ontology entities, including Hindi and Telugu labels for asanas.
- Publishes the ontology as OWL/RDF with supporting documentation and visual diagrams.

## Repository Structure

- `index.html`: Interactive SN-YO website.
- `models/master.owl`: Merged ontology used by the website and external tools.
- `models/modules/`: Modular OWL files for the core model, base sequence, and variants.
- `models/label_csv and script/`: Label CSV and helper script for multilingual label generation.
- `docs/ontology-doc.html`: Generated ontology documentation.
- `metadata/`: Ontology metadata.
- `source/`: Reference source files used during ontology construction.
- `images/`: Ontology diagrams and visual exports.
- `css/` and `js/`: Static website assets.

## Explore

Use the [SN-YO website](https://ai4society.github.io/sn-yo/) to browse the ontology overview, competency questions, project files, metadata, and visual resources.

The companion [SN-YE explorer](https://ai4society.github.io/sn-ye/) provides predefined and natural-language query interfaces over the ontology. Its source repository is available at [ai4society/sn-ye](https://github.com/ai4society/sn-ye).

## Local Use

Serve the repository with any static file server:

```bash
python3 -m http.server 8080
```

Then open `http://127.0.0.1:8080/`.

## License

This project is licensed under the MIT License.
