# 六条（强连通块）
`imp.completeness-cycle` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `thm.monotone-convergence` 单调有界定理 + `lem.nested-intervals` 闭区间套定理 + `thm.bolzano-weierstrass` Bolzano–Weierstrass 定理 + `thm.cauchy-criterion` Cauchy 收敛准则 + `thm.real-complete-metric` ℝ 是完备度量空间 → `thm.completeness-equivalent` 完备性的六条等价

**(6) $\implies$ (1)**：设 $S \subseteq \mathbb{R}$ 非空、有上界，要证 $\sup S$ 存在。取 $a_0 \in S$ 与 $S$ 的一个上界 $b_0$，令 $I_0 = [a_0, b_0]$。归纳地，设 $I_n = [a_n, b_n]$ 已作出，其中 $a_n$ 是 $S$ 的下界方向上的一个点、$b_n$ 是 $S$ 的上界。取中点 $m_n = (a_n + b_n) / 2$：若 $m_n$ 

> 续见 proofs/imp.completeness-cycle.6.md
