# 六条（强连通块）
`imp.completeness-cycle` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `thm.monotone-convergence` 单调有界定理 + `lem.nested-intervals` 闭区间套定理 + `thm.bolzano-weierstrass` Bolzano–Weierstrass 定理 + `thm.cauchy-criterion` Cauchy 收敛准则 + `thm.real-complete-metric` ℝ 是完备度量空间 → `thm.completeness-equivalent` 完备性的六条等价

取中点 $m_n = (a_n + b_n) / 2$：若 $m_n$ 是 $S$ 的上界则令 $I_{n+1} = [a_n, m_n]$，否则（此时可取出 $a_{n+1} \in S$ 且 $a_{n+1} > m_n$）令 $I_{n+1} = [m_n, b_n]$。

> 续见 proofs/imp.completeness-cycle.6.md
