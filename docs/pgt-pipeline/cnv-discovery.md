---
sidebar_position: 6
sidebar_label: Copy number variations discovery
---

# Copy number variations discovery

This is a key step in discovering how many copies of a DNA region were present in the sequenced genome on average.

## 1. Estimate read counts or depths

Depending on the depth of coverage and the sequencing type (targeted selection or WGS), genome span should be split into regions of appropriate size. Then reads within these regions are quantitated. At this stage, depth analysis is carried out in order to find the optimal genome fragmentation for coverage estimating.

## 2. Calculate coverage in the given regions

At this stage, the counting of reads in each of the regions that were determined in the previous stage is undertaken.

## 3. Compile a copy-number reference

It is necessary to estimate the deviation of the depth from the norm due to intrinsic properties of the region. At this stage, the pipeline takes into account GC content and other characteristics of the regions in order to identify the expected coverage within them.

## 4. CNV discovery

This is a key step in copy number variations detection. For single samples (for example, sequencing of only tumor tissue or prenatal genetic testing), [CNVkit](https://cnvkit.readthedocs.io/en/stable/) is used. In the case of analysis of paired samples (for example, tumor tissue analyzed against matched non-tumor tissue), [GATK](https://gatk.broadinstitute.org/) pipeline is used.

## 5. Annotate CNV VCF

For a complete and effective interpretation of the CNV effect on the phenotype, we annotate each discovered variant. The format and fields of annotation can be found in [the documentation of the AnnotSV tool](https://lbgi.fr/AnnotSV/Documentation/README.AnnotSV_latest.pdf).

## 6. Evaluating and visualizing biological features

Result suitable for interpretation requires data on specific features of the genome instead of chromosome coordinates. At this stage, computed copy number deviations on the genome are used to find CNVs in biological features like chromosome arms or genes, depending on the analysis configuration. Additionally, visualization of the calls is done at this stage.

## 7. Generate CNV report

At this stage, a report on the results of the analysis is generated. The report can be viewed on the **"CNV Report"** tab and constitutes a raw document summarizing variants detected for the processed sample.
