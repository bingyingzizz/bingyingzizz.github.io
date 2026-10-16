# 幂集公理　`ax.power`
幂集公理（Axiom of Power Set）
layer 2 · 公理 · ZFC 公理系统 · 集合论
[在星图里打开](../#n=ax.power)　·　[节点索引](../index.md)

一个集合的所有子集构成一个集合：

$$\forall A \exists P \forall x [ x \in P \leftrightarrow  x \subseteq A ]$$

记作 $\mathcal{P}(A)$（或 P(A)）。它把「$A$ 的所有子集」这件事本身变成一个集合 —— 幂集是「造更大的集合」的基本手段。

## 为什么成立（入边，证明在 proofs/）
- [`def.subset`](../nodes/def.subset.md) 子集：用到了定义 子集　[proofs/def-link.power-subset.md](../proofs/def-link.power-subset.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.omega`](../nodes/thm.omega.md) 自然数集存在

refs: Kunen, Set Theory, I.3

- …另有出边，续页见 [nodes/ax.power.2.md](./ax.power.2.md)

## 说明
它是笛卡尔积 $A \times B$ 存在性的关键：{{a},{a,b}} 落在 $\mathcal{P}(\mathcal{P}(A \cup B))$ 里。

引用：`ax.power`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
