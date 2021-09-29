---
sidebar_position: 5
sidebar_label: Variant discovery preprocessing
---

# Variant discovery preprocessing

For the most accurate variant discovery, the alignment results are going through several stages of additional processing. These steps are performed using [GATK](https://gatk.broadinstitute.org/hc/en-us) tools.

## 1. Mark duplicates
During sequencing, the amount of the original fragmented DNA sequences increases in the polymerase chain reaction. Since the copy number count is based on the read count, it is very important to determine which of the reads come from the original sequences and which are copies. Further, only original reads are counted.

## 2. Base recalibrate

The sequencer assigns a quality to each nucleotide, which is the logarithm of the probability that the nucleotide was correctly determined during sequencing, but many sequencers tend to underestimate the sequencing quality and other errors. Computational methods make it possible to reduce the error, which further improves the quality of variant discovery.
