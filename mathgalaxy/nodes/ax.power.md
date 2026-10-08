# 幂集公理　`ax.power`
幂集公理（Axiom of Power Set）
layer 2 · 公理 · ZFC 公理系统 · 集合论

一个集合的所有子集构成一个集合：

$$\forall A \exists P \forall x [ x \in P \leftrightarrow  x \subseteq A ]$$

记作 $\mathcal{P}(A)$（或 P(A)）。它把「$A$ 的所有子集」这件事本身变成一个集合 —— 幂集是「造更大的集合」的基本手段。

## 为什么成立（入边，证明在 proofs/）
- `def.subset` 子集：用到了定义 子集　proofs/def-link.power-subset.md

## 它能推出什么 / 谁在用它
- ⇒ `thm.omega` 自然数集存在
- ⇒ `thm.product` 笛卡尔积存在
- 被 `def.pair` 有序对 用
- 被 `def.power-set` 幂集 𝒫(X) 用

refs: Kunen, Set Theory, I.3

## 说明
它是笛卡尔积 $A \times B$ 存在性的关键：{{a},{a,b}} 落在 $\mathcal{P}(\mathcal{P}(A \cup B))$ 里。
