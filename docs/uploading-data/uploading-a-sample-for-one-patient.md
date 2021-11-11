---
sidebar_position: 2
sidebar_label: Uploading a sample for one patient. Patient creation
---

# Uploading a sample for one patient. Patient creation

In case you want to upload samples for a patient who is not yet in the system, click on **“Add Patient”**.

![Add patient button](/img/eng/2-add-patient-button.png)

Create a patient card. Only the **Patient ID** field is required. You can fill out the details later on this patient's personal page.

![Add patient](/img/eng/3-add-patient.png)

Then you can add a sample set for analysis. If your sequencing is paired-end and a pair of FASTQ files of the same sample is named in an [Illumina convention](https://support.illumina.com/help/BaseSpace_OLH_009008/Content/Source/Informatics/BS/NamingConvention_FASTQ-files-swBS.htm) (or even by some other common read naming scheme), the files will be automatically recognized as a pair when added:

![Pair](/img/eng/4-14-pair.png)

If the pair is not recognized correctly, you can manually unlink files by clicking on the corresponding button highlighted below:

![Unpair](/img/eng/5-15-unpair.png)

If the automatic pair recognition didn’t succeed, you can manually pair the files by clicking and dragging the same element:

![Force pair](/img/eng/6-16-force-pair.png)

After adding samples, you can fill out the patient card. We recommend filling out the card right away and documenting the added samples thoroughly - this will make it easier for you to interpret and navigate later.

![Patient info](/img/eng/7-upload-samples.png)

By default, the sequencing type is set to WGS, which is the basic type most commonly used for CNV analysis. If you are using targeted sequencing (exome or panel), change the type to the appropriate one.

You can now start analyzing the samples (by clicking on **“Submit Samples”**).

:::danger Attention!
If you upload a sample from a computer, and not by a link, then do not close the tab where the sample is being uploaded until it is completed. Otherwise, the uploading will be interrupted. After the uploading stage, you can close the tab, the browser and turn off the computer - further analysis does not depend on your device.
:::
