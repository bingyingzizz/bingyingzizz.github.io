# 六条（强连通块）
`imp.completeness-cycle` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 + `thm.monotone-convergence` 单调有界定理 + `lem.nested-intervals` 闭区间套定理 + `thm.bolzano-weierstrass` Bolzano–Weierstrass + `thm.cauchy-criterion` Cauchy 收敛准则 + `thm.real-complete-metric` ℝ 是完备度量空间 → `thm.completeness-equivalent` 完备性的六条等价

1. $s$ 是 $S$ 的上界：若存在 $t \in S$ 且 $t > s$，取 $n$ 使 $b_n - a_n < t - s$；由 $b_n$ 也是上界得 $t \le b_n$，于是 $b_n \ge t > s > a_n$ 且 $b_n - a_n \ge t - a_n > t - s$（因为 $a_n \le s$），矛盾。
2. $s$ 是最小上界：任取上界 $u$，恒有 $a_n \le u$（$a_n$ 附近有 $S$ 的点），令 $n \to \infty$ 

> 续见 proofs/imp.completeness-cycle.8.md
