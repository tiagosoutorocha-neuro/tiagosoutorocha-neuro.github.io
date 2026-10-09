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
  <span><i class="fa-solid fa-layer-group"></i> 4 preparatory studies (17th CCNEC)</span>
</div>

#### Overview

**Mild cognitive impairment (MCI)** is an intermediate stage between healthy aging and dementia, and identifying it early creates a window for intervention. No single measure captures it well. Brain activity, autonomic regulation, cognitive performance and emotional state each carry part of the signal.

This project builds a **multimodal classification model of MCI** that combines:

- **EEG**: resting-state brain activity from a wearable EEG.
- **HRV**: heart rate variability, recorded at the same time as the EEG, as a marker of autonomic regulation and the brain–heart axis.
- **Cognitive tests**: standardized cognitive screening (MoCA).
- **Psychological assessment**: depression, anxiety and stress symptoms (DASS-21), plus a sociodemographic questionnaire and anamnesis.

#### Groundwork: preparatory studies on aging and Alzheimer's disease

Before starting our own data collection, we carried out four studies, presented at the **17th CCNEC (September 2026)**, to test methods on existing data and define the collection protocol. Each one informed a part of the project.

**1. Which EEG protocol and markers to use.** _Electroencephalography in the Detection of Alzheimer's Disease and Mild Cognitive Impairment: An Integrative Review._ The review mapped how EEG data are acquired, processed and analyzed to detect Alzheimer's disease (AD) and MCI.

- **Most common protocol:** resting state with eyes closed, 19–32 electrodes, 250–512 Hz sampling, and screening with MMSE or MoCA.
- **Main result:** resting-state EEG, spectral analysis and cognitive screening together discriminate controls, MCI and AD, with **theta-band slowing as the earliest marker**.
- **Main obstacle:** protocols vary a lot between studies, which limits direct comparison and reproducibility.

This shaped our protocol: resting-state, eyes-closed EEG paired with MoCA screening.

**2. Can an interpretable model detect Alzheimer's from EEG?** _Explainable Machine Learning for Alzheimer's Disease Detection via Resting-State Electroencephalography._ **Best Work Award, 2nd place.**

- **Data:** resting-state EEG from the public **BrainLat** dataset (10 min, eyes closed, 128 channels, 512 Hz), Alzheimer's vs. healthy controls.
- **Pipeline:** 4-s epochs, 1–45 Hz band-pass filter and standardization. The features were relative band power, spectral ratios (θ/α, θ/β) and spectral entropy.
- **Model:** a machine learning classifier with leave-one-subject-out validation, explained with **SHAP**.
- **Results:** the most important features were those linked to **EEG slowing** (relative theta power and the θ/α and θ/β ratios), and the topographies confirmed the spectral slowing in AD. The optimized classifier reached **70% discriminative capacity**. The predicted probability of AD correlated with MoCA scores (p = 0.010), so the model's output was clinically coherent.

This study is the basis of the explainable pipeline we will apply to our own EEG data.

**3. Which EEG biomarkers matter beyond spectral power?** _Beyond Spectral Power: A Comparative Study of EEG Biomarker Categories Using Machine Learning for Alzheimer's Disease Screening._ The literature offers dozens of EEG biomarkers of slowing, connectivity or complexity. Most studies compare classifiers with different methods, so it was unclear which physiological categories really discriminate best under identical conditions.

- **Data:** 65 participants (Alzheimer's patients and controls), with features extracted in five frequency bands.
- **Six biomarker categories:** spectral power, slowing (global mean frequency), complexity (Lempel-Ziv), connectivity (phase-amplitude coupling), systemic oscillations (Kuramoto order) and functional disorganization (mutual information).
- **Models:** each category was tested alone and in a multivariate model, using random forest, support vector machine and XGBoost.
- **Results:** **connectivity (phase-amplitude coupling) and complexity (Lempel-Ziv)** performed best alone, both at **75%**. The classic markers, slowing and spectral power, performed worst (56–70%). The **multivariate signature combining all categories reached 81%**, outperforming every single category.

Traditional markers are not necessarily the most discriminative, and brain-network and nonlinear dynamics play a central role in Alzheimer's disease. The gain from combining categories is the same logic behind this project: analyze the brain, and the person, as an integrated system.

**4. Why psychological assessment belongs in the model.** _Sleep, Depressive Symptoms, and Cognitive Performance in Older Adults: A Possible Mediation Pathway._

- **Design:** cross-sectional secondary analysis of the public **RESILIENT** dataset, with adults aged 60 or older (n = 54–69).
- **Measures:** sleep efficiency (physiological monitoring mattress), depressive symptoms (PHQ-9) and cognition (ACE-III), analyzed with partial Spearman correlations controlled for age and sex.
- **Results:** sleep and cognition were **not** directly associated (ρ = 0.12, p = 0.19). **Depressive symptoms were related to both** poorer sleep (ρ = −0.28, p = 0.01) and poorer cognitive performance (ρ = −0.33, p = 0.007).

This supported including emotional symptoms (DASS-21) and sleep and context questions in the anamnesis, so that mood is modeled together with cognition.

<figure class="project-figure">
  <img src="{{ '/assets/img/project_mci.jpg' | relative_url }}" alt="Data collection stages: EEG and HRV recording, cognitive testing and anamnesis" data-zoomable>
  <figcaption>The three collection stages: EEG with HRV, then sociodemographic questionnaire and MoCA, then anamnesis and DASS-21. Participants' faces are blurred.</figcaption>
</figure>

#### Planned approach

- Extract features from each modality: EEG spectral and slowing markers (studies 1–2) together with connectivity and complexity measures (study 3), HRV time-domain, frequency-domain and nonlinear indices, and cognitive and psychological scores.
- Combine the modalities through multimodal fusion and compare them with single-modality models.
- Train machine learning classifiers with **nested cross-validation** to avoid overly optimistic estimates.
- Use **explainability (SHAP)** to show which features and modalities drive each prediction, and check the outputs against cognitive performance, as in study 2.

#### Data

Data come from the **[Cidade Madura]({{ '/news/cidade-madura-launch/' | relative_url }})** extension project, which follows older adults in a community setting with fortnightly collection sessions. Each participant goes through EEG and HRV recording, then sociodemographic questionnaire and MoCA, then anamnesis and DASS-21. All participants sign an informed consent form.

#### Outputs

Preparatory studies (17th CCNEC, 2026):

- **Explainable Machine Learning for Alzheimer's Disease Detection via Resting-State Electroencephalography**. **Rocha, T. S.**, Gouveia, G. S. M., Oliveira, S. I. A., Brito, A. M., Souto, S. F. _Best Work Award, 2nd place._ [Poster (PDF)]({{ '/assets/pdf/poster_rocha2026xai.pdf' | relative_url }}) · [Code (GitHub)](https://github.com/tiagosoutorocha-neuro/BrainLat_dataset_Alzheimer_EEG)
- **Beyond Spectral Power: A Comparative Study of EEG Biomarker Categories Using Machine Learning for Alzheimer's Disease Screening**. Oliveira, S. I. A., Souto, S. F., **Rocha, T. S.**, Gouveia, G. S. M., Paixão, L. M. [Poster (PDF)]({{ '/assets/pdf/poster_oliveira2026spectral.pdf' | relative_url }}) · [Code (GitHub)](https://github.com/SharaIsabell/eeg-alzheimer-biomarkers-analysis)
- **Electroencephalography in the Detection of Alzheimer's Disease and Mild Cognitive Impairment: An Integrative Review**. Alves, J. P. P., Brito, A. M., **Rocha, T. S.**, Oliveira, S. I. A., Souto, S. F. [Poster (PDF)]({{ '/assets/pdf/poster_alves2026eegreview.pdf' | relative_url }})
- **Sleep, Depressive Symptoms, and Cognitive Performance in Older Adults: A Possible Mediation Pathway**. Brito, A. M., **Rocha, T. S.**, Alves, J. P. P., Souto, S. F., Santana, A. N. [Poster (PDF)]({{ '/assets/pdf/poster_brito2026sleep.pdf' | relative_url }})

All posters and author lists are also on the [publications page]({{ '/publications/' | relative_url }}).
