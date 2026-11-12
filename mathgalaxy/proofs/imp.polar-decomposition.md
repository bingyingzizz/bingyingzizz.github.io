# 谱定理 $\Longrightarrow$ 极分解
`imp.polar-decomposition` · 推出 · strong 边 · 根 `../`

`thm.spectral-matrix` 谱定理（矩阵版） → `thm.polar-decomposition` 极分解

**① 构造 $P$**。$A^{*}A$ 是半正定 Hermite 矩阵，故正规；由谱定理（矩阵版）存在酉 $V$ 与实对角 $\mu = \operatorname{diag}(\mu_{1}, \ldots, \mu_{n})$ 使 $A^{*}A = V\mu V^{*}$，且 $\mu_{i} \ge 0$（半正定性：$\langle A^{*}Ax, x\rangle = \|Ax\|^{2} \ge 0$）。令 $P := V\operatorname{diag}(\sqrt{\mu_{1}}, \ldots, \sqrt{\mu_{n}})V^{*}$，则 $P$ 半正定 Hermite 且 $P^{2} = A^{*}A$。

**② 唯一性**。若 $Q$ 半正定 Hermite 且 $Q^{2} = A^{*}A$，把 $Q$ 谱分解为 $Q = W\operatorname{diag}(\nu_{i})W^{*}$（$\nu_{i} \ge 0$），则 $Q^{2} = W\operatorname{diag}(\nu_{i}^{2})W^{*} = A^{*}A$。谱分解的谱值唯一，故 $\nu_{i}^{2} = \mu_{i}$、$\nu_{i} = \sqrt{\mu_{i}}$；在重特征值上 $Q$ 与 $A^{*}A$ 可同时对角化，于是 $Q = P$。

> 续见 proofs/imp.polar-decomposition.2.md
