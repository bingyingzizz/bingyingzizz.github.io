# 正规子群　`def.normal-subgroup`
正规子群与陪集（Normal Subgroup）
layer 7 · 定义 · 代数结构 · 抽象代数

设 $H \le G$，$g \in G$。**左陪集**与**右陪集**分别是

$$gH := \{\, gh : h \in H \,\}, \qquad Hg := \{\, hg : h \in H \,\}.$$

称 $H$ 是 $G$ 的**正规子群**（记 $H \trianglelefteq G$），如果对一切 $g \in G$ 有 $gH = Hg$，等价地 $gHg^{-1} = H$。

## 为什么成立（入边，证明在 proofs/）
- `def.group` 群：用到了定义 群　proofs/def-dep.normal-group.md

## 它能推出什么 / 谁在用它
- 被 `thm.first-iso` 第一同构定理（Noether） 用
- 被 `def.quotient-group` 商群 用
- 被 `def.quotient-group` 商群 用
- 被 `def.group-hom` 群同态、核与像 用

> 说明见 `notes/def.normal-subgroup.md`
