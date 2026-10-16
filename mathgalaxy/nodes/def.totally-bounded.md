# 全有界　`def.totally-bounded`
全有界 / 预紧（Totally Bounded）
layer 14 · 定义 · 度量空间 · 拓扑学
[在星图里打开](../#n=def.totally-bounded)　·　[节点索引](../index.md)

距离空间 (X, d) **全有界**（也叫**预紧**），当且仅当对每个 $\varepsilon > 0$ 都存在**有限的 $\varepsilon$网**：

$$\forall\varepsilon > 0, \exists n\text{ 与} x_1, \ldots , x_n \in X : X = \bigcup_{i=1}^{n} B(x_i, \varepsilon)$$

等价说法：对每个 $\varepsilon > 0$，$X$ 都能被**有限个**半径 $\varepsilon$ 的开球盖住。

## 它能推出什么 / 谁在用它
- ⇒ [`def.sequentially-compact`](../nodes/def.sequentially-compact.md) 列紧

- …另有出边，续页见 [nodes/def.totally-bounded.3.md](./def.totally-bounded.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.totally-bounded.2.md](./def.totally-bounded.2.md)

refs: Munkres, Topology, §43

> 说明见 `notes/def.totally-bounded.md`

引用：`def.totally-bounded`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
