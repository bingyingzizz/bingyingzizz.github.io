# 压缩 + 完备 $\implies$ 唯一不动点（含误差估计）
`imp.banach-fixed-point` · 推出 · strong 边 · 根 `../`

`def.contraction` 压缩映射 + `def.complete` 完备 → `thm.banach-fixed-point` 压缩映射原理

**第一步：迭代列是 Cauchy 列。** 任取 $x_0$，令 $x_{k+1} := Tx_k$。由压缩性

$$d(x_{k+1}, x_{k+2}) \le q\, d(x_k, x_{k+1}) \le \cdots \le q^{k+1} d(x_0, x_1)$$

于是对 $m > k$，用三角不等式与几何级数

$$d(x_k, x_m) \le \sum_{j=k}^{m-1} d(x_j, x_{j+1}) \le \sum_{j=k}^{\infty} q^{j}\, d(x_0, x_1) = \frac{q^{k}}{1 - q}\, d(x_0, x_1)$$

右端与 $m$ 无关且 $\to 0$（$k \to \infty$，因 $q < 1$），故 $(x_k)$ 是 Cauchy 列。

**第二步：收敛（用完备性）。** $X$ 完备 $\implies$ 存在 $x^{\ast}$ 使 $x_k \to x^{\ast}$。

> 续见 proofs/imp.banach-fixed-point.2.md
