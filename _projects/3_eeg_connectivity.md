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
  <span><i class="fa-solid fa-diagram-project"></i> Resting-state EEG · wPLI · network analysis</span>
</div>

#### Overview

Cognition does not live in isolated brain regions. It depends on how regions **coordinate their activity over time**. Many studies of aging and dementia look at EEG _power_, that is, how much activity there is in each frequency band. This project looks at **connectivity**: how strongly different parts of the brain synchronize with each other, how that synchronization changes from moment to moment, and how it organizes into a network.

We study these networks in older adults from the **[Cidade Madura]({{ '/news/cidade-madura-launch/' | relative_url }})** extension project. The goal is to find out whether the way the brain network is organized, and how stable it is over time, relates to **cognitive performance** (MoCA) and **psychological symptoms** (DASS-21). This complements the [Multimodal MCI Classification]({{ '/projects/multimodal-mci-classification/' | relative_url }}) project: there, connectivity is one family of features; here, it is the object of study. The motivation also comes from our [preparatory study on EEG biomarkers]({{ '/projects/multimodal-mci-classification/' | relative_url }}), in which connectivity and complexity discriminated Alzheimer's disease better than spectral power or slowing alone.

#### Research questions

1. Does resting-state functional connectivity differ between older adults with better and worse cognitive performance?
2. Is the difference specific to certain frequency bands (theta, alpha, beta)?
3. Is the network **stable** across the recording, or does it fluctuate, and does that stability relate to cognition?
4. Does the network's organization (strength, clustering, hubs) relate to cognitive domains and emotional symptoms?

#### How we measure connectivity

- **Recording:** resting-state EEG with eyes closed, using a wearable EEG headset. The analyses below use 13 scalp electrodes (AF3, F7, F3, FC5, T7, O1, O2, P8, T8, FC6, F4, F8, AF4), which give 78 electrode pairs.
- **Cleaning:** the signal is split into **4-second epochs**, and only **artefact-free epochs** are kept, so blinks, muscle activity and movement do not create false connections.
- **Connectivity metric:** the **weighted phase-lag index (wPLI)** measures how consistently the oscillations of two electrodes keep a fixed phase relationship. It ignores zero-lag coupling, which reduces the influence of volume conduction, where one source is picked up by several electrodes at once. It ranges from 0 (no coupling) to 1 (perfect coupling).
- **Time-resolved analysis:** instead of averaging the whole recording into a single number, we compute connectivity **epoch by epoch** and follow how it evolves.
- **Network analysis:** each epoch becomes a weighted network (electrodes are nodes, wPLI values are edges). We summarize it with graph measures:
  - **Mean strength:** the average wPLI over all pairs, or how synchronized the whole network is.
  - **Weighted clustering (Onnela):** how much connected electrodes also connect to each other, forming local groups.
  - **Normalized clustering (γ):** clustering divided by the average clustering of 200 random reshuffles of the same weights. γ = 1 means no more local organization than chance.
- **Next steps:** directed connectivity (for example, transfer entropy) to estimate the direction of information flow, surrogate testing, FDR correction and bootstrap confidence intervals.

#### A first look: two contrasting cases

To see what these analyses reveal, we compared two individual recordings from the Cidade Madura data: **Case A**, the participant with the **highest MoCA score so far (24)**, and **Case B**, the participant with the **lowest (6)**. Both are shown on the **same color scale and axes**. Each animation steps through the **six artefact-free 4-second epochs** of a roughly 3-minute recording, from 9–13 s to 165–169 s.

##### Step 1: Who is synchronized with whom

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/connectivity/1_wpli_matrix.gif' | relative_url }}" alt="Animated wPLI connectivity matrices in the alpha band for Case A (MoCA 24) and Case B (MoCA 6) across six 4-second epochs" loading="lazy">
  <figcaption>Time-resolved functional connectivity in the alpha band (8–13 Hz). Each cell is the wPLI between two electrodes; darker green means stronger synchronization. The slider shows which part of the recording each frame comes from.</figcaption>
</figure>

**How to read it:** each matrix is a full map of the brain's connections at one moment. Rows and columns are electrodes, and the color of each cell shows how strongly that pair is synchronized.

**What stands out:**

- In **Case A**, the network starts strongly connected, especially around the left frontal electrodes (F7, AF3), and **loosens over the recording**. By the last epoch most cells are lighter.
- In **Case B**, the opposite happens. Connectivity **strengthens over time**, concentrated in right-hemisphere links (F8, FC6, T8, P8) and frontal–occipital pairs. The **left temporal electrode (T7) stays weakly coupled with almost everything**. This could reflect a real local change or recording quality, which is why group comparisons only use quality-controlled data.

##### Step 2: Which rhythms carry the difference

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/connectivity/2_band_dynamics.gif' | relative_url }}" alt="Animated line plots of mean wPLI in theta, alpha and beta bands across epochs for Case A and Case B" loading="lazy">
  <figcaption>Mean wPLI across all 78 electrode pairs, per frequency band (theta 4–8 Hz, alpha 8–13 Hz, beta 13–30 Hz), epoch by epoch. Same axis for both recordings; the vertical line marks the current epoch.</figcaption>
</figure>

**How to read it:** each line summarizes one frequency band as a single number per epoch, the average synchronization across all electrode pairs.

**What stands out:**

- Both cases start at similar levels: theta ≈ 0.42 vs. 0.39, alpha ≈ 0.33 vs. 0.31, beta ≈ 0.25 vs. 0.23.
- In **Case A**, all three bands **decline** over the recording, ending around theta 0.23, alpha 0.19 and beta 0.15.
- In **Case B**, **theta and alpha rise steadily**, with theta reaching ≈ 0.49 and alpha ≈ 0.36, while beta stays flat.
- So the difference is **not constant**. It builds up over the recording and is driven mainly by the **slow rhythms (theta and alpha)**, the same bands that our [preparatory studies]({{ '/projects/multimodal-mci-classification/' | relative_url }}) identified as most affected in Alzheimer's disease.

##### Step 3: How the network is organized

<figure class="project-figure">
  <img src="{{ '/assets/img/projects/connectivity/3_network_topology.gif' | relative_url }}" alt="Animated brain network maps and graph measures (mean strength, weighted clustering, normalized clustering) for Case A and Case B across epochs" loading="lazy">
  <figcaption>Alpha-band network topology. Top: the 12 strongest of the 78 electrode pairs at each epoch, drawn on a template brain (top view), with line width proportional to wPLI. Bottom: mean strength, weighted clustering and normalized clustering γ, which use all pairs.</figcaption>
</figure>

**How to read it:** the brains show _where_ the strongest connections are, and the lower panels summarize the _whole_ network.

**What stands out:**

- **Where the hubs are.** Case A's strongest links radiate from a **left frontal hub (F7)** at the start and are spread across both hemispheres. Case B's strongest links concentrate in the **right hemisphere and frontal–occipital pathways**, with the left temporal region (T7) left out.
- **Mean strength and clustering** follow the same diverging trajectories as Step 2. In the last epoch, mean strength is **0.19 in Case A vs. 0.35 in Case B**, and weighted clustering is **0.18 vs. 0.34**.
- **Normalized clustering (γ)** stays close to 1 in both cases (1.00–1.01). The local grouping is mostly explained by _how strong_ the connections are, not by a special arrangement of them. Telling these two explanations apart is one of the reasons we normalize the network measures.

#### What this example does, and does not, show

These are **two individual recordings, not a sample**. They show what the method can capture: **the network's dynamics over time, the frequency bands involved and its topology**, beyond what a single averaged value would reveal. They do **not** establish that low cognitive performance causes or always comes with these patterns. In our first exploratory analyses of the Cidade Madura data, **lower cognitive performance was accompanied by a reorganization of connectivity, with a marked change in alpha-band synchronization**. Whether this holds across the cohort is exactly what the project will test.

#### Next steps

- Extend the analysis to all Cidade Madura participants, after quality control, and compare groups by cognitive performance.
- Relate connectivity, its stability over time and the network measures to **MoCA domains** and **DASS-21** scores, with correction for multiple comparisons.
- Add **directed connectivity** to estimate the direction of information flow between regions.
- Feed the most informative connectivity features into the [multimodal MCI classification model]({{ '/projects/multimodal-mci-classification/' | relative_url }}).

All participants sign an informed consent form, and the cases shown here are anonymized.
