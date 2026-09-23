# 链　`def.chain`
链 / 反链（Chain / Antichain）
layer 6 · 定义 · 序结构 · 序理论

设 $(P, \preceq )$ 是偏序集，$C \subseteq P$。

**$C$ 是链**（也叫全序子集），当且仅当 $C$ 中任意两个元素都可比：

$$\forall x, y \in C ( x \preceq y \vee  y \preceq x )$$

**$C$ 是反链**，当且仅当 $C$ 中任意两个不同元素都不可比。

约定：$\emptyset$ 与单点集都算链。

## 为什么成立（入边，证明在 proofs/）
- `def.poset` 偏序集：用到了定义 偏序集　proofs/def-link.chain-poset.md
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-chain.md

## 它能推出什么 / 谁在用它
- 被 `def.finchar` 有限特征 用
- 被 `lem.zorn` 佐恩引理 用
- 被 `thm.hausdorff` Hausdorff 极大原理 用

refs: Kunen, Set Theory, I.11

## 说明
「链」这个词是佐恩引理、Hausdorff 极大原理的中心概念——它们说的都是「链能长到多大」。
