# 紧 $\implies$ 完备
`imp.compact-complete` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 → `def.complete` 完备

设 $X$ 紧，$\{x_{n}\}$ 是 $X$ 中的 Cauchy 列。要证它收敛。

**①** 由「紧 $\implies$ 列紧」（见那条箭头），$\{x_{n}\}$ 有收敛子列 $x_\{n_{k}\} \to x \in X$。

**② Cauchy 列只要有收敛子列就整体收敛到同一个极限**：给定 $\varepsilon > 0$，取 $N_{1}$ 使 $m, n \ge N_{1}$ 时 $d(x_{m}, x_{n}) < \varepsilon /2$；取 $K$ 使 $n_{k} \ge N_{1}$ 且 $d(x_\{n_{k}\}, x) < \varepsilon /2$ 对 $k \ge K$ 成立。则对 $n \ge N_{1}$，取一个 $k \ge K$ 使 $n_{k} \ge N_{1}$，得

$$d(x_n, x) \le d(x_n, x_{n_k}) + d(x_{n_k}, x) < \varepsilon/2 + \varepsilon/2 = \varepsilon$$

故 $x_{n} \to x \in X$。所以 $X$ 完备。∎

> 关键引理：「Cauchy 列 + 有一个收敛子列 $\implies$ 收敛」，这在任何度量空间里都对。
