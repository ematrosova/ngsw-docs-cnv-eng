---
sidebar_position: 1
sidebar_label: Germline Copy Number Variations
---

# Germline Copy Number Variations

Discovered and annotated variants can be downloaded in AnnotSV CSV format ![Table file](/img/eng/22-table-file.png) , 
as the CNV coverage file in TSV format ![CNV coverage file](/img/eng/23-cnv-coverage-file.png) , 
opened in Google Cloud as a table ![Google Cloud file](/img/eng/24-google-cloud-icon.png) .
Genome-wide CNV segments plot can be opened and downloaded in PNG format ![Plot file](/img/eng/25-plot_file.png) .
Karyogram-like graph with denoted chromosome-level CNVs can be opened and downloaded in PNG format ![Karyotype file](/img/eng/26_karyotype_file.png) .
You can also open the module for visualization of variations on the genome in the embedded IGV ![IGV](/img/eng/27_igv.png) .

**The AnnotSV CSV **is a table of annotated CNVs. They are presented both in the form of a full deletion or insertion, and in the form of genes overlapped by a deletion/insertion.

**Main fields with annotated CNVs (AnnotSV CSV)**

<table>
  <tr>
   <td>Field
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>AnnotSV ID
   </td>
   <td>Variant ID assigned by the annotator
   </td>
  </tr>
  <tr>
   <td>SV chrom
   </td>
   <td>Name of the chromosome
   </td>
  </tr>
  <tr>
   <td>SV start
   </td>
   <td>Starting position of the variant in the chromosome
   </td>
  </tr>
  <tr>
   <td>SV end
   </td>
   <td>Ending position of the variant in the chromosome
   </td>
  </tr>
  <tr>
   <td>SV length
   </td>
   <td>Length of the variant
   </td>
  </tr>
  <tr>
   <td>SV type
   </td>
   <td>Type of the variant (DEL, DUP)
   </td>
  </tr>
  <tr>
   <td>AnnotSV type
   </td>
   <td>The type of annotation lines (“full” - annotation on the variant full length, “split” - annotation on each gene overlapped by the variant). Each full section can correspond to several split sections.
   </td>
  </tr>
</table>

A description of the remaining 54 annotation fields can be found here: [AnnotSV Manual](https://lbgi.fr/AnnotSV/Documentation/README.AnnotSV_latest.pdf).


**The CNV coverage file **is an unannotated file in a format convenient for considering CNVs in large regions (chromosome arms, chromosomes).

**Main fields of variation description (CNV coverage file)**

<table>
  <tr>
   <td>Field
   </td>
   <td>Description
   </td>
  </tr>
  <tr>
   <td>ID
   </td>
   <td>Region name (chromosome arm, chromosome)
   </td>
  </tr>
  <tr>
   <td>Call
   </td>
   <td>CNV discovery result. Takes values + (increasing the number of copies compared to normal), - (reducing the number of copies compared to normal), . (no deviations from the normal chromosome copy number were found) and Not considered (the locus was not considered at all in the analysis).
   </td>
  </tr>
  <tr>
   <td>Ampl_cov
   </td>
   <td>Coverage (in nucleotides) of the effective locus length with segments with a copy number above the amplification threshold
   </td>
  </tr>
  <tr>
   <td>Ampl_cov_frac
   </td>
   <td>Fraction (in %) of the effective locus length covered by segments with a copy number above the amplification threshold
   </td>
  </tr>
  <tr>
   <td>Chrom
   </td>
   <td>Chromosome
   </td>
  </tr>
  <tr>
   <td>Depl_cov
   </td>
   <td>Coverage (in nucleotides) of the effective locus length with segments with a copy number below the depletion threshold
   </td>
  </tr>
  <tr>
   <td>Depl_cov_frac
   </td>
   <td>Fraction (in %) of the effective locus length covered by segments with a copy number below the depletion threshold
   </td>
  </tr>
  <tr>
   <td>Effective_end
   </td>
   <td>Maximum coordinate value of effective length
   </td>
  </tr>
  <tr>
   <td>Effective_length
   </td>
   <td>Total effective length
   </td>
  </tr>
  <tr>
   <td>Effective_start
   </td>
   <td>Minimum coordinate value of effective length
   </td>
  </tr>
  <tr>
   <td>End
   </td>
   <td>End coordinate of the variation
   </td>
  </tr>
  <tr>
   <td>Length
   </td>
   <td>Variation length
   </td>
  </tr>
  <tr>
   <td>Start
   </td>
   <td>Start coordinate of the variation
   </td>
  </tr>
</table>


**Genome-wide CNV segments plot (example)**

![Genome-wide plot](/img/eng/28-genome-wide-plot.png)

We can see the chromosomes on a horizontal scale and the copy number in chromosomes on a vertical scale. In this particular sample, the copy number of chromosome 21 is increased compared to normal diploid number of copies. Also notably, chromosome X has log2 copy ratio value of 1 meaning that it is twice the number of chromosome X in male genome, i.e. the sample has XX genotype.

**Karyogram-like graph with denoted chromosome-level CNVs (example)**

![Karyotype plot](/img/eng/29-karyotype-plot-example.png)

The karyogram indicates an increased number of copies of chromosome 21 in the sample.
