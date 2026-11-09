# 度量空间的连续　`def.metric-continuity`
度量空间之间的连续性（$\varepsilon$-$\delta$）
layer 15 · 定义 · 度量空间 · 拓扑学+数学分析
[在星图里打开](../#n=def.metric-continuity)　·　[节点索引](../index.md)

设 $(X, d)$、$(Y, \rho)$ 是度量空间，$f : X \to Y$，$x_0 \in X$。

称 $f$ 在 $x_0$ **连续**，若

$$\forall \varepsilon > 0\ \exists \delta > 0:\quad d(x, x_0) < \delta \implies \rho(f(x), f(x_0)) < \varepsilon .$$

称 $f$ 连续，若它在每点连续。等价地：每个开集 $V \subseteq Y$ 的原像 $f^{-1}(V)$ 是 $X$ 的开集。

## 它能推出什么 / 谁在用它
- ⇒ [`def.continuous-map`](../nodes/def.continuous-map.md) 连续映射

- …另有出边，续页见 [nodes/def.metric-continuity.3.md](./def.metric-continuity.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.metric-continuity.2.md](./def.metric-continuity.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 4；Munkres, Topology, Ch. 2

> 说明见 `notes/def.metric-continuity.md`

引用：`def.metric-continuity`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
