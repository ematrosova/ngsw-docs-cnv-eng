---
sidebar_position: 3
sidebar_label: Example of a sample with medium data quality
---

# Example of a sample with medium data quality

Medium quality data is data with non-critical problems: coverage &lt; 0.01X and/or non-compliance with one of the quality criteria after cleaning. For a sample with medium data quality, all stages of the pipeline will be complete and a “CNV Report” will be generated. One or more of the sequence quality control metrics can be failed (then an orange icon 
![44](/img/eng/44-warning-status.png) ).

<p align="center">
<img src={require('/img/eng/45-main-page-medium-data-quality.png').default} width="800"/>
</p>

You can find information on the quality of the sample data in the column “Special marks” on the “CNV Report” tab on the patient page. In this case, “there are non-critical problems with data quality” of the sample.

<p align="center">
<img src={require('/img/eng/46-cnv-report-medium-quality-data.png').default} width="900"/>
</p>
