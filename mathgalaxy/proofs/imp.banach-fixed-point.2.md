# 压缩 + 完备 $\implies$ 唯一不动点（含误差估计）
`imp.banach-fixed-point` · 推出 · strong 边 · 根 `../`

`def.contraction` 压缩映射 + `def.complete` 完备 → `thm.banach-fixed-point` 压缩映射原理

**第三步：$x^{\ast}$ 是不动点。** $T$ 是压缩故连续（Lipschitz），于是

$$T x^{\ast} = T\bigl(\lim_k x_k\bigr) = \lim_k T x_k = \lim_k x_{k+1} = x^{\ast}$$

**第四步：唯一。** 若 $Tx = x$、$Ty = y$，则 $d(x, y) = d(Tx, Ty) \le q\, d(x, y)$，故 $(1 - q) d(x, y) \le 0$，因 $1 - q > 0$ 得 $d(x, y) = 0$，即 $x = y$。

**第五步：误差估计。** 在第一步的不等式中令 $m \to \infty$（$d$ 连续）得先验估计；后验估计由 $d(x_k, x^{\ast}) \le d(x_k, x_{k+1}) + d(x_{k+1}, x^{\ast}) \le q\, d(x_{k-1}, x_k) + q\, d(x_k, x^{\ast})$ 整理即得。∎

> ⭐ 证明结构值得背下来：**先造 Cauchy 列 $\to$ 用完备性取极限 $\to$ 用连续性验证不动点 $\to$ 用 $1 - q > 0$ 得唯一**。四处用到的性质恰好是四个假设，一个都不多。
