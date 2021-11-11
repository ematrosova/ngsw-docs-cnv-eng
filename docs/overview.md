---
sidebar_position: 3
sidebar_label: Getting to know the service
---

# Getting to know the service

When you first open Genomenal, you will see a login page. Enter your login and password if you already have an account or sign up.

Next you will see the main page listing the patients. If you have not previously used the service, the page will be empty. There is a search bar at the top to help you navigate through the patient pages.

<p align="center">
<img src="img/eng/1-all-patients-page.png" width="1000"/>
</p>

You can see the various sections of the service in the navigation bar on the left. The bar contains the **“In process”** section, where there will be only those patients with samples being currently processed; the **“Problems”** section, where there will be only those patients with problems during data processing. You can transfer irrelevant data or data for later deletion to the **“Archive”** section.

Patients can be grouped into **cohorts**, for example, by type of pathology or data source. By selecting a cohort in the navigation bar on the left, you can only see patients belonging to that cohort.

Various global configuration options can be accessed in the **“Settings”** section. Here you can add sets of genes, which you can later use to filter the analysis results (**“Gene panels”** section). When creating a panel, you can select genes from a list of all genes, or import the prepared gene list as text (for example TP53, BRCA1, EGFR). Alternatively, you can select a panel from a library of the most common clinical panels and the genes will be imported from there automatically. This can significantly speed up further data interpretation if you are only interested in a narrow range of genes within a specific pathology or group of pathologies.

If you are analyzing the data obtained by targeted sequencing with the enrichment of certain regions based on one of the common capture kits, the service will automatically detect which kit was used. However, to speed up the processing or in the case of using a custom kit, you can upload sequenced regions in BED format in the **“Capture kits”** section (make sure that you have correctly specified the assembly of the reference genome when uploading the BED file).
