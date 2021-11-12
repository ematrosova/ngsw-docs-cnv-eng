---
sidebar_position: 2
sidebar_label: Example of a sample with normal data quality and aneuploidy
---

# Example of a sample with normal data quality and aneuploidy

Normal quality data is data with a coverage ≥ 0.01X that meets all the quality control metrics after cleaning. For a sample with normal data quality, all stages of the pipeline will be complete and a “CNV Report” will be generated.

<p align="center">
<img src={require('/img/eng/41-main-page-normal-data-quality.png').default} width="800"/>
</p>

Information on the presence or absence of aneuploidy can be found on the "CNV Report" tab on the sample page. Thus, this sample shows deviations from the normal copy number of chromosome 21.

<p align="center">
<img src={require('/img/eng/42-cnv-report-normal-data-quality-chr21.png').default} width="800"/>
</p>

The same information can be obtained from the “CNV Report” tab on the patient page. Here you can also see the information on the quality of the sample data in the column “Special marks”. In this case, the column is empty, which indicates normal data quality.

<p align="center">
<img src={require('/img/eng/43-patient-cnv-report-normal-data-quality-chr21.png').default} width="900"/>
</p>
