---
sidebar_position: 4
sidebar_label: Alignment
---

# Alignment

To call variants, reads must be mapped to a reference genome. At Genomenal, we use the most recent version of [GRCh38](https://www.ncbi.nlm.nih.gov/assembly/GCF_000001405.26/) genome.
The process goes through several stages.



## 1. Re-pair

When using paired-end sequencing, each read from one file should contain a pair in the second. When filtering, the pairing can be broken, so we delete the reads that became unpaired in the previous stages.

## 2. Alignment

At this stage, the position of the reads on the reference genome is determined. Genomenal uses [BWA Burrows-Wheeler Aligner](http://bio-bwa.sourceforge.net/) (MEM algorithm), a de facto standard tool for this purpose.

## 3. Calculate coverage

For the quality control of alignment of the regions of interest (genes, transcripts), we calculate the coverage in the genome, as well as the average coverage in the target area (complete genome, exome, panel). The results of this stage can be seen on the **“Coverage Analysis”** tab.
