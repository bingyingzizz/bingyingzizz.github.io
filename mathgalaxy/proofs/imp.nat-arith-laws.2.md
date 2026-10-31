# 递推定义 + 归纳原理 $\implies$ 运算律
`imp.nat-arith-laws` · 推出 · strong 边 · 根 `../`

`def.nat-arith` 自然数的加法与乘法 + `thm.induction` 归纳原理与递推定义 → `thm.nat-arith-laws` 自然数的运算律

**④ 结合律**：对 $k$ 归纳，归纳步直接由 $S$ 的定义。**⑤ 乘法**：先证 $0 \cdot n = 0$ 与 $S(m)\cdot n = m\cdot n + n$（都对 $n$ 归纳，用 ③④），再对 $n$ 归纳得乘法交换律；结合律与分配律同样对 $k$ 归纳（分配律的归纳步是 $m(n + S(k)) = m S(n+k) = m(n+k) + m$）。

**⑥ 消去律**（对 $k$ 归纳）：$k = 0$ 平凡；若 $m + S(k) = n + S(k)$，则 $S(m+k) = S(n+k)$，由 $S$ 的单射得 $m + k = n + k$，再用归纳假设。$\blacksquare$
