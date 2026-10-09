---
layout: page
title: EEG Brain Connectivity
description: My research line on how brain regions communicate, measured with EEG, from connectivity methods to cognition, aging and disease.
img: assets/img/project_connectivity.jpg
importance: 3
category: research
permalink: /projects/eeg-brain-connectivity/
---

<div class="project-meta">
  <span><i class="fa-solid fa-calendar"></i> 2026 – Present</span>
  <span><i class="fa-solid fa-spinner"></i> Ongoing research line</span>
  <span><i class="fa-solid fa-location-dot"></i> NeuroComp · NUTES / UEPB, Brazil</span>
</div>

<nav class="project-toc" aria-label="On this page">
  <a href="#overview">Overview</a>
  <a href="#themes">Research themes</a>
  <a href="#key-questions">Key questions</a>
  <a href="#methods">Methods</a>
  <a href="#case-study">Case study</a>
  <a href="#outlook">Outlook</a>
  <a href="#references">References</a>
</nav>

<div class="glance">
  <div class="glance-item"><span class="glance-value">Functional</span><span class="glance-label">phase, amplitude and<br>cross-frequency coupling</span></div>
  <div class="glance-item"><span class="glance-value">Directed</span><span class="glance-label">information flow<br>between regions</span></div>
  <div class="glance-item"><span class="glance-value">Dynamic</span><span class="glance-label">time-resolved<br>networks</span></div>
  <div class="glance-item"><span class="glance-value">Network</span><span class="glance-label">graph-theory<br>topology</span></div>
  <div class="glance-item"><span class="glance-value">Rest + task</span><span class="glance-label">lab and wearable<br>EEG</span></div>
</div>

<h4 id="overview">Overview</h4>

Cognition depends on how brain regions **coordinate their activity over time**, not only on what each region does on its own ([Fries, 2015](https://doi.org/10.1016/j.neuron.2015.09.034); [Bassett & Sporns, 2017](https://doi.org/10.1038/nn.4502)). EEG measures this coordination with millisecond resolution, at low cost and with portable equipment, so these interactions can be studied as they unfold, both in the laboratory and outside it.

This is my research line on **brain connectivity with EEG**. It is not tied to a single dataset or population. It covers **how to measure connectivity reliably** and **what connectivity reveals** about cognition, aging and disease, across resting-state and task recordings, laboratory and wearable systems, and public and in-house datasets.

<h4 id="themes">Research themes</h4>

<div class="theme-grid">
  <div class="theme-card">
    <div class="theme-icon"><i class="fa-solid fa-wave-square"></i></div>
    <b>Methods: measuring connectivity well</b>
    <p>Phase synchronization, cross-frequency coupling and directed, information-theoretic measures, plus dynamic connectivity. I focus on the classic pitfalls of scalp EEG: volume conduction, common reference, sample-size bias and statistical testing.</p>
  </div>
  <div class="theme-card">
    <div class="theme-icon"><i class="fa-solid fa-brain"></i></div>
    <b>Cognition: networks for memory and attention</b>
    <p>How network interactions support memory and attention, how they change over time on a task, and whether connectivity patterns can be used to decode cognitive content.</p>
  </div>
  <div class="theme-card">
    <div class="theme-icon"><i class="fa-solid fa-user-clock"></i></div>
    <b>Aging and disease: network signatures of decline</b>
    <p>Resting-state EEG shows altered long-range coupling in MCI and Alzheimer's disease (<a href="https://doi.org/10.1016/j.ijpsycho.2015.02.008">Babiloni et al., 2016</a>), and network hubs may be especially vulnerable (<a href="https://doi.org/10.1038/nrn3801">Stam, 2014</a>). I study connectivity markers of decline and how well they generalize across sites (<a href="https://doi.org/10.1016/j.ijpsycho.2021.12.008">Prado et al., 2022</a>), in public datasets and community cohorts such as <a href="{{ '/news/cidade-madura-launch/' | relative_url }}">Cidade Madura</a>. In a <a href="{{ '/projects/multimodal-mci-classification/' | relative_url }}">CCNEC 2026 study</a> I co-authored, phase-amplitude coupling was among the best single markers of Alzheimer's disease.</p>
  </div>
  <div class="theme-card">
    <div class="theme-icon"><i class="fa-solid fa-heart-pulse"></i></div>
    <b>Brain–body: beyond the brain</b>
    <p>How brain rhythms couple with cardiac autonomic activity, measured by heart rate variability (HRV), along the brain–heart axis.</p>
  </div>
</div>

<h4 id="key-questions">Key questions</h4>

1. How can connectivity be **estimated reliably** from scalp EEG, including **low-density, wearable** recordings?
2. Which connectivity patterns (static or dynamic, functional or directed) **carry information about cognition**?
3. Do connectivity **signatures of cognitive decline generalize** across datasets, devices and populations?
4. How do brain networks **interact with bodily signals** such as heart rate variability?

<h4 id="methods">Methods</h4>

<div class="pipeline" role="list">
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">1</span><b>Acquire</b><span>Resting-state or task EEG, lab or wearable</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">2</span><b>Preprocess</b><span>Filtering, artefact handling and epoching</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">3</span><b>Estimate</b><span>Functional or directed coupling, static or time-resolved, per band</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">4</span><b>Network</b><span>Graph measures of integration, segregation and hubs</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">5</span><b>Test</b><span>Surrogates, null models, FDR, bootstrap CIs</span></div>
  <div class="pipeline-step" role="listitem"><span class="pipeline-num">6</span><b>Interpret</b><span>Relate to behavior, clinical scores and machine learning</span></div>
</div>

My toolbox, with the reason for each method and its main limitation:

<div class="table-responsive">
<table class="table table-sm method-table">
  <thead>
    <tr><th>Method family</th><th>Why I use it</th><th>Main limitation</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><b>Phase synchronization</b><br><small>PLI, wPLI</small></td>
      <td>Captures consistent phase relationships between regions. The wPLI is robust to volume conduction and noise (<a href="https://doi.org/10.1016/j.neuroimage.2011.01.055">Vinck et al., 2011</a>).</td>
      <td>It discards genuine zero-lag coupling, and at sensor level it does not localize sources.</td>
    </tr>
    <tr>
      <td><b>Cross-frequency coupling</b><br><small>phase-amplitude coupling</small></td>
      <td>Captures how the phase of slow rhythms modulates the amplitude of faster ones (<a href="https://doi.org/10.1152/jn.00106.2010">Tort et al., 2010</a>).</td>
      <td>Needs enough data per estimate and surrogate controls to be interpreted.</td>
    </tr>
    <tr>
      <td><b>Directed connectivity</b><br><small>Granger causality, transfer entropy</small></td>
      <td>Estimates the direction of information flow. Transfer entropy is model-free and captures nonlinear interactions (<a href="https://doi.org/10.1007/s10827-010-0262-3">Vicente et al., 2011</a>).</td>
      <td>Needs a lot of data and is sensitive to estimator bias and common inputs.</td>
    </tr>
    <tr>
      <td><b>Time-resolved connectivity</b></td>
      <td>Shows fluctuations that averaging hides, which may relate to cognition (<a href="https://doi.org/10.1016/j.neuroimage.2013.05.079">Hutchison et al., 2013</a>).</td>
      <td>Short windows give noisier estimates, so fluctuations need to be tested against null models.</td>
    </tr>
    <tr>
      <td><b>Graph theory</b><br><small>strength, clustering, hubs</small></td>
      <td>Summarizes network organization with standard, interpretable measures (<a href="https://doi.org/10.1016/j.neuroimage.2009.10.003">Rubinov &amp; Sporns, 2010</a>; <a href="https://doi.org/10.1103/PhysRevE.71.065103">Onnela et al., 2005</a>).</td>
      <td>Measures depend on overall connection strength, so they need normalization against null networks.</td>
    </tr>
  </tbody>
</table>
</div>

I follow published guidance on the main pitfalls of connectivity analysis (common reference, signal-to-noise ratio, volume conduction, common input and sample-size bias; [Bastos & Schoffelen, 2016](https://doi.org/10.3389/fnsys.2015.00175)), and I build my pipelines in Python with the open-source **MNE-Python** ecosystem ([Gramfort et al., 2013](https://doi.org/10.3389/fnins.2013.00267)).

<h4 id="case-study">Case study: dynamic connectivity in aging</h4>

To show what this approach reveals, here is one application of the research line: resting-state EEG from older adults in the **[Cidade Madura]({{ '/news/cidade-madura-launch/' | relative_url }})** community cohort, recorded with a **wearable 13-electrode headset** (AF3, F7, F3, FC5, T7, O1, O2, P8, T8, FC6, F4, F8, AF4; 78 electrode pairs). Connectivity was estimated with the **wPLI** in **artefact-free 4-second epochs**.

I compared two individual recordings: **Case A**, the participant with the **highest MoCA score so far (24)**, and **Case B**, the participant with the **lowest (6)**. Both are shown on the **same color scale and axes**. Each animation steps through the **six artefact-free epochs** of a roughly 3-minute recording, from 9–13 s to 165–169 s.

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
      <li>The difference <b>builds up over time</b> and is carried by the <b>slow rhythms</b>, the bands the <a href="{{ '/projects/multimodal-mci-classification/' | relative_url }}">preparatory studies</a> found most affected in Alzheimer's disease.</li>
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
  <b>Takeaway.</b> In this pair, the low-scoring case showed <b>rising slow-wave (theta and alpha) synchronization</b> and a <b>right-lateralized, frontal–occipital network</b>, while the high-scoring case's network loosened. This is consistent with my first exploratory analyses of the Cidade Madura data, in which lower cognitive performance came with a reorganization of connectivity and a marked change in alpha-band synchronization. Whether the pattern holds across the cohort is what this application will test.
</div>

<h4 id="limitations">Case-study limitations</h4>

- **Two individual recordings, not a sample.** The cases illustrate what the method captures (dynamics, bands, topology). They do not support claims about groups or causes.
- **Few epochs per recording.** Six artefact-free epochs give an early, noisy view of the network's dynamics. Group analyses will rely on longer clean segments and statistical null models.
- **Sensor-level, low-density EEG.** Thirteen scalp electrodes cannot localize sources, and single-channel effects such as T7 need signal-quality checks.

<h4 id="outlook">Outlook</h4>

- **Methods:** compare and validate connectivity estimators, including directed and information-theoretic ones, on simulated and real EEG, with attention to low-density wearable data.
- **Cognition:** task-based connectivity, changes over time on a task, and decoding of memory content from connectivity patterns.
- **Aging and disease:** analyze the full Cidade Madura cohort, test whether markers generalize across datasets, and feed the most informative features into the [multimodal MCI classification model]({{ '/projects/multimodal-mci-classification/' | relative_url }}).
- **Brain–body:** EEG–HRV coupling from simultaneous recordings.
- **Open science:** reproducible MNE-Python pipelines and tutorials.

#### Affiliation and contact

I develop this research line as part of my work in the [NeuroComp](https://github.com/neurocomp-nutes) research group at the Center for Strategic Health Technologies ([NUTES](https://nutes.uepb.edu.br/#)), State University of Paraíba (UEPB), Campina Grande, Brazil, together with the colleagues who co-author each study.

Interested in collaborating, or in applying these methods to your data? Write to me at [tiago.r@aluno.uepb.edu.br](mailto:tiago.r@aluno.uepb.edu.br).

**Ethics and data.** Human data are collected with informed consent, and public datasets are used under their original terms. Case-study participants are anonymized (Case A and Case B), and raw recordings are not publicly shared.

<h4 id="references">References</h4>

<ol class="refs">
  <li>Babiloni, C., Lizio, R., Marzano, N., et al. (2016). Brain neural synchronization and functional coupling in Alzheimer's disease as revealed by resting state EEG rhythms. <i>International Journal of Psychophysiology</i>, 103, 88–102. <a href="https://doi.org/10.1016/j.ijpsycho.2015.02.008">doi:10.1016/j.ijpsycho.2015.02.008</a></li>
  <li>Bassett, D. S., &amp; Sporns, O. (2017). Network neuroscience. <i>Nature Neuroscience</i>, 20(3), 353–364. <a href="https://doi.org/10.1038/nn.4502">doi:10.1038/nn.4502</a></li>
  <li>Bastos, A. M., &amp; Schoffelen, J.-M. (2016). A tutorial review of functional connectivity analysis methods and their interpretational pitfalls. <i>Frontiers in Systems Neuroscience</i>, 9, 175. <a href="https://doi.org/10.3389/fnsys.2015.00175">doi:10.3389/fnsys.2015.00175</a></li>
  <li>Fries, P. (2015). Rhythms for cognition: Communication through coherence. <i>Neuron</i>, 88(1), 220–235. <a href="https://doi.org/10.1016/j.neuron.2015.09.034">doi:10.1016/j.neuron.2015.09.034</a></li>
  <li>Gramfort, A., Luessi, M., Larson, E., et al. (2013). MEG and EEG data analysis with MNE-Python. <i>Frontiers in Neuroscience</i>, 7, 267. <a href="https://doi.org/10.3389/fnins.2013.00267">doi:10.3389/fnins.2013.00267</a></li>
  <li>Hutchison, R. M., Womelsdorf, T., Allen, E. A., et al. (2013). Dynamic functional connectivity: Promise, issues, and interpretations. <i>NeuroImage</i>, 80, 360–378. <a href="https://doi.org/10.1016/j.neuroimage.2013.05.079">doi:10.1016/j.neuroimage.2013.05.079</a></li>
  <li>Onnela, J.-P., Saramäki, J., Kertész, J., &amp; Kaski, K. (2005). Intensity and coherence of motifs in weighted complex networks. <i>Physical Review E</i>, 71, 065103. <a href="https://doi.org/10.1103/PhysRevE.71.065103">doi:10.1103/PhysRevE.71.065103</a></li>
  <li>Prado, P., Birba, A., Cruzat, J., et al. (2022). Dementia ConnEEGtome: Towards multicentric harmonization of EEG connectivity in neurodegeneration. <i>International Journal of Psychophysiology</i>, 172, 24–38. <a href="https://doi.org/10.1016/j.ijpsycho.2021.12.008">doi:10.1016/j.ijpsycho.2021.12.008</a></li>
  <li>Rubinov, M., &amp; Sporns, O. (2010). Complex network measures of brain connectivity: Uses and interpretations. <i>NeuroImage</i>, 52(3), 1059–1069. <a href="https://doi.org/10.1016/j.neuroimage.2009.10.003">doi:10.1016/j.neuroimage.2009.10.003</a></li>
  <li>Stam, C. J. (2014). Modern network science of neurological disorders. <i>Nature Reviews Neuroscience</i>, 15(10), 683–695. <a href="https://doi.org/10.1038/nrn3801">doi:10.1038/nrn3801</a></li>
  <li>Tort, A. B. L., Komorowski, R., Eichenbaum, H., &amp; Kopell, N. (2010). Measuring phase-amplitude coupling between neuronal oscillations of different frequencies. <i>Journal of Neurophysiology</i>, 104(2), 1195–1210. <a href="https://doi.org/10.1152/jn.00106.2010">doi:10.1152/jn.00106.2010</a></li>
  <li>Vicente, R., Wibral, M., Lindner, M., &amp; Pipa, G. (2011). Transfer entropy: A model-free measure of effective connectivity for the neurosciences. <i>Journal of Computational Neuroscience</i>, 30(1), 45–67. <a href="https://doi.org/10.1007/s10827-010-0262-3">doi:10.1007/s10827-010-0262-3</a></li>
  <li>Vinck, M., Oostenveld, R., van Wingerden, M., Battaglia, F., &amp; Pennartz, C. M. A. (2011). An improved index of phase-synchronization for electrophysiological data in the presence of volume-conduction, noise and sample-size bias. <i>NeuroImage</i>, 55(4), 1548–1565. <a href="https://doi.org/10.1016/j.neuroimage.2011.01.055">doi:10.1016/j.neuroimage.2011.01.055</a></li>
</ol>
