# Schur 三角化 $\Longrightarrow$ 谱定理（矩阵版）
`imp.spectral-matrix` · 推出 · strong 边 · 根 `../`

`thm.schur-triangularization` Schur 三角化 → `thm.spectral-matrix` 谱定理（矩阵版）

**($\Longleftarrow$)** 若 $A = U\Lambda U^{*}$，则 $AA^{*} = U\Lambda U^{*}U\Lambda^{*}U^{*} = U\Lambda\Lambda^{*}U^{*}$，而 $A^{*}A = U\Lambda^{*}\Lambda U^{*}$；对角阵的乘法可交换，$\Lambda\Lambda^{*} = \Lambda^{*}\Lambda$，故 $AA^{*} = A^{*}A$ —— $A$ 正规。

**($\Longrightarrow$)** 设 $A$ 正规。由 Schur 三角化，存在酉 $U$ 使 $T = U^{*}AU$ 上三角。正规性在酉相似下保持：$T^{*}T = U^{*}A^{*}UU^{*}AU = U^{*}A^{*}AU$，$TT^{*} = U^{*}AUU^{*}A^{*}U = U^{*}AA^{*}U$，两者相等。

> 续见 proofs/imp.spectral-matrix.2.md
