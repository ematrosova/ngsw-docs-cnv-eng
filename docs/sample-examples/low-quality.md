---
sidebar_position: 4
sidebar_label: Example of a sample with low data quality
---

# Example of a sample with low data quality

If the sample data is of low quality, then one of the pipeline stages will fail (there is a red icon ![47](/img/eng/47-failed-status.png) ). 
For example, for this sample, the “Estimate read counts or depths” stage failed because the sample has very low coverage. If the data is of low quality, the CNV analysis will not be performed, and the CNV report will not be generated.

<p align="center">
<img src={'../img/eng/48-main-page-low-data-quality.png'} width="800"/>
</p>

You can find information on the quality of the sample data in the column “Special marks” on the “CNV Report” tab on the patient page. In this case, “analysis not performed, software error”.

<p align="center">
<img src={'../img/eng/49-cnv-report-low-data-quality.png'} width="900"/>
</p>
