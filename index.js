function mergeSortedArrays (leftArr, rightArr) {
    let sortedArr = [];
    
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
        sortedArr.push(leftArr.shift());
      } else {
        sortedArr.push(righArr.shift());
      }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
  }

  function mergeSort(arr) {
    // Base Condition - the condition used to stop the function from calling itself. Stops recursion.
    if (arr.length <= 1) {
        return arr;
    }

    let middleIndex = Math.floor(arr.length / 2);

    // Recursive calls - used by mergeSort to call itself as a function within itself.
    let leftArr = mergeSort(arr.slice(0, middleIndex));
    let rightArr = mergeSort(arr.slice(middleIndex));

    return merge(leftArr, rightArr);

  }

console.log(mergeSort([5, 4, 3, 2, 1])); // an array of descending order elements
console.log(mergeSort([8, 23, 9, 4, 12, -8, 4, 67, 342, -1000])); // An array of unsorted positive and negative elements
console.log(mergeSort([])); // an empty array
console.log(mergeSort([1])); // an array of one element
console.log(
    mergeSort([
    1547, 1386, 1902, 1674, 839, 1203, 1987, 1152, 1761, 477, 1248, 1045, 651,
    1452, 1766, 1624, 1473, 1793, 981, 1311, 534, 1052, 1418, 492, 1511, 594,
    1206, 1745, 1351, 739, 933, 1919, 1975, 1459, 1868, 1112, 1998, 1693, 876,
    1778, 1028, 1601, 899, 506, 1754, 1845, 1953, 1168, 808, 1549, 1138, 1150,
    1200, 950, 1417, 1944, 1115, 1438, 996, 1269, 1428, 1245, 751, 1894, 1800,
    1787, 1687, 1251, 1502, 718, 1537, 1889, 1585, 1630, 1660, 1337, 1164, 1312,
    1448, 1037, 763, 631, 1770, 1731, 1425, 1163, 1080, 694, 1035, 1375, 1898,
    1320, 1470, 1023, 1959, 1670, 1298, 1567, 1313, 1884, 1798, 1614, 1481,
    1178, 1882, 946, 1420, 1661, 793, 1189, 1727, 1508, 1349, 1475, 1839, 1910,
    1821, 1523, 915, 866, 1513, 1230, 1271, 759, 1737, 1413, 1282, 1058, 993,
    1589, 1566, 1986, 1172, 775, 1735, 1728, 1626, 1799, 1854, 1965, 1500, 1158,
    1878, 1697, 1134, 1900, 1165, 837, 1315, 1382, 1922, 1920, 1809, 1831, 1301,
    1972, 1649, 1628, 1353, 1392, 1943, 1881, 1990, 1541, 1509, 1607, 1583,
    1177, 825, 1600, 1753, 1784, 1287, 1033, 1708, 1207, 1291, 1139, 1572, 1264,
    824, 1935, 1877, 1277, 1618, 774, 1989, 1187, 1242, 1314, 1954, 1757, 1786,
    1225, 1103, 1988, 1746, 1857, 1228, 1524, 1131, 1829, 1083, 1407, 1467,
    1945, 1806, 1552, 1940, 1926, 1612, 1668, 1300, 1166, 1768, 1440, 1851,
    1334, 1942, 987, 1780, 1088, 971, 1705, 1804, 1226, 1709, 1997, 1969, 1544,
    875, 1767, 1834, 1917, 1574, 1118, 1241, 1355, 1280, 1268, 1120, 1801, 1305,
    1439, 1976, 987, 1825, 1073, 1159, 1779, 1938, 1677, 1681, 1605, 1808, 1344,
    1017, 1855, 1125, 1455, 1273, 1604, 1924, 1036, 1484, 1250, 1350, 1258, 902,
    1685, 1352, 977, 1632, 1122, 961, 1198, 1587, 1348, 1791, 1229, 1588, 1412,
    1866, 1981, 1978, 1867, 1458, 1895, 1357, 1951, 1148, 1952, 1553, 1843,
    1147, 1097, 1911, 1370, 1162, 1020, 1487, 1580, 1246, 1876, 1155, 1701,
    1980, 1662, 1233, 1408, 1961, 1568, 1707, 1079, 1293, 1209, 1119, 1686,
    1205, 1775, 1984, 1021, 1593, 1153, 1584, 1043, 1397, 1193, 1038, 1244,
    1222, 1213, 1057, 1968, 1211, 1341, 1254, 1101, 1971, 1807, 1732, 1765,
    1747, 1343, 1030, 1446, 1734, 1329, 1260, 1032, 1949, 1240, 1261, 1859,
    1934, 1718, 1319, 1173, 1404, 1128, 1690, 1497, 1059, 1794, 1447, 1964,
    1750, 1025, 1249, 1015, 1620, 1292, 1669, 1019, 1817, 1387, 1328, 1220,
    1733, 1492, 1925, 1977, 1151, 1169, 1985, 1362, 1886, 1288, 1449, 1547,
    1386, 1902, 1674, 839, 1203, 1987, 1152, 1761, 477, 1248, 1045, 651, 1452,
    1766, 1624, 1473, 1793, 981, 1311, 534, 1052, 1418, 492, 1511, 594, 1206,
    1745, 1351, 739, 933, 1919, 1975, 1459, 1868, 1112, 1998, 1693, 876, 1778,
    1028, 1601, 899, 506, 1754, 1845, 1953, 1168, 808, 1549, 1138, 1150, 1200,
    950, 1417, 1944, 1115, 1438, 996, 1269, 1428, 1245, 751, 1894, 1800, 1787,
    1687, 1251, 1502, 718, 1537, 1889, 1585, 1630, 1660, 1337, 1164, 1312, 1448,
    1037, 763, 631, 1770, 1731, 1425, 1163, 1080, 694, 1035, 1375, 1898, 1320,
    1470, 1023, 1959, 1670, 1298, 1567, 1313, 1884, 1798, 1614, 1481, 1178,
    1882, 946, 1420, 1661, 793, 1189, 1727, 1508, 1349, 1475, 1839, 1910, 1821,
    1523, 915, 866, 1513, 1230, 1271, 759, 1737, 1413, 1282, 1058, 993, 1589,
    1566, 1986, 1172, 775, 1735, 1728, 1626, 1799, 1854, 1965, 1500, 1158, 1878,
    1697, 1134, 1900, 1165, 837, 1315, 1382, 1922, 1920, 1809, 1831, 1301, 1972,
    1649, 1628, 1353, 1392, 1943, 1881, 1990, 1541, 1509, 1607, 1583, 1177, 825,
    1600, 1753, 1784, 1287, 1033, 1708, 1207, 1291, 1139, 1572, 1264, 824, 1935,
    1877, 1277, 1618, 774, 1989, 1187, 1242, 1314, 1954, 1757, 1786, 1225, 1103,
    1988, 1746, 1857, 1228, 1524, 1131, 1829, 1083, 1407, 1467, 1945, 1806,
    1552, 1940, 1926, 1612, 1668, 1300, 1166, 1768, 1440, 1851, 1334, 1942, 987,
    1780, 1088, 971, 1705, 1804, 1226, 1709, 1997, 1969, 1544, 875, 1767, 1834,
    1917, 1574, 1118, 1241, 1355, 1280, 1268, 1120, 1801, 1305, 1439, 1976, 987,
    1825, 1073, 1159, 1779, 1938, 1677, 1681, 1605, 1808, 1344, 1017, 1855,
    1125, 1455, 1273, 1604, 1924, 1036, 1484, 1250, 1350, 1258, 902, 1685, 1352,
    977, 1632, 1122, 961, 1198, 1587, 1348, 1791, 1229, 1588, 1412, 1866, 1981,
    1978, 1867, 1458, 1895, 1357, 1951, 1148, 1952, 1553, 1843, 1147, 1097,
    1911, 1370, 1162, 1020, 1487, 1580, 1246, 1876, 1155, 1701, 1980, 1662,
    1233, 1408, 1961, 1568, 1707, 1079, 1293, 1209, 1119, 1686, 1205, 1775,
    1984, 1021, 1593, 1153, 1584, 1043, 1397, 1193, 1038, 1244, 1222, 1213,
    1057, 1968, 1211, 1341, 1254, 1101, 1971, 1807, 1732, 1765, 1747, 1343,
    1030, 1446, 1734, 1329, 1260, 1032, 1949, 1240, 1261, 1859, 1934, 1718,
    1319, 1173, 1404, 1128, 1690, 1497, 1059, 1794, 1447, 1964, 1750, 1025,
    1249, 1015, 1620, 1292, 1669, 1019, 1817, 1387, 1328, 1220, 1733, 1492,
    1925, 1977, 1151, 1169, 1985, 1362, 1886, 1288, 1449, 1233, 1408, 1961,
    1568, 1707, 1079, 1293, 1209, 1119, 1686, 1205, 1775, 1984, 1021, 1593,
    1153, 1584, 1043, 1397, 1193, 1038, 1244, 1222, 1213, 1057, 1968, 1211,
    1341, 1254, 1101, 1971, 1807, 1732, 1765, 1747, 1343, 1030, 1446, 1734,
    1329, 1260, 1032, 1949, 1240, 1261, 1859, 1934, 1718, 1319, 1173, 1404,
    1128, 1690, 1497, 1059, 1794, 1447, 1964, 1750, 1025, 1249, 1015, 1620,
    1292, 1669, 1019, 1817, 1387, 1328, 1220, 1733, 1492, 1925, 1977, 1151,
    1169, 1985, 1362, 1886, 1288, 1449, 1233, 1408, 1961, 1568, 1707, 1079,
    1293, 1209, 1119, 1686, 1205, 1775, 1984, 1021, 1593, 1153, 1584, 1043,
    1397, 1193, 1038, 1244, 1222, 1213, 1057, 1968, 1211, 1341, 1254, 1101,
    1971, 1807, 1732, 1765, 1747, 1343, 1030, 1446, 1734, 1329, 1260, 1032,
    1949, 1240, 1261, 1859, 1934, 1718, 1319, 1173, 1404, 1128, 1690, 1497,
    1059, 1794, 1447, 1964, 1750, 1025, 1249, 1015, 1620, 1292, 1669, 1019,
    1817, 1387, 1328, 1220, 1733, 1492, 1925, 1977, 1151, 1169, 1985, 1362,
    1886, 1288, 1449, 1233, 1408, 1961, 1568, 1707, 1079, 1293, 1209, 1119,
    1686, 1205, 1775, 1984, 1021, 1593, 1153, 1584, 1043, 1397, 1193, 1038,
    1244, 1222, 1213, 1057, 1968, 1211, 1341, 1254, 1101, 1971, 1807, 1732,
    1765, 1747, 1343, 1030, 1446, 1734, 1329, 1260, 1032, 1949, 1240, 1261,
    1859, 1934, 1718, 1319, 1173, 1404, 1128, 1690, 1497, 1059, 1794, 1447,
    1964, 1750, 1025,
  ])
); // an array of 1000 elements