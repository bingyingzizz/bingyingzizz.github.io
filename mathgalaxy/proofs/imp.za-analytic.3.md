# 边界函数 $A_\infty$ $\implies$ $A_\blacksquare$ 是解析环
`imp.za-analytic` · 推出 · strong 边 · 根 `../`

`prop.analytic-examples` 解析环的例子 + `def.analytic-ring` 解析环 + `thm.solid-abelian` 固态群构成阿贝尔子范畴 + `prop.analytic-base-change` 解析环的 base change → `thm.za-analytic` 有限生成代数的解析环

**③ 对 $\prod_I A$ 型系数的消没。** 设 $C$ 的各项是若干 $\prod_I A$ 的直和，则 $\operatorname{RHom}_A(A_\infty, C) = 0$。化到 $C = A$：用 ① 的消解，$\operatorname{RHom}_A(A_\infty, A)$ 由复形
$$A[U^{-1}]/A \xrightarrow{1 - \mathrm{shift}\otimes T} A[U^{-1}]/A$$
计算。⚠️ 两项复形 $M \xrightarrow{f} M$ **无环要求 $f$ 是同构**（既要 $\ker f = 0$、也要 $\operatorname{coker} f = 0$），**不是单射就够** —— 原文只写了「是单射，故无环」。这里 $1 - \mathrm{shift}\otimes T$ 在 $A[U^{-1}]/A$ 上的可逆性，本图**未验证**。有余核时再对 $\prod$ 逐项处理。

> 续见 proofs/imp.za-analytic.4.md
