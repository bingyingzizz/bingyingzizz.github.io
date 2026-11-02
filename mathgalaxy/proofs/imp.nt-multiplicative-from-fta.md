# 积性函数的积性来自「素数幂两两互素」
`imp.nt-multiplicative-from-fta` · 推出 · strong 边 · 根 `../`

`thm.fundamental-arithmetic` 算术基本定理 → `def.multiplicative-function` 积性函数

设 $f$ 积性，$n = p_{1}^{e_{1}}\cdots p_{r}^{e_{r}}$。这些素数幂 $q_{i} := p_{i}^{e_{i}}$ 两两互素，于是对 $r$ 归纳：



$$f(n) = f(q_{1})\cdots f(q_{r}) .$$



反之若两个函数在一个互素的分解上一致，也一致。所以积性函数完全由 $(f(p^{e}))_{p,e}$ 这张表决定。



⚠ 这里用的是「两两互素 $\implies$ 可以逐步拆」，不涉及唯一分解本身；唯一分解保证的是「$n$ 只有一种这样的拆法」，所以「由表决定」才不会自相矛盾。
