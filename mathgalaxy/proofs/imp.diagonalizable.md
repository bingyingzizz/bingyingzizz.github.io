# 特征子空间 + 极小多项式 $\implies$ 可对角化判据
`imp.diagonalizable` · 推出 · strong 边 · 根 `../`

`def.eigenvalue` 特征值与特征向量 + `def.invariant-subspace` 不变子空间 + `thm.minimal-poly-divisor` 极小多项式整除特征多项式 → `thm.diagonalizable` 可对角化判据

记 $n = \dim V$、$\lambda_1, \ldots, \lambda_m$ 为（$K$ 中）互异特征值。

**(1) $\implies$ (2)**：若 $T$ 在某组基下是对角阵 $\operatorname{diag}(\lambda_{i_1}, \ldots)$，则每个基向量都是特征向量，于是这组基（共 $n$ 个）落在 $\bigcup_i E_{\lambda_i}$ 中；又不同特征值的特征子空间之和是直和，故 $V = \bigoplus_i E_{\lambda_i}$。

**(2) $\implies$ (3)**：取维数即得 $\sum_i \dim E_{\lambda_i} = n$。

> 续见 proofs/imp.diagonalizable.2.md
