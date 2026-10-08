# 商群　`def.quotient-group`
商群（Quotient Group）
layer 8 · 定义 · 代数结构 · 抽象代数

设 $N \trianglelefteq G$。全体左陪集 $\{\, gN : g \in G \,\}$ 记作 $G/N$，在上面定义

$$(g N) \cdot (g' N) := (g g') N.$$

正规性保证这个定义与代表元的选取无关，于是 $G/N$ 成为一个群，叫**商群**。

自然映射 $\pi : G \to G/N$，$g \mapsto gN$，是满同态。

## 为什么成立（入边，证明在 proofs/）
- `def.normal-subgroup` 正规子群：用到了定义 正规子群　proofs/def-dep.quotient-group-normal.md
- `def.quotient-set` 商集与等价类：用到了定义 商集与等价类　proofs/def-dep.quotgroup-quotientset.md
- `def.normal-subgroup` 正规子群：用到了定义 正规子群　proofs/def-dep.quotgroup-normal.md

## 它能推出什么 / 谁在用它
- 被 `thm.first-iso` 第一同构定理（Noether） 用
- 被 `thm.first-iso` 第一同构定理（Noether） 用

> 说明见 `notes/def.quotient-group.md`
