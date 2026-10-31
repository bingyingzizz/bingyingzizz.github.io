# 递推定义 + 归纳原理 $\implies$ 运算律
`imp.nat-arith-laws` · 推出 · strong 边 · 根 `../`

`def.nat-arith` 自然数的加法与乘法 + `thm.induction` 归纳原理与递推定义 → `thm.nat-arith-laws` 自然数的运算律

全部对某个变量归纳，用 `def.nat-arith` 的两条递推式。

**① $0 + n = n$**（对 $n$ 归纳）：$n = 0$ 时 $0 + 0 = 0$；设 $0 + n = n$，则 $0 + S(n) = S(0 + n) = S(n)$。

**② $S(m) + n = S(m + n)$**（对 $n$ 归纳）：$n = 0$ 时两边都是 $S(m)$；归纳步 $S(m) + S(n) = S(S(m) + n) = S(S(m+n)) = S(m + S(n))$。

**③ 交换律 $m + n = n + m$**（对 $n$ 归纳）：$n = 0$ 时是 ①。归纳步：

$$m + S(n) = S(m + n) = S(n + m) = n + S(m) = S(n) + m,$$

最后一个等号用 ②（把 $m$ 与 $n$ 换位后再用一次）。

> 续见 proofs/imp.nat-arith-laws.2.md
