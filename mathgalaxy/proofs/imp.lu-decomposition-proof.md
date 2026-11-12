# 顺序主子式非零 $\implies$ 唯一的 $LU$ 分解
`imp.lu-decomposition-proof` · 推出 · strong 边 · 根 `../`

`def.matrix` 矩阵 + `def.elementary-matrix` 初等变换与初等矩阵 + `def.invertible-matrix` 可逆矩阵 → `thm.lu-decomposition` LU 分解

对 $n$ 归纳。$n=1$ 时 $A=(a_{11})$，$\Delta_1=a_{11}\ne0$，取 $L=(1)$、$U=(a_{11})$。

设 $n\ge2$，$A=\begin{pmatrix}a&b^{T}\\ c&D\end{pmatrix}$，$a=a_{11}\ne0$。令 $E$ 为把第 $i$ 行减去 $(c_i/a)$ 倍第一行（$i=2,\ldots,n$）的初等矩阵之积，则 $EA=\begin{pmatrix}a&b^{T}\\ 0&S\end{pmatrix}$，其中 $S=D-cb^{T}/a$ 是 Schur 补。

Schur 补的顺序主子式满足 $\Delta_{k+1}(A)=a\,\Delta_k(S)$（$k=1,\ldots,n-1$：对前 $k+1$ 阶主子矩阵同步做上述行变换，其行列式等于 $a\det S_k$）。由 $\Delta_j(A)\ne0$ 得 $\Delta_k(S)\ne0$，归纳得 $S=L_S U_S$。

> 续见 proofs/imp.lu-decomposition-proof.2.md
