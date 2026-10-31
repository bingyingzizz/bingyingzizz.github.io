# 卡里化归为自治 ODE $\implies$ 局部流存在唯一且光滑
`imp.mf2-flow-local` · 推出 · strong 边 · 根 `../`

`def.vector-field` 向量场 + `def.manifold-chart` 图卡 → `thm.flow-local` 局部流

**$\varphi_{t}$ 是局部微分同胚。** 取 $s = -t$ 得 $\varphi_{-t}\circ\varphi_{t} = \varphi_{0} = \operatorname{id}$，故 $\varphi_{t}$ 有光滑逆 $\varphi_{-t}$。

**极大流的拼接。** 每点附近都有局部流，两个局部流在公共点附近由唯一性重合；把这一点当作等价关系把局部解接起来，得到定义域极大的那一个 $\mathcal{W} \subseteq \mathbb{R}\times M$。∎

⭐ 全程只有一处用到流形结构：**在卡里做**。「流形上的 ODE」与「$\mathbb{R}^{n}$ 上的 ODE」在局部没有区别，区别只出现在**整体**行为（`thm.flow-complete`）。
