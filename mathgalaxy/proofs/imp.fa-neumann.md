# 次可乘 + 完备 $\implies$ Neumann 级数
`imp.fa-neumann` · 推出 · strong 边 · 根 `../`

`prop.operator-algebra` 算子乘法的范数不等式 + `thm.bounded-operators-banach` B(E,F) 完备 → `thm.neumann-series` Neumann 级数

由次可乘性归纳得 $\|u^k\| \le \|u\|^k$，故 $\sum_{k \ge 0}\|u^k\| \le (1 - \|u\|)^{-1} < \infty$；由 $B(E)$ 完备，级数收敛，记为 $v$。
部分和 $s_n = \sum_{k<n} u^k$ 满足 $(I - u)s_n = s_n(I - u) = I - u^n$，而 $\|u^n\| \to 0$，用乘法连续性取极限得 $(I-u)v = v(I-u) = I$。

故 $v = (I-u)^{-1}$ 且 $\|v\| \le (1-\|u\|)^{-1}$。

$\blacksquare$

> 两个前提都不能少：次可乘给「几何级数收敛」，完备给「收敛就等于有一个算子」。
