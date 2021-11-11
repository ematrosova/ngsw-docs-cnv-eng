---
sidebar_position: 2
sidebar_label: Uploading a sample for one patient. Patient creation
---

# Uploading a sample for one patient. Patient creation

In case you want to upload samples for a patient who is not yet in the system, click on **“Add Patient”**.

<p align="center">
<img src="../img/eng/2-add-patient-button.png" width="700"/>
</p>

Create a patient card. Only the **Patient ID** field is required. You can fill out the details later on this patient's personal page.

<p align="center">
<img src="../img/eng/3-add-patient.png" height="400"/>
</p>

Then you can add a sample set for analysis. First, select the files which you want to perform analysis for. Genomenal supports FASTQ and BAM formats in this pipeline.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::tip The files can be uploaded:

<Tabs
  defaultValue="pc"
  values={[
    {label: 'From computer', value: 'pc'},
    {label: 'From FTP, HTTP or Yandex Disk servers', value: 'url'},
    {label: 'From the NCBI SRA database', value: 'sra'}]}>
  <TabItem value="pc"><p align="center">To upload, drag and drop files or folder containing files into the drop-area or click on it to open the File Browser:<br />
  	<img src='././img/eng/9-drag-drop-box.png' width="300"/></p>
  </TabItem>
  <TabItem value="url"><p align="center">To upload, paste the link to the file on the server into the placeholder:<br />
  	<img src='././img/eng/10-12-url-box.png' width="250"/><br />
  and click on the button:<br />
  	<img src='././img/eng/11-13-url_active.png' width="250"/></p>
  </TabItem>
  <TabItem value="sra"><p align="center">To upload, paste the sample ID (SRRXXXXX) from the database into the placeholder:<br />
  	<img src='././img/eng/10-12-url-box.png' width="250"/><br />
  and click on the button:<br />
  	<img src='././img/eng/11-13-url_active.png' width="250"/></p>
  </TabItem></Tabs>
:::

#### Recognizing paired files

- If your sequencing is paired-end and a pair of FASTQ files of the same sample is named in an [Illumina convention](https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/NamingConvention_FASTQ-files-swBS.htm) (or even by some other common read naming scheme), the files will be automatically recognized as a pair when added:

<p align="center">
<img src="./img/eng/4-14-pair.png" width="300"/>
</p>

- If the pair is not recognized correctly, you can manually unlink files by clicking on the corresponding button highlighted below:

<p align="center">
<img src="img/eng/5-15-unpair.png" width="300"/>
</p>

- If the automatic pair recognition didn’t succeed, you can manually pair the files by clicking and dragging the same element:

<p align="center">
<img src="/img/eng/6-16-force-pair.png" width="300"/>
</p>

After adding samples, you can fill out the patient card. We recommend filling out the card right away and documenting the added samples thoroughly - this will make it easier for you to interpret and navigate later.

<p align="center">
<img src="../img/eng/7-upload-samples.png" width="700"/>
</p>

By default, the sequencing type is set to WGS, which is the basic type most commonly used for CNV analysis. If you are using targeted sequencing (exome or panel), change the type to the appropriate one.

You can now start analyzing the samples (by clicking on **“Submit Samples”**).

:::danger Attention!
If you upload a sample from a computer, and not by a link, then do not close the tab where the sample is being uploaded until it is completed. Otherwise, the uploading will be interrupted. After the uploading stage, you can close the tab, the browser and turn off the computer - further analysis does not depend on your device.
:::
