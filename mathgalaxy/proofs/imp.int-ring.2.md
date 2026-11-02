# 商构造 + $\mathbb{N}$ 的运算律 $\implies$ $\mathbb{Z}$ 是整环
`imp.int-ring` · 推出 · strong 边 · 根 `../`

`def.int` 整数 ℤ + `thm.nat-arith-laws` 自然数的运算律 → `thm.int-ring` ℤ 是交换整环

**序。** $[a,b] \le [c,d] :\iff a + d \le b + c$ 与代表元无关（同上，两边加同一个量）；全序由 $\mathbb{N}$ 的全序（三分）得到；相容性逐项验证。

**无零因子。** 见节点说明里的 $p q > 0$ 论证：两个正元的积为正，故 $xy = 0$ 迫使某个因子为 $0$。

**嵌入。** $n \mapsto [n,0]$ 显然单射，且 $[m,0] + [n,0] = [m+n,0]$、$[m,0][n,0] = [mn,0]$、$[m,0] \le [n,0] \iff m \le n$。$\blacksquare$
