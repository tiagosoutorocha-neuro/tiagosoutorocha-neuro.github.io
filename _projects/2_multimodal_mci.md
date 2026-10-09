---
layout: page
title: Multimodal MCI Classification
description: Classifying mild cognitive impairment by combining EEG, heart rate variability, and cognitive and psychological assessment.
img: assets/img/project_mci.jpg
importance: 2
category: research
permalink: /projects/multimodal-mci-classification/
---

<div class="project-meta">
  <span><i class="fa-solid fa-calendar"></i> 2026 – Present</span>
  <span><i class="fa-solid fa-spinner"></i> Ongoing · data collection in progress</span>
</div>

#### Overview

**Mild cognitive impairment (MCI)** is an intermediate stage between healthy aging and dementia, and identifying it early creates a window for intervention. No single measure captures it well. Brain activity, autonomic regulation, cognitive performance and emotional state each carry part of the signal.

This project builds a **multimodal classification model of MCI** that combines:

- **EEG**: resting-state brain activity from a wearable EEG.
- **HRV**: heart rate variability, recorded at the same time as the EEG, as a marker of autonomic regulation and the brain–heart axis.
- **Cognitive tests**: standardized cognitive screening (MoCA).
- **Psychological assessment**: depression, anxiety and stress symptoms (DASS-21), plus a sociodemographic questionnaire and anamnesis.

<figure class="project-figure">
  <img src="{{ '/assets/img/project_mci.jpg' | relative_url }}" alt="Data collection stages: EEG and HRV recording, cognitive testing and anamnesis" data-zoomable>
  <figcaption>The three collection stages: EEG with HRV, then sociodemographic questionnaire and MoCA, then anamnesis and DASS-21. Participants' faces are blurred.</figcaption>
</figure>

#### Planned approach

- Extract features from each modality: EEG spectral and connectivity measures, HRV time-domain, frequency-domain and nonlinear indices, and test scores.
- Combine the modalities through multimodal fusion and compare them with single-modality models.
- Train machine learning classifiers with **nested cross-validation** to avoid overly optimistic estimates.
- Use **explainability (SHAP)** to show which features and modalities drive each prediction.

#### Data

Data come from the **[Cidade Madura]({{ '/news/cidade-madura-launch/' | relative_url }})** extension project, which follows older adults in a community setting with fortnightly collection sessions. Each participant goes through EEG and HRV recording, then sociodemographic questionnaire and MoCA, then anamnesis and DASS-21. All participants sign an informed consent form.

#### Expected contribution

The project aims to deliver an accessible, low-cost and interpretable screening approach for MCI, based on wearable sensors and short assessments that can be used in community and primary-care settings.
