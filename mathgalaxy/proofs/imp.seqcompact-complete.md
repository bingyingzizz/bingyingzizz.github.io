# 列紧 $\implies$ 完备
`imp.seqcompact-complete` · 推出 · strong 边 · 根 `../`

`def.sequentially-compact` 列紧 → `def.complete` 完备

设 $X$ 列紧，$\{x_{n}\}$ 是 $X$ 中的 Cauchy 列。

**①** 由列紧，$\{x_{n}\}$ 有收敛子列 $x_\{n_{k}\} \to x \in X$。

**② Cauchy 列只要有收敛子列，就整体收敛到同一个极限**：给定 $\varepsilon > 0$，取 $N$ 使 $m, n \ge N$ 时 $d(x_{m}, x_{n}) < \varepsilon /2$；再取 $K$ 使 $k \ge K$ 时 $n_{k} \ge N$ 且 $d(x_\{n_{k}\}, x) < \varepsilon /2$。于是对 $n \ge N$，取 $k \ge K$ 使 $n_{k} \ge N$，得

$$d(x_n, x) \le d(x_n, x_{n_k}) + d(x_{n_k}, x) < \varepsilon/2 + \varepsilon/2 = \varepsilon$$

故 $x_{n} \to x$。所以 $X$ 完备。∎

> 和「紧 $\implies$ 完备」是同一个套路，只是把「紧」换成它的直接推论「列紧」。
