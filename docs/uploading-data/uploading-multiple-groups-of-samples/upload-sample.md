---
sidebar_position: 2
sidebar_label: Upload Files
---

# Upload Files

First, select the files which you want to perform analysis for. Genomenal supports FASTQ and BAM formats in this pipeline.

import Tabs from '@theme/Tabs';

import TabItem from '@theme/TabItem';

:::tip The files can be uploaded:

<Tabs
  defaultValue="pc"
  values={[
    {label: 'From computer', value: 'pc'},
    {label: 'From FTP, HTTP or Yandex Disk servers', value: 'url'},
    {label: 'From the NCBI SRA database', value: 'sra'},
  ]}>
  <TabItem value="pc"><p align="center">To upload, drag and drop files or folder containing files into the drop-area or click on it to open the File Browser:<br />
  	<img src={'../../img/eng/9-drag-drop-box.png'}  width="300"/></p>
  </TabItem>
  <TabItem value="url"><p align="center">To upload, paste the link to the file on the server into the placeholder:<br />
  	<img src={'../../img/eng/10-12-url-box.png'} width="250"/><br />
  and click on the button:<br />
  	<img src={'../../img/eng/11-13-url_active.png'} width="250"/></p>
  </TabItem>
  <TabItem value="sra"><p align="center">To upload, paste the sample ID (SRRXXXXX) from the database into the placeholder:<br />
  	<img src={'../../img/eng/10-12-url-box.png'} width="250"/><br />
  and click on the button:<br />
  	<img src={'../../img/eng/11-13-url_active.png'} width="250"/></p>
  </TabItem>
</Tabs>


:::

## Recognizing paired files

- If your sequencing is paired-end and a pair of FASTQ files of the same sample is named in an [Illumina convention](https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/NamingConvention_FASTQ-files-swBS.htm) (or even by some other common read naming scheme), the files will be automatically recognized as a pair when added:

<p align="center">
<img src={'../../img/eng/4-14-pair.png'} width="300"/>
</p>

- If the pair is not recognized correctly, you can manually unlink files by clicking on the corresponding button highlighted below:

<p align="center">
<img src={'../../img/eng/5-15-unpair.png'} width="300"/>
</p>

- If the automatic pair recognition didn’t succeed, you can manually pair the files by clicking and dragging the same element:

<p align="center">
<img src={'../../img/eng/6-16-force-pair.png'} width="300"/>
</p>

:::info
While you fill in the rest of the fields, the files are already being uploaded to the system. Even if the files were not uploaded completely, you can start analyzing the samples.
:::

:::danger Attention!
If you upload a sample from a computer, and not by a link, then do not close the tab where the sample is being uploaded until it is completed. Otherwise, the uploading will be interrupted. After the uploading stage, you can close the tab, the browser and turn off the computer - further analysis does not depend on your device.
:::

Drag the sample card to the adjacent placeholder in the **“Compose Sample Set”** section.
