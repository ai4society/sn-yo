# SN-YO: Surya Namaskar Yoga Ontology

> **Note:** This is a temporary repository prepared for anonymous review. Some URLs have been anonymized and may therefore not work in this version. After acceptance, the regular repository with the complete working URLs will be provided.

SN-YO is a Semantic Web ontology for representing Surya Namaskar
(Sun Salutation) yoga knowledge. It models asanas, pose occurrences,
sequence variants, breathing patterns, mantras, chakras, body-part
involvement, posture constraints, common pose errors, and correction
guidance in a structured OWL knowledge graph.

The ontology supports structured querying of Surya Namaskar knowledge,
comparison of sequence variants, and use in applications for exploring
and annotating Yoga-related information.

## Canonical PURLs

The following persistent identifiers are used by SN-YO. They are retained
in this review version because they form part of the ontology namespace
and are used in ontology imports, SPARQL queries, and resource identifiers.

| Ontology resource | PURL URI |
| --- | --- |
| Core ontology module | `https://purl.org/ai4s/yoga/sn-yo/core` |
| Merged ontology / full graph | `https://purl.org/ai4s/yoga/sn-yo/ontology` |
| Base Surya Namaskar sequence | `https://purl.org/ai4s/yoga/sn-yo/base-sn` |
| Variant 01 | `https://purl.org/ai4s/yoga/sn-yo/variant01` |
| Variant 02 | `https://purl.org/ai4s/yoga/sn-yo/variant02` |
| Variant 03 | `https://purl.org/ai4s/yoga/sn-yo/variant03` |

## Highlights

- Separates an `Asana` from a numbered `Pose` occurrence in a sequence.
- Models the reference Surya Namaskar sequence and multiple traditional variants.
- Captures pose transitions, repeated poses, inverse poses, laterality,
  support type, chakra, mantra, breathing pattern, and safety information.
- Includes a correction layer for common pose errors and corresponding
  correction instructions.
- Provides multilingual labels for asanas and breathing patterns across
  the six official United Nations languages and 22 Indian scheduled languages.
- Publishes the ontology as OWL/RDF with supporting documentation,
  competency questions, SPARQL queries, and visual diagrams.

## Repository Structure

- `index.html`: SN-YO resource website.
- `models/master.owl`: Merged ontology used for unified querying.
- `models/modules/`: Modular OWL files for the core model, reference
  sequence, and sequence variants.
- `models/label_csv and script/`: Label data and supporting material for
  multilingual labels.
- `docs/ontology-doc.html`: Generated ontology documentation.
- `metadata/`: Ontology metadata.
- `source/`: Reference source files used during ontology construction.
- `images/`: Ontology diagrams and visual resources.
- `css/` and `js/`: Static website assets.

## Ontology Components

SN-YO consists of a shared core ontology, a reference Surya Namaskar
sequence, three sequence variants, and an integrated ontology.

The shared core defines the principal classes, properties, annotations,
and constraints. Sequence-specific modules represent pose occurrences,
ordering relationships, repeated poses, inverse-pose relationships,
and variant-specific information.

The integrated ontology provides a common entry point for querying the
reference sequence and represented variants together.

## Competency Questions

The repository includes competency questions and corresponding SPARQL
queries used to examine whether SN-YO supports its intended information
requirements.

The competency questions cover:

- pose sequence and ordering;
- number of poses in a sequence;
- repeated poses;
- inverse-pose relationships;
- support type;
- asanas shared across variants;
- differences among sequence variants;
- breathing patterns and safety information;
- pose errors and correction instructions; and
- body-part associations.

## Multilingual Labels

SN-YO includes `rdfs:label` values for asanas and breathing-pattern
entities in the six official United Nations languages (`ar`, `zh`, `en`,
`fr`, `ru`, and `es`) and the 22 Indian scheduled languages listed in
the Eighth Schedule of the Constitution of India, for 28 languages in
total.

Indian language identifiers use BCP 47 / ISO 639 tags such as `hi`, `te`,
`brx`, `doi`, `kok`, `sat`, and `mni`. The tags are kept stable so that
ontology queries and language-selection functions can use the same
identifiers consistently.

The source label table is:

`models/label_csv and script/SN_YO_labels_combined.csv`

The labels are represented in:

`models/modules/core.owl`

and the merged ontology:

`models/master.owl`

For asanas, the labels preserve Sanskrit-derived Yoga posture names
across language scripts. They are intended as script-adapted labels for
asana names rather than independent descriptive translations of each
posture.

Breathing-pattern labels, including `BreathingPattern`, `Inhale`,
`Exhale`, and `Hold`, use short language-specific expressions.

## Documentation

Human-readable ontology documentation is available within the repository at:

`docs/ontology-doc.html`

The documentation describes classes, object properties, datatype
properties, individuals, annotations, and ontology-level metadata.

## Local Use

The repository can be served locally using a static file server:

```bash
python3 -m http.server 8080
