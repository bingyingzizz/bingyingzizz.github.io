# 六条（强连通块）
`imp.completeness-cycle` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `thm.monotone-convergence` 单调有界定理 + `lem.nested-intervals` 闭区间套定理 + `thm.bolzano-weierstrass` Bolzano–Weierstrass 定理 + `thm.cauchy-criterion` Cauchy 收敛准则 + `thm.real-complete-metric` ℝ 是完备度量空间 → `thm.completeness-equivalent` 完备性的六条等价

是 $S$ 的上界则令 $I_{n+1} = [a_n, m_n]$，否则（此时可取出 $a_{n+1} \in S$ 且 $a_{n+1} > m_n$）令 $I_{n+1} = [m_n, b_n]$。于是 $b_n - a_n = (b_0 - a_0)/2^{n} \to 0$，且 $a_n$ 递增有上界 —— 由 (2)（已由 (1) 推出，但这里可直接用 (6) 的完备性）$a_n$ 收敛，记极限为 $s$。

> 续见 proofs/imp.completeness-cycle.7.md
