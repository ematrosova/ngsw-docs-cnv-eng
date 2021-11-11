---
sidebar_position: 2
sidebar_label: Quick start for prenatal genetic testing
---

# Quick start for prenatal genetic testing

When you first open Genomenal, you will see a login page. Enter your login and password if you already have an account or sign up.

Click on “**Add Patient**” to create a patient card.

![Add patient button](/img/eng/2-add-patient-button.png)

Only the **Patient ID** field is required. You can fill out the details later on this patient's personal page. Click on “**Create**”.

![Add patient](/img/eng/3-add-patient.png)

You will see the patient page.

![Patient page](/img/eng/3a-patient-page.png)

Drag and drop sample into the drop-area or click on it to open the File Browser. In the simplest case, the sample is paired-end sequencing in FASTQ format.

![Upload files](/img/eng/9-drag-drop-box.png)

After adding samples, you can fill out the patient card. We recommend filling out the card right away and documenting the added samples thoroughly - this will make it easier for you to interpret and navigate later.

![Patient info](/img/eng/7-upload-samples.png)

Start analyzing the samples (by clicking on “**Submit Samples**”).

:::danger Attention!
If you upload a sample from a computer, and not by a link, then do not close the tab where the sample is being uploaded until it is completed. Otherwise, the uploading will be interrupted. After the uploading stage, you can close the tab, the browser and turn off the computer - further analysis does not depend on your device.
:::

You can see that the analysis is complete when all stage statuses are green or orange:

![Stage statuses](/img/eng/7a-stage-statuses.png)

When the analysis is complete, you can examine the results. Open the sample page by clicking on sample row:

![Sample row](/img/eng/7b-sample-row.png)

Next click on the **CNV Report** tab and explore the report.

![CNV report for sample](/img/eng/33-cnv-report-chr21.png)

The “**Result**” section includes a report about the presence or absence of a deviation from the normal copy number in any chromosome in the sample.

The “**Interpretation of results and conclusions**” section includes:

1. a table with chromosomes in which structural variation (reduced or increased number of copies) was found;
2. karyogram-like graph with denoted chromosome-level CNVs;
3. information on estimated sequencing depth.

Report can be exported to PDF.

In addition, you can view the analysis results of all patient samples. You can find information on how to do this [here](/results/cnv-report/patient-cnv-report).
