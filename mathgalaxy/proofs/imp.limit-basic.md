# $\varepsilon$-$N$ 定义 $\implies$ 极限的基本性质
`imp.limit-basic` · 推出 · strong 边 · 根 `../`

`def.sequence-limit` 数列极限 + `prop.order-rules` 序与四则运算 → `prop.limit-basic` 极限的基本性质

**(i)** 设 $x_n \to x$、$x_n \to x'$ 且 $x \ne x'$，不妨 $x < x'$。取 $\varepsilon = (x' - x)/2 > 0$，则 $n$ 充分大时同时有 $|x_n - x| < \varepsilon$、$|x_n - x'| < \varepsilon$，于是

$$x' - x \le |x' - x_n| + |x_n - x| < 2\varepsilon = x' - x,$$

矛盾。

**(ii)** 取 $\varepsilon = 1$，存在 $N$ 使 $n \ge N$ 时 $|x_n - x| < 1$，故 $|x_n| \le |x| + 1$。令 $M := \max\{|x_1|, \ldots, |x_{N-1}|, |x| + 1\}$ 即可。

**(iii)** 设 $x > 0$，取 $\varepsilon = x/2$，则 $n \ge N$ 时 $|x_n - x| < x/2$，即 $x_n > x - x/2 = x/2 > 0$。$x < 0$ 时对 $-x_n$ 用同一结论。

> 续见 proofs/imp.limit-basic.2.md
