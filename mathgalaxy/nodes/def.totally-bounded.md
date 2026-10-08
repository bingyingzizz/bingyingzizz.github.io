# 全有界　`def.totally-bounded`
全有界 / 预紧（Totally Bounded）
layer 13 · 定义 · 度量空间 · 拓扑学

距离空间 (X, d) **全有界**（也叫**预紧**），当且仅当对每个 $\varepsilon > 0$ 都存在**有限的 $\varepsilon$网**：

$$\forall\varepsilon > 0, \exists n\text{ 与} x_1, \ldots , x_n \in X : X = \bigcup_{i=1}^{n} B(x_i, \varepsilon)$$

等价说法：对每个 $\varepsilon > 0$，$X$ 都能被**有限个**半径 $\varepsilon$ 的开球盖住。

## 为什么成立（入边，证明在 proofs/）
- `def.sequentially-compact` 列紧：列紧 $\implies$ 全有界　proofs/imp.seqcompact-totbdd.md
- `def.compact` 紧：紧 $\implies$ 全有界　proofs/imp.compact-totbdd.md
- `def.metric-space` 距离空间：用到了定义 距离空间　proofs/def-dep.metric-totally-bounded.md

## 它能推出什么 / 谁在用它
- ⇒ `def.sequentially-compact` 列紧
- 被 `thm.metric-compact-equiv` 紧的三个等价刻画 用
- 被 `prop.subset-compact-equiv` 子集的紧性刻画 用

refs: Munkres, Topology, §43

> 说明见 `notes/def.totally-bounded.md`
