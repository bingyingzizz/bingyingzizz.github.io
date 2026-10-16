# 多项式的次数 + $K$ 是域 $\implies$ 带余除法
`imp.division-algorithm` · 推出 · strong 边 · 根 `../`

`def.polynomial` 一元多项式 + `def.field` 域 → `thm.division-algorithm` 带余除法

**存在性**：对 $\deg f$ 归纳。若 $\deg f < \deg g$，取 $q = 0$、$r = f$ 即可。否则设

$$f = a_m x^{m} + \cdots, \qquad g = b_n x^{n} + \cdots \quad (a_m \ne 0, b_n \ne 0, m \ge n)$$

令 $c := a_m b_n^{-1} \in K$（**这里用到 $K$ 是域**，$b_n$ 可逆），并令

$$f_1 := f - c\,x^{m-n} g$$

则 $f_1$ 的 $m$ 次项被消掉，$\deg f_1 < \deg f$。对 $f_1$ 用归纳假设：$f_1 = q_1 g + r$（$\deg r < \deg g$），于是 $f = (c x^{m-n} + q_1) g + r$。

> 续见 proofs/imp.division-algorithm.2.md
