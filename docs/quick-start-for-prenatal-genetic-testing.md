---
sidebar_position: 2
sidebar_label: Quick start for prenatal genetic testing
---

# Quick start for prenatal genetic testing

## 1. Create Patient

When you first open Genomenal, you will see a login page. Enter your login and password if you already have an account or sign up.

Click on “**Add Patient**” to create a patient card.

<p align="center">
<img src={require('/img/eng/2-add-patient-button.png').default} width="700"/>
</p>

Only the **Patient ID** field is required. You can fill out the details later on this patient's personal page. Click on “**Create**”.

<p align="center">
<img src="img/eng/3-add-patient.png" height="400"/>
</p>

You will see the patient page.

<p align="center">
<img src="img/eng/3a-patient-page.png" width="700"/>
</p>

## 2. Upload Sample

In the simplest case, the sample is a paired-end sequencing in FASTQ format.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip The sample files can be uploaded:

<Tabs
  defaultValue="pc"
  values={[
    {label: 'From computer', value: 'pc'},
    {label: 'From FTP, HTTP or Yandex Disk servers', value: 'url'},
    {label: 'From the NCBI SRA database', value: 'sra'}]}>
  <TabItem value="pc"><p align="center">To upload, drag and drop files or folder containing files into the drop-area or click on it to open the File Browser:<br />
  	<img src='img/eng/9-drag-drop-box.png' width="300"/></p>
  </TabItem>
  <TabItem value="url"><p align="center">To upload, paste the link to the file on the server into the placeholder:<br />
  	<img src='img/eng/10-12-url-box.png' width="250"/><br />
  and click on the button:<br />
  	<img src='img/eng/11-13-url_active.png' width="250"/></p>
  </TabItem>
  <TabItem value="sra"><p align="center">To upload, paste the sample ID (SRRXXXXX) from the database into the placeholder:<br />
  	<img src='img/eng/10-12-url-box.png' width="250"/><br />
  and click on the button:<br />
  	<img src='img/eng/11-13-url_active.png' width="250"/></p>
  </TabItem></Tabs>
:::

After uploading a sample, you can fill out the patient card. We recommend filling out the card right away and documenting the added samples thoroughly - this will make it easier for you to interpret and navigate later.

<p align="center">
<img src="img/eng/7-upload-samples.png" width="700"/>
</p>

## 3. Start Analysis

Click on “**Submit Samples**” to start the sample analysis.

:::danger Attention!
If you upload a sample from a computer, and not by a link, then do not close the tab where the sample is being uploaded until it is completed. Otherwise, the uploading will be interrupted. After the uploading stage, you can close the tab, the browser and turn off the computer - further analysis does not depend on your device.
:::

You can see that the analysis is complete when all stage statuses are green or orange:
<p align="center">
<img src="img/eng/7a-stage-statuses.png" width="150"/>
</p>

## 4. Analysis Results

When the analysis is complete, you can examine the results. Open the sample page by clicking on sample row:

<p align="center">
<img src="img/eng/7b-sample-row.png" width="700"/>
</p>

Then click on the **CNV Report** tab and explore the report.

<p align="center">
<img src="img/eng/33-cnv-report-chr21.png" width="700"/>
</p>

The “**Result**” section includes a report about the presence or absence of a deviation from the normal copy number in any chromosome in the sample.

The “**Interpretation of results and conclusions**” section includes:

1. a table with chromosomes in which structural variation (reduced or increased number of copies) was found;
2. karyogram-like graph with denoted chromosome-level CNVs;
3. information on estimated sequencing depth.

Report can be exported to PDF.

In addition, you can view the analysis results of all patient samples. You can find information on how to do this [here](/results/cnv-report/patient-cnv-report).

Further, [here](/sample-examples/normal-no-cnvs) you can find examples of prenatal genetic testing results for samples of different quality.
