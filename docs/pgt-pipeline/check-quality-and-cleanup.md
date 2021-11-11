---
sidebar_position: 3
sidebar_label: Check file quality and cleanup
---

# Check file quality and cleanup

The reads in the file(s) are checked for compliance with quality criteria. Depending on the results of the check, reads that do not meet the criteria will be filtered out, and nucleotides at the ends of reads with quality below the threshold will be truncated. In addition, the adapter sequences will be trimmed. This can significantly improve the quality of alignment and variant discovery.

In the eponymous section of “Workflow details”, information about the thresholds and quality checks that the samples passed are displayed. Here you can also download a detailed report with visualizations about each of the files before and after cleaning.

<p align="center">
<img src="../img/eng/20-quality-control-report.png" width="300"/>
</p>

**The sequence quality control metrics**

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
   <td>Average difference between A and T &lt; 1%, maximum difference &lt; 20%, average difference between G and C &lt; 1%, maximum difference &lt; 20%
   </td>
  </tr>
</table>
