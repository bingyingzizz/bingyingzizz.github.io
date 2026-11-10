# dep.qr-gs
`dep.qr-gs` · 推出 · strong 边 · 根 `../`

`thm.gram-schmidt` Gram–Schmidt 正交化 → `thm.qr-decomposition` QR 分解

对 $A$ 的列向量作 Gram–Schmidt：$q_{j}$ 由 $a_{j}$ 减去它在前 $j-1$ 个 $q$ 上的投影再归一化，故 $a_{j}=\sum_{i\le j}r_{ij}q_{i}$，矩阵形式即 $A=QR$，$R$ 上三角源于递推只涉及 $i\le j$。∎

> QR 分解就是 Gram–Schmidt 的矩阵写法 —— 这一步是理解 QR 的全部。
