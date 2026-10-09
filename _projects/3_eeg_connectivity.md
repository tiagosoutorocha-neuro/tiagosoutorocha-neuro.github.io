---
layout: page
title: EEG Brain Connectivity
description: How brain networks measured with EEG reorganize with aging, cognitive performance and psychological symptoms.
img: assets/img/project_connectivity.jpg
importance: 3
category: research
permalink: /projects/eeg-brain-connectivity/
---

<div class="project-meta">
  <span><i class="fa-solid fa-calendar"></i> 2026 – Present</span>
  <span><i class="fa-solid fa-spinner"></i> Ongoing</span>
</div>

#### Overview

Cognition depends on how brain regions **communicate**, not only on what each region does on its own. This project uses **EEG connectivity** to study how brain networks are organized in older adults, and how that organization relates to **cognitive performance** and **psychological symptoms**.

#### Approach

- **Functional connectivity:** phase-based synchronization between channels, such as the weighted phase lag index (wPLI), estimated by frequency band (delta, theta, alpha, beta).
- **Directed connectivity:** measures of information flow between regions, such as transfer entropy, to estimate the direction of interactions (for example, bottom-up versus top-down).
- **Network analysis:** graph-theory measures of how the network is organized.
- **Statistical rigor:** surrogate testing, correction for multiple comparisons (FDR) and bootstrap confidence intervals.
- **Brain–behavior links:** connections between network edges and cognitive domains (MoCA) and psychological symptoms (DASS-21).

<figure class="project-figure">
  <img src="{{ '/assets/img/project_connectivity_full.jpg' | relative_url }}" alt="Individual functional connectivity at the extremes of MoCA performance" data-zoomable>
  <figcaption>Exploratory example: resting-state, eyes-closed functional connectivity (wPLI) in two individuals at the extremes of MoCA performance (24 vs. 6), shown for the theta, alpha and beta bands. These are two individuals, not a sample.</figcaption>
</figure>

#### Preliminary observations

In the first exploratory analyses of the Cidade Madura data, **lower cognitive performance was accompanied by a reorganization of connectivity, with a marked change in alpha-band synchronization**. These are preliminary results from a small sample, and the analysis is still in progress.

#### Data

Resting-state EEG from the **[Cidade Madura]({{ '/news/cidade-madura-launch/' | relative_url }})** extension project, recorded with a wearable EEG together with cognitive and psychological assessment.
