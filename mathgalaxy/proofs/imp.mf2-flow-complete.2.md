# 局部存在 $+$ 紧性 $\implies$ 有限端点必逃逸，紧流形上处处完备
`imp.mf2-flow-complete` · 推出 · strong 边 · 根 `../`

`def.flow` 流 + `thm.flow-local` 局部流 + `def.compact` 紧 → `thm.flow-complete` 流完备性

取 $t_{1}$ 使 $b_{q} - t_{1} < \varepsilon$，在 $\gamma(t_{1}) \in K$ 处用第 $i$ 个局部流把解延拓到 $b_{q} + (\varepsilon - (b_{q}-t_{1})) > b_{q}$ —— 与 $b_{q}$ 是极大右端点矛盾。

$a_{q}$ 一端把 $t$ 换成 $-t$ 同证。

**第 3 条（完备判据）。** 若所有端点都是无穷，则每点的积分曲线都在整个 $\mathbb{R}$ 上有定义，即 $\mathcal{W} = \mathbb{R}\times M$，$X$ 完备。

反之若某个 $b_{q} < +\infty$，则 $(b_{q},q) \notin \mathcal{W}$，故 $\mathcal{W} \ne \mathbb{R}\times M$，不完备。

**紧 $M$ 的推论。** 设 $M$ 紧而 $b_{q} < +\infty$。

在第 2 条里取 $K = M$（紧）：结论要求存在 $t_{2}$ 使 $\varphi_{t_{2}}(q) \notin M$，不可能 —— 矛盾。

故 $b_{q} = +\infty$；

同理 $a_{q} = -\infty$。

> 续见 proofs/imp.mf2-flow-complete.3.md
