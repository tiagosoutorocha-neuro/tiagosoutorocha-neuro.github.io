---
layout: page
title: CCN Scoping Review
description: Mapping a decade of advances, paradigm shifts and new frontiers in computational cognitive neuroscience.
img: assets/img/project_scoping.png
importance: 1
category: research
permalink: /projects/ccn-scoping-review/
---

<div class="project-meta">
  <span><i class="fa-solid fa-calendar"></i> March 2025 – Nov 2025</span>
  <span><i class="fa-solid fa-circle-check"></i> Completed · accepted in <i>Cognitive Computation</i> (Springer Nature)</span>
  <span><i class="fa-solid fa-book-open"></i> 104 studies · 2015–2025</span>
</div>

#### Overview

**Computational cognitive neuroscience (CCN)** uses computational models to understand how the brain gives rise to cognition. It integrates three lines of progress: **bottom-up** computational neuroscience (neural models from which cognition emerges), **top-down** cognitive science (models of mechanisms such as language, reasoning and memory), and **artificial intelligence**, especially deep neural networks.

The field grew substantially over the last decade, but no review had systematically mapped its major advances. This scoping review fills that gap. It identifies the most frequently used computational models, the cognitive domains investigated, the computational tools employed, and whether studies are mainly **theoretical, translational or integrated**.

<figure class="project-figure">
  <img src="{{ '/assets/img/project_scoping.png' | relative_url }}" alt="Graphical abstract: the main advances in CCN in the last ten years" data-zoomable>
  <figcaption>Graphical abstract: the main advances in computational cognitive neuroscience, 2015–2025.</figcaption>
</figure>

#### Research questions

1. Which countries produce the most CCN studies?
2. Which journals are the most significant in CCN research?
3. Which cognitive areas are investigated?
4. What is the most common emphasis of the studies: theoretical, translational or integrated?
5. Which computational models are used most often?
6. How has the use of models changed over the past 10 years?
7. Which computational tools are used for each area of cognition?

#### Methods

- **Design:** scoping review following the **Joanna Briggs Institute (JBI)** methodology, reported with **PRISMA-ScR**. The protocol was registered on OSF, and the question was structured with the PCC framework (Population, Concept, Context).
- **Search:** **PubMed, Embase and IEEE Xplore** (April 24–28, 2025), covering January 2015 to April 2025, English only, using MeSH, DeCS and Emtree descriptors plus free-text terms. A relevance-ranked **Scopus** search and expert-informed identification complemented it.
- **Selection:** two independent pairs of reviewers screened the records blind in Rayyan, with a third reviewer resolving disagreements.
- **Synthesis:** qualitative synthesis complemented by descriptive quantitative analyses.

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/scoping/prisma_flow.jpg' | relative_url }}" alt="PRISMA flow diagram of the study selection" data-zoomable>
  <figcaption>PRISMA flow diagram. The databases returned 3,464 records. After removing 101 duplicates, 3,363 were screened, 379 full texts were assessed and 75 studies were included. The complementary searches added 29 studies, for a final corpus of 104.</figcaption>
</figure>

#### Key findings

- **Mostly theoretical research.** Of the 104 studies, **63 were theoretical**, 39 translational and only 2 integrated. Many models were validated only in silico, and the cost and heterogeneity of multimodal neural data (EEG, fMRI, MEG) still slow down translational work.
- **Cognitive domains.** **Memory** (20 studies) and **learning** (16) lead, followed by **decision-making** and **cognitive control** (15 each), language and communication (9) and emotion (7).
- **Computational models.** **Bayesian models** and **recurrent neural networks (RNNs)** were the most frequent (15 studies each), followed by convolutional neural networks (12), generative models (7), reservoir computing (5) and spiking neural networks (4).
- **Tools.** **Python** (36 studies) overtook **MATLAB** (25), surpassing it in cumulative adoption in 2019 and accelerating after 2021.
- **Where the research comes from.** China (24) and the United States (22) lead, followed by the United Kingdom (10) and Germany (9). The countries specialize in different cognitive domains.
- **Journals.** _Neural Networks_ published the most studies (6), followed by _Nature Communications_ (4).

<div class="row">
  <div class="col-sm-6">
    <figure class="project-figure">
      <img src="{{ '/assets/img/projects/scoping/cognitive_domains.jpg' | relative_url }}" alt="Number of studies per cognitive domain" data-zoomable>
      <figcaption>Number of studies per cognitive domain.</figcaption>
    </figure>
  </div>
  <div class="col-sm-6">
    <figure class="project-figure">
      <img src="{{ '/assets/img/projects/scoping/world_map.jpg' | relative_url }}" alt="Geographical distribution of CCN publications" data-zoomable>
      <figcaption>Geographical distribution of the included publications.</figcaption>
    </figure>
  </div>
</div>

#### A decade in three phases

1. **2015–2018, consolidation.** RNNs became the main framework for the temporal dynamics of memory and decision-making, and Bayesian models became the main tool for inference under uncertainty. Research focused on well-defined domains such as memory and learning.
2. **2019–2022, expansion.** Deep learning gained ground, with CNNs applied to neuroimaging decoding. Multimodal EEG, fMRI and MEG approaches, along with representational similarity analysis, encoding and decoding, became standard. Publications peaked in 2021.
3. **2023–2025, integration.** Hybrid approaches grew, including symbolic-neural systems, memory-augmented transformers and spiking networks with plasticity-based optimization, and neurobiological plausibility became an explicit criterion for evaluating models.

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/scoping/models_over_time.jpg' | relative_url }}" alt="Distribution of computational models over time, 2015–2025" data-zoomable>
  <figcaption>Distribution of the computational models used in CCN studies, 2015–2025.</figcaption>
</figure>

#### Challenges and future directions

The review identifies **neurobiological plausibility** as a central challenge for CCN. Other open problems are **model integration**, **mechanistic interpretability**, **external generalizability**, causal validation and the need for more **translational research**. Looking ahead, it discusses **transformers, foundation models, large language models and neuromorphic computing** as signs that CCN is entering a phase of more unified, multimodal and biologically informed models.

#### Outputs

- **Article accepted in _Cognitive Computation_** (Springer Nature), September 2026. [Preprint (PsyArXiv)](https://doi.org/10.31234/osf.io/rdeub_v1)
- Presented at **CCNEC 2025**: [Advances in Computational Cognitive Neuroscience: A Review](https://www.even3.com.br/anais/ccnec2025/1268033-compreendendo-os-avancos-na-neurociencia-cognitiva-computacional-nos-ultimos-10-anos--uma-revisao-de-escopo/)

**Authors:** **Rocha, T. S.**, Souto, S. F., Brito, A. M., Barbosa, T. P., Alves, J. P. P., Lins, M. V. S., Maciel, E. Q., Paixão, L. M.
