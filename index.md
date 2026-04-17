# Edson Araujo

I'm a PhD Student at [University of Tubingen](https://uni-tuebingen.de/), working with [Prof. Hilde Kuehne](https://hildekuehne.github.io/). Our work is part of the [MIT-IBM Watson AI Sight and Sound Project](https://sightandsound.csail.mit.edu/), where I focus on audio-visual reasoning, multimodal large language models, and test-time adaptation.

I did my Master's in Computer Science at [UFMG](https://ufmg.br/) under the supervision of [Prof. Erickson Nascimento](https://homepages.dcc.ufmg.br/~erickson/), period in which I was able to collaborate in different research topics such as video summarization and image descriptors.

[CV](https://edsonroteia.github.io/data/Edson_CV.pdf) | [Scholar](https://scholar.google.com/citations?hl=en&user=tHOHQ7IAAAAJ) | [Twitter](https://twitter.com/edsonroteia) | [Bluesky](https://bsky.app/profile/edsonroteia.bsky.social) | [GitHub](https://github.com/edsonroteia/)

## News

- **12.2025** We are organizing the fifth edition of the ["What is Next in Multimodal Foundation Models?"](https://mmfm-workshop.github.io/) Workshop (CVPR 2026)
- **08.2025** Omni-R1 was accepted to [ASRU 2025](https://2025.ieeeasru.org/)! *(shortlisted for Best Student Paper!)*
- **05.2025** Omni-R1, our latest work from the MIT-IBM Watson AI Sight and Sound Project, is out [on ArXiv](https://arxiv.org/abs/2505.09439v1)!
- **05.2025** CAV-MAE Sync is also going to be presented at the [LatinX](https://www.latinxinai.org/cvpr-2025), [MMFM](https://sites.google.com/view/mmfm3rdworkshop/organizers?authuser=0) and [Sight and Sound](https://sightsound.org/) Workshops at CVPR 2025!
- **02.2025** CAV-MAE Sync was accepted to CVPR 2025 as a poster presentation. Paper is [on ArXiv](https://arxiv.org/abs/2505.01237).
- **10.2023** I joined my PhD Program under the supervision of [Prof. Hilde Kuehne](https://hildekuehne.github.io/) to work on multimodal learning.
- **05.2023** I defended my Master Thesis on "An Audiovisual Approach for Video Summarization Using Psychoacoustic Features"

## Research

I'm interested in audio-visual reasoning, multimodal large language models, self-supervised learning, and test-time adaptation.

## Selected Publications

### AVRT: Audio-Visual Reasoning Transfer through Single-Modality Teachers
**Edson Araujo**, Saurabhchand Bhati, M. Jehanzeb Mirza, Brian Kingsbury, Samuel Thomas, Rogerio Feris, James R. Glass, Hilde Kuehne
[Project](https://edsonroteia.github.io/AVRT/) | [pre-print](https://edsonroteia.github.io/data/avrt.pdf)
Composes multimodal reasoning traces from single-modality teachers via LLM merging. Achieves +7.8 avg. improvement on audio-visual benchmarks and +6.3 on audio benchmarks.

### TTA-Vid: Generalized Test-Time Adaptation for Video Reasoning
Soumya Shamarao Jahagirdar\*, **Edson Araujo**\*, Anna Kukleva, M. Jehanzeb Mirza, Saurabhchand Bhati, Samuel Thomas, Brian Kingsbury, Rogerio Feris, James R. Glass, Hilde Kuehne
[Project](https://edsonroteia.github.io/tta-vid/) | [arXiv](https://arxiv.org/abs/2604.00696)
Adapts video-language models at test time using step-by-step frame reasoning and multi-armed bandit frame selection. No labels required.

### Omni-R1: Do You Really Need Audio to Fine-Tune Your Audio LLM?
Andrew Rouditchenko, Saurabhchand Bhati, **Edson Araujo**, Samuel Thomas, Hilde Kuehne, Rogerio Feris, James Glass
*ASRU 2025*
[arXiv](https://arxiv.org/abs/2505.09439v1)
Fine-tunes Qwen2.5-Omni using GRPO, achieving SOTA on MMAU. Surprisingly, text-only fine-tuning also improves audio performance.

### CAV-MAE Sync: Improving Contrastive Audio-Visual Mask Autoencoders via Fine-Grained Alignment
**Edson Araujo**, Andrew Rouditchenko, Yuan Gong, Saurabhchand Bhati, Samuel Thomas, Brian Kingsbury, Leonid Karlinsky, Rogerio Feris, James R. Glass, Hilde Kuehne
*CVPR 2025*
[Project](https://edsonroteia.github.io/cav-mae-sync/) | [Code](https://github.com/edsonroteia/cav-mae-sync) | [arXiv](https://arxiv.org/abs/2505.01237)
Fine-grained audio-visual alignment using temporal sequences instead of global representations. Outperforms complex architectures on retrieval, classification, and localization.

### Text-Driven Video Acceleration: A Weakly-Supervised Reinforcement Learning Method
Washington Ramos, Michel Silva, **Edson Araujo**, Victor Moura, Keller Oliveira, Leandro Soriano Marcolino
*TPAMI 2023*
[Project](https://www.verlab.dcc.ufmg.br/semantic-hyperlapse/tpami2023) | [Code](https://github.com/verlab/TextDrivenVideoAcceleration_TPAMI_2022) | [arXiv](https://arxiv.org/abs/2203.15778)
Weakly-supervised RL method for text-driven video acceleration using VDAN+ architecture.

### Straight to the Point: Fast-Forwarding Videos via Reinforcement Learning Using Textual Data
Washington Ramos, Michel Silva, **Edson Araujo**, Leandro Soriano Marcolino, Erickson Nascimento
*CVPR 2020*
[Project](https://www.verlab.dcc.ufmg.br/semantic-hyperlapse/cvpr2020) | [Code](https://github.com/verlab/StraightToThePoint_CVPR_2020) | [arXiv](http://arxiv.org/abs/2003.14229)
RL-based video acceleration using textual guidance and the VDAN architecture. SOTA on F1 and segment coverage.

### Personalizing Fast-Forward Videos Based on Visual and Textual Features from Social Network
Washington Ramos, Michel Silva, **Edson Araujo**, Alan Neves, Erickson Nascimento
*WACV 2020*
[Project](https://www.verlab.dcc.ufmg.br/semantic-hyperlapse/) | [arXiv](https://arxiv.org/abs/1912.12655)
Personalized FPV fast-forwarding using social network data to infer user interests.

### On Modeling the Effects of Auditory Annoyance on Driving Style and Passenger Comfort
**Edson Araujo**, Michal Gregor, Isabella Huang, Erickson R. Nascimento, Ruzena Bajcsy
*IROS 2019*
[Paper](https://ieeexplore.ieee.org/document/8967520)
Detects driver annoyance from inertial measurements with 77% accuracy. Studies acoustic impact on driving style.
