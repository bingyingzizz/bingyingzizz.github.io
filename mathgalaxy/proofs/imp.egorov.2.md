# a.e. 收敛 + 有限测度 $\implies$ 近一致
`imp.egorov` · 推出 · strong 边 · 根 `../`

`def.convergence-modes` 五种收敛 → `thm.egorov` Egorov 定理

$$\mu(E) \le \sum_k \mu(E_{n_k}(k)) < \varepsilon \cdot \sum_k 2^{-k} = \varepsilon$$

**⑥ 在 $E^c$ 上一致收敛。** 取 $x \notin E$。对任意 $k$，$x \notin E_{n_k}(k)$，即对一切 $n \ge n_k$ 有

$$|f_n(x) - f(x)| < k^{-1}$$

这正是「$f_n \rightrightarrows  f$ 在 $E^c$ 上」的定义（给定精度 $k^{-1}$ $\le \varepsilon$ 后，取 $N = n_k$）。∎

$>$ ⚠ ③ 是唯一用到 $\mu(X) < \infty$ 的地方（递减列的上连续性需要首项有限）。少了它这一步就不成立，反例见节点正文。
