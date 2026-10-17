# 正规子群　`def.normal-subgroup`
正规子群与陪集（Normal Subgroup）
layer 7 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.normal-subgroup)　·　[节点索引](../index.md)

设 $H \le G$，$g \in G$。**左陪集**与**右陪集**分别是

$$gH := \{\, gh : h \in H \,\}, \qquad Hg := \{\, hg : h \in H \,\}.$$

称 $H$ 是 $G$ 的**正规子群**（记 $H \trianglelefteq G$），如果对一切 $g \in G$ 有 $gH = Hg$，等价地 $gHg^{-1} = H$。

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：用到了定义 群　[proofs/def-dep.normal-group.md](../proofs/def-dep.normal-group.md)

## 它能推出什么 / 谁在用它
- 被 [`def.simple-group`](../nodes/def.simple-group.md) 单群 用

- …另有出边，续页见 [nodes/def.normal-subgroup.2.md](./def.normal-subgroup.2.md)

refs: Lang, Algebra

> 说明见 `notes/def.normal-subgroup.md`

引用：`def.normal-subgroup`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
