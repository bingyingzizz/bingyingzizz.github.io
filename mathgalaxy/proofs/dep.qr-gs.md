# dep.qr-gs
`dep.qr-gs` · 推出 · strong 边 · 根 `../`

`thm.gram-schmidt` Gram–Schmidt 正交化 → `thm.qr-decomposition` QR 分解

**存在性（Gram–Schmidt）。** 对列 $a_{1},\ldots,a_{n}$ 作 Gram–Schmidt：$q_{k}=\bigl(a_{k}-\sum_{i<k}\langle a_{k},q_{i}\rangle q_{i}\bigr)\big/\|\cdots\|$，$r_{ik}=\langle a_{k},q_{i}\rangle$、$r_{kk}=\|a_{k}-\sum_{i<k}r_{ik}q_{i}\|>0$（列线性无关保证分母非零）。由递推 $a_{k}=\sum_{i\le k}r_{ik}q_{i}$，即 $A=QR$：$Q$ 的列标准正交，$R$ 上三角且对角元全正。

**唯一性。** 设 $QR=Q'R'$，则 $Q'^{*}Q=R'R^{-1}$。左边是酉矩阵（两个列标准正交矩阵之积，$n\times n$），右边是上三角（上三角阵的逆与乘积仍是上三角）；酉且上三角的矩阵必为对角阵，其对角元模长为 $1$。$R,R'$ 的对角元均为正，故 $R'R^{-1}$ 的对角元是正实数，模长 $1$ 迫使它等于 $1$；于是 $R'R^{-1}=I$，即 $R=R'$、$Q=Q'$。∎

> QR 分解就是 Gram–Schmidt 的矩阵写法 —— 这一步是理解 QR 的全部。
