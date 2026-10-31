# 卡里化归为自治 ODE $\implies$ 局部流存在唯一且光滑
`imp.mf2-flow-local` · 推出 · strong 边 · 根 `../`

`def.vector-field` 向量场 + `def.manifold-chart` 图卡 → `thm.flow-local` 局部流

**解对初值光滑。** 同一套 Picard 迭代给出 $\Phi(t,y_{1}) := y(t)$ 对 $(t,y_{1})$ 的各阶偏导数的收敛性（$f$ 光滑），于是 $\Phi$ 光滑；令 $\varphi_{t} := x^{-1}\circ\Phi_{t}\circ x$，得 $(t,q) \mapsto \varphi_{t}(q)$ 光滑（在 $x^{-1}B(y_{0},r/2)$ 上）。

**单参数群。** 固定 $s$，两条曲线

$$\tau \mapsto \Phi(s+\tau, y_{1}),\qquad \tau \mapsto \Phi\bigl(\tau, \Phi(s,y_{1})\bigr)$$

在 $\tau = 0$ 处同值（都是 $\Phi(s,y_{1})$）、同导数（都是 $f$），由唯一性在公共定义区间上相等。共轭回 $M$ 得 $\varphi_{s+t} = \varphi_{s}\circ\varphi_{t}$（限制在 $|s|,|t|,|s+t|<\varepsilon$ 且中间点落在 $U$ 内的范围）。

> 续见 proofs/imp.mf2-flow-local.3.md
