# 紧　`def.compact`
紧空间（Compact Space）
layer 13 · 定义 · 度量空间 · 拓扑学

距离空间 (X, d) **紧**，当且仅当 $X$ 的每个**开覆盖**都有有限子覆盖：

$$\forall\{U_i\}_{i \in I} (\text{ 每个} U_i\text{ 开且} X = \bigcup_{i \in I} U_i ) \implies \exists i_1, \ldots , i_n : X = \bigcup_{k=1}^{n} U_{i_k}$$

## 为什么成立（入边，证明在 proofs/）
- `def.sequentially-compact` 列紧：列紧 $\implies$ 紧　proofs/imp.seqcompact-compact.md
- `def.metric-space` 距离空间：用到了定义 距离空间　proofs/def-dep.metric-compact.md

## 它能推出什么 / 谁在用它
- ⇒ `def.sequentially-compact` 列紧
- ⇒ `def.complete` 完备
- ⇒ `def.totally-bounded` 全有界
- 被 `thm.metric-compact-equiv` 紧的三个等价刻画 用
- 被 `prop.compact-subset-closed` 紧子集是闭的 用
- 被 `prop.subset-compact-equiv` 子集的紧性刻画 用
- ⇒ `prop.chaus-reflective` 紧 Haus 是反射子范畴

- …另有出边，续页见 `nodes/def.compact.2.md`

refs: Munkres, Topology, §26

> 说明见 `notes/def.compact.md`
