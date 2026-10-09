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
  <span><i class="fa-solid fa-location-dot"></i> NeuroComp · NUTES / UEPB, Brazil</span>
</div>

<nav class="project-toc" aria-label="On this page">
  <a href="#overview">Overview</a>
  <a href="#key-questions">Key questions</a>
  <a href="#approach">Approach</a>
  <a href="#first-results">First results</a>
  <a href="#limitations">Limitations</a>
  <a href="#outlook">Outlook</a>
  <a href="#references">References</a>
</nav>

<div class="glance">
  <div class="glance-item"><span class="glance-value">13</span><span class="glance-label">scalp electrodes<br>(wearable EEG)</span></div>
  <div class="glance-item"><span class="glance-value">78</span><span class="glance-label">connections per<br>network</span></div>
  <div class="glance-item"><span class="glance-value">4 s</span><span class="glance-label">artefact-free<br>epochs</span></div>
  <div class="glance-item"><span class="glance-value">θ · α · β</span><span class="glance-label">frequency bands<br>(4–30 Hz)</span></div>
  <div class="glance-item"><span class="glance-value">wPLI</span><span class="glance-label">phase-based<br>connectivity</span></div>
</div>

<h4 id="overview">Overview</h4>

Cognition depends on how brain regions **coordinate their activity over time**, not only on what each region does on its own ([Fries, 2015](https://doi.org/10.1016/j.neuron.2015.09.034); [Bassett & Sporns, 2017](https://doi.org/10.1038/nn.4502)). In Alzheimer's disease and its prodromal stages, resting-state EEG shows abnormal synchronization and coupling across long-range cortical networks, especially fronto-parietal and fronto-temporal ones ([Babiloni et al., 2016](https://doi.org/10.1016/j.ijpsycho.2015.02.008)). Network science suggests that neurological disorders can involve the overload and failure of network hubs ([Stam, 2014](https://doi.org/10.1038/nrn3801)).

Data from Latin American populations remain comparatively scarce in this field, and multicentric efforts are now working to harmonize EEG connectivity across sites. This project asks whether these network signatures can be captured with an **affordable, wearable EEG** in **older adults living in the community** in northeastern Brazil. Combining several connectivity measures with multi-feature machine learning is a promising route to EEG-based dementia biomarkers ([Prado et al., 2022](https://doi.org/10.1016/j.ijpsycho.2021.12.008)).

Our data come from the **[Cidade Madura]({{ '/news/cidade-madura-launch/' | relative_url }})** extension project. This project is the network-level counterpart of the [Multimodal MCI Classification]({{ '/projects/multimodal-mci-classification/' | relative_url }}) project. In that project's [preparatory study]({{ '/projects/multimodal-mci-classification/' | relative_url }}), connectivity and complexity markers discriminated Alzheimer's disease better than spectral power or slowing alone.

<h4 id="key-questions">Key questions</h4>

1. Does resting-state functional connectivity differ between older adults with **better and worse cognitive performance** (MoCA)?
2. Are the differences **specific to frequency bands** (theta, alpha, beta)?
3. Is the network **stable over the recording, or does it drift**, and does that temporal stability relate to cognition?
4. How do network **organization** (strength, clustering, hubs) and **emotional symptoms** (DASS-21) relate?

<h4 id="approach">Approach</h4>

<div class="pipeline" role="list">
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">1</span><b>Record</b><span>Resting-state EEG, eyes closed, wearable headset</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">2</span><b>Clean</b><span>Split into 4-s epochs, keep only artefact-free ones</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">3</span><b>Connect</b><span>wPLI for every electrode pair, per band</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">4</span><b>Track</b><span>One network per epoch, followed over time</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">5</span><b>Summarize</b><span>Strength, clustering, normalized clustering γ</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">6</span><b>Relate</b><span>Link to MoCA domains and DASS-21</span></div>
</div>

Each methodological choice has a reason and a limit:

<div class="table-responsive">
<table class="table table-sm method-table">
  <thead>
    <tr><th>Choice</th><th>Why</th><th>Limitation</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Weighted phase-lag index (wPLI)</b></td>
      <td>Measures how consistently two signals keep a phase lead or lag. Weighting by the imaginary part of the cross-spectrum makes it robust to volume conduction and noise (<a href="https://doi.org/10.1016/j.neuroimage.2011.01.055">Vinck et al., 2011</a>).</td>
      <td>It discards genuine zero-lag coupling, and at sensor level it does not localize sources.</td>
    </tr>
    <tr>
      <td><b>Time-resolved networks</b></td>
      <td>Networks fluctuate within a recording. Averaging hides that variability, which may itself relate to cognition (<a href="https://doi.org/10.1016/j.neuroimage.2013.05.079">Hutchison et al., 2013</a>).</td>
      <td>Short windows give noisier estimates, so fluctuations need to be tested against null models.</td>
    </tr>
    <tr>
      <td><b>Graph measures</b></td>
      <td>Strength and weighted clustering summarize integration and local organization with standard, interpretable measures (<a href="https://doi.org/10.1016/j.neuroimage.2009.10.003">Rubinov &amp; Sporns, 2010</a>; <a href="https://doi.org/10.1103/PhysRevE.71.065103">Onnela et al., 2005</a>).</td>
      <td>Clustering depends on overall connection strength, so we normalize it against 200 shuffles of each network's own weights (γ).</td>
    </tr>
    <tr>
      <td><b>Wearable 13-channel EEG</b></td>
      <td>Low-cost and portable, so it can be used in the community, where the participants live.</td>
      <td>Sparse coverage and low spatial resolution, and it is more exposed to movement and contact artefacts than lab systems.</td>
    </tr>
  </tbody>
</table>
</div>

Electrodes: AF3, F7, F3, FC5, T7, O1, O2, P8, T8, FC6, F4, F8 and AF4. Planned extensions include directed connectivity (for example, transfer entropy), surrogate testing, FDR correction and bootstrap confidence intervals.

<h4 id="first-results">First results: two contrasting cases</h4>

As a first look, we compared two individual recordings from the Cidade Madura data: **Case A**, the participant with the **highest MoCA score so far (24)**, and **Case B**, the participant with the **lowest (6)**. Both are shown on the **same color scale and axes**. Each animation steps through the **six artefact-free 4-second epochs** of a roughly 3-minute recording, from 9–13 s to 165–169 s.

<figure class="project-figure numbered-figure">
  <img src="{{ '/assets/img/projects/connectivity/1_wpli_matrix.gif' | relative_url }}" alt="Animated wPLI connectivity matrices in the alpha band for Case A (MoCA 24) and Case B (MoCA 6) across six 4-second epochs" loading="lazy">
  <figcaption><b>Figure 1. Who is synchronized with whom.</b> Time-resolved functional connectivity in the alpha band (8–13 Hz). Each cell is the wPLI between two electrodes; darker green means stronger synchronization. The slider shows which part of the recording each frame comes from.</figcaption>
</figure>

<div class="row result-notes">
  <div class="col-md-5"><div class="note-box note-read"><b>How to read it</b>Each matrix is a full map of the brain's connections at one moment. Rows and columns are electrodes, and each cell's color shows how strongly that pair is synchronized.</div></div>
  <div class="col-md-7"><div class="note-box note-key"><b>Key observations</b>
    <ul>
      <li><b>Case A:</b> the network starts strongly connected, especially around the left frontal electrodes (F7, AF3), and <b>loosens over the recording</b>.</li>
      <li><b>Case B:</b> connectivity <b>strengthens over time</b>, concentrated in right-hemisphere links (F8, FC6, T8, P8) and frontal–occipital pairs. The <b>left temporal electrode (T7) stays weakly coupled</b>. This may reflect a real local change or contact quality, which is why group analyses only use quality-controlled data.</li>
    </ul>
  </div></div>
</div>

<figure class="project-figure numbered-figure">
  <img src="{{ '/assets/img/projects/connectivity/2_band_dynamics.gif' | relative_url }}" alt="Animated line plots of mean wPLI in theta, alpha and beta bands across epochs for Case A and Case B" loading="lazy">
  <figcaption><b>Figure 2. Which rhythms carry the difference.</b> Mean wPLI across all 78 electrode pairs, per frequency band (theta 4–8 Hz, alpha 8–13 Hz, beta 13–30 Hz), epoch by epoch. Same axis for both recordings; the vertical line marks the current epoch.</figcaption>
</figure>

<div class="row result-notes">
  <div class="col-md-5"><div class="note-box note-read"><b>How to read it</b>Each line reduces one frequency band to a single number per epoch: the average synchronization across all electrode pairs.</div></div>
  <div class="col-md-7"><div class="note-box note-key"><b>Key observations</b>
    <ul>
      <li>Both cases <b>start at similar levels</b> (theta ≈ 0.42 vs. 0.39; alpha ≈ 0.33 vs. 0.31; beta ≈ 0.25 vs. 0.23).</li>
      <li><b>Case A:</b> all bands <b>decline</b>, ending near theta 0.23, alpha 0.19 and beta 0.15.</li>
      <li><b>Case B:</b> <b>theta and alpha rise</b> (theta ≈ 0.49, alpha ≈ 0.36) while beta stays flat.</li>
      <li>The difference <b>builds up over time</b> and is carried by the <b>slow rhythms</b>, the bands our <a href="{{ '/projects/multimodal-mci-classification/' | relative_url }}">preparatory studies</a> found most affected in Alzheimer's disease.</li>
    </ul>
  </div></div>
</div>

<figure class="project-figure numbered-figure">
  <img src="{{ '/assets/img/projects/connectivity/3_network_topology.gif' | relative_url }}" alt="Animated brain network maps and graph measures (mean strength, weighted clustering, normalized clustering) for Case A and Case B across epochs" loading="lazy">
  <figcaption><b>Figure 3. How the network is organized.</b> Alpha-band network topology. Top: the 12 strongest of the 78 electrode pairs at each epoch, on a template brain (top view), with line width proportional to wPLI. Bottom: mean strength, weighted clustering (Onnela) and normalized clustering γ, which use all pairs.</figcaption>
</figure>

<div class="row result-notes">
  <div class="col-md-5"><div class="note-box note-read"><b>How to read it</b>The brains show <i>where</i> the strongest connections are. The lower panels summarize the <i>whole</i> network. γ = 1 means no more local clustering than a random rearrangement of the same weights.</div></div>
  <div class="col-md-7"><div class="note-box note-key"><b>Key observations</b>
    <ul>
      <li><b>Hubs differ.</b> Case A's strongest links radiate from a <b>left frontal hub (F7)</b> across both hemispheres. Case B's concentrate in the <b>right hemisphere and frontal–occipital pathways</b>, with T7 left out.</li>
      <li><b>Strength and clustering diverge</b> over time. In the last epoch, mean strength is 0.19 (A) vs. 0.35 (B), and weighted clustering is 0.18 vs. 0.34.</li>
      <li><b>γ stays ≈ 1.00–1.01</b> in both cases. The clustering differences mostly reflect <i>how strong</i> the connections are, not a special arrangement of them.</li>
    </ul>
  </div></div>
</div>

<div class="takeaway">
  <b>Takeaway.</b> In this pair, the low-scoring case showed <b>rising slow-wave (theta and alpha) synchronization</b> and a <b>right-lateralized, frontal–occipital network</b>, while the high-scoring case's network loosened. This is consistent with our first exploratory analyses of the Cidade Madura data, in which lower cognitive performance came with a reorganization of connectivity and a marked change in alpha-band synchronization. Whether the pattern holds across the cohort is what the project will test.
</div>

<h4 id="limitations">Limitations</h4>

- **Two individual recordings, not a sample.** The cases illustrate what the method captures (dynamics, bands, topology). They do not support claims about groups or causes.
- **Few epochs per recording.** Six artefact-free epochs give an early, noisy view of the network's dynamics. Group analyses will rely on longer clean segments and statistical null models.
- **Sensor-level, low-density EEG.** Thirteen scalp electrodes cannot localize sources, and single-channel effects such as T7 need signal-quality checks.

<h4 id="outlook">Outlook</h4>

- **Cohort analysis:** extend to all Cidade Madura participants after quality control, comparing groups by cognitive performance.
- **Brain–behavior links:** relate connectivity, temporal stability and network measures to MoCA domains and DASS-21, with correction for multiple comparisons.
- **Directed connectivity:** estimate the direction of information flow between regions.
- **Multimodal model:** feed the most informative connectivity features into the [multimodal MCI classification model]({{ '/projects/multimodal-mci-classification/' | relative_url }}).

#### Team and contact

**Tiago Souto Rocha** (project lead) · [NeuroComp](https://github.com/neurocomp-nutes) research group, Center for Strategic Health Technologies ([NUTES](https://nutes.uepb.edu.br/#)), State University of Paraíba (UEPB), Campina Grande, Brazil. Data collection is carried out within the [Cidade Madura]({{ '/news/cidade-madura-launch/' | relative_url }}) extension project.

Interested in collaborating? Write to [tiago.r@aluno.uepb.edu.br](mailto:tiago.r@aluno.uepb.edu.br).

**Ethics and data.** All participants sign an informed consent form. The cases shown here are anonymized (Case A and Case B), and raw recordings are not publicly shared.

<h4 id="references">References</h4>

<ol class="refs">
  <li>Babiloni, C., Lizio, R., Marzano, N., et al. (2016). Brain neural synchronization and functional coupling in Alzheimer's disease as revealed by resting state EEG rhythms. <i>International Journal of Psychophysiology</i>, 103, 88–102. <a href="https://doi.org/10.1016/j.ijpsycho.2015.02.008">doi:10.1016/j.ijpsycho.2015.02.008</a></li>
  <li>Bassett, D. S., &amp; Sporns, O. (2017). Network neuroscience. <i>Nature Neuroscience</i>, 20(3), 353–364. <a href="https://doi.org/10.1038/nn.4502">doi:10.1038/nn.4502</a></li>
  <li>Fries, P. (2015). Rhythms for cognition: Communication through coherence. <i>Neuron</i>, 88(1), 220–235. <a href="https://doi.org/10.1016/j.neuron.2015.09.034">doi:10.1016/j.neuron.2015.09.034</a></li>
  <li>Hutchison, R. M., Womelsdorf, T., Allen, E. A., et al. (2013). Dynamic functional connectivity: Promise, issues, and interpretations. <i>NeuroImage</i>, 80, 360–378. <a href="https://doi.org/10.1016/j.neuroimage.2013.05.079">doi:10.1016/j.neuroimage.2013.05.079</a></li>
  <li>Onnela, J.-P., Saramäki, J., Kertész, J., &amp; Kaski, K. (2005). Intensity and coherence of motifs in weighted complex networks. <i>Physical Review E</i>, 71, 065103. <a href="https://doi.org/10.1103/PhysRevE.71.065103">doi:10.1103/PhysRevE.71.065103</a></li>
  <li>Prado, P., Birba, A., Cruzat, J., et al. (2022). Dementia ConnEEGtome: Towards multicentric harmonization of EEG connectivity in neurodegeneration. <i>International Journal of Psychophysiology</i>, 172, 24–38. <a href="https://doi.org/10.1016/j.ijpsycho.2021.12.008">doi:10.1016/j.ijpsycho.2021.12.008</a></li>
  <li>Rubinov, M., &amp; Sporns, O. (2010). Complex network measures of brain connectivity: Uses and interpretations. <i>NeuroImage</i>, 52(3), 1059–1069. <a href="https://doi.org/10.1016/j.neuroimage.2009.10.003">doi:10.1016/j.neuroimage.2009.10.003</a></li>
  <li>Stam, C. J. (2014). Modern network science of neurological disorders. <i>Nature Reviews Neuroscience</i>, 15(10), 683–695. <a href="https://doi.org/10.1038/nrn3801">doi:10.1038/nrn3801</a></li>
  <li>Vinck, M., Oostenveld, R., van Wingerden, M., Battaglia, F., &amp; Pennartz, C. M. A. (2011). An improved index of phase-synchronization for electrophysiological data in the presence of volume-conduction, noise and sample-size bias. <i>NeuroImage</i>, 55(4), 1548–1565. <a href="https://doi.org/10.1016/j.neuroimage.2011.01.055">doi:10.1016/j.neuroimage.2011.01.055</a></li>
</ol>
