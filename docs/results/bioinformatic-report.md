---
sidebar_position: 4
sidebar_label: Bioinformatic report
---

# Bioinformatic report

Bioinformatic report has collected the main metrics that will help control the quality of the source data and the quality of alignment. The report can be exported to PDF.

![Bioinformatic report](/img/eng/35-bioinformatic-report.png)

## Bioinformatic report tab

### File statistics

Reads count and their length before and after cleaning, and the reads percent retained after cleaning. A large number of filtered reads and a large decrease in length indicate a low quality of the source data.

### Quality Report

This is a report on the sequence quality control metrics calculated at the “Check quality and cleanup” stage of the pipeline.
A detailed report on metrics with visualization can be downloaded in the tab **“Workflow details” -> “Check quality and cleanup” -> “Check Quality” -> “Result files”**

**Description of metrics and thresholds**

<table>
  <tr>
   <td>Metric
   </td>
   <td>Description
   </td>
   <td>Threshold
   </td>
  </tr>
  <tr>
   <td>Total sequences
   </td>
   <td>Number of sequences
   </td>
   <td>>200 000
   </td>
  </tr>
  <tr>
   <td>Length distribution
   </td>
   <td>Sequence length distribution
   </td>
   <td>Short sequences percent &lt; 25%, short sequence length ≤ 20
   </td>
  </tr>
  <tr>
   <td>Tiles sequence quality
   </td>
   <td>Number of tiles
   </td>
   <td>Number of tile bad quality cells with maximum deviation 1,165 &lt; 7
   </td>
  </tr>
  <tr>
   <td>First base sequence quality
   </td>
   <td>First nucleotides quality
   </td>
   <td>10% of the lowest quality first bases (3 nucleotides) are of quality > 20
   </td>
  </tr>
  <tr>
   <td>Middle base sequence quality
   </td>
   <td>Middle nucleotides quality
   </td>
   <td>10% of the lowest quality middle bases are of quality > 20
   </td>
  </tr>
  <tr>
   <td>Last base sequence quality
   </td>
   <td>Last nucleotides quality
   </td>
   <td>10% of the lowest quality last bases (3 nucleotides) are of quality > 20
   </td>
  </tr>
  <tr>
   <td>Overrepresented sequences
   </td>
   <td>Overrepresented sequences
   </td>
   <td>Overrepresented sequences percent &lt; 1
   </td>
  </tr>
  <tr>
   <td>Adapter contaminated
   </td>
   <td>Adapter sequence contamination
   </td>
   <td>Adapter contaminated percent &lt; 1
   </td>
  </tr>
  <tr>
   <td>Base N content
   </td>
   <td>Number of N among bases
   </td>
   <td>N content percent &lt; 20
   </td>
  </tr>
  <tr>
   <td>GC content
   </td>
   <td>GC content
   </td>
   <td>Presence of one GC peak
   </td>
  </tr>
  <tr>
   <td>Base sequence content
   </td>
   <td>AT/GC ratio
   </td>
   <td>Average difference between A and T &lt; 1%, maximum difference &lt; 20%, \
average difference between G and C &lt; 1%, maximum difference &lt; 20%
   </td>
  </tr>
</table>


### Alignment Report

Metrics describing the alignment quality. If there are a large number of sequencing errors, incomplete data, high levels of contamination, or incorrect identification of the sample source (organism), the metrics will indicate a possible problem.
