# 范畴　`def.category`
范畴（Category）
layer 7 · 定义 · 范畴与图 · 范畴论

一个**范畴**是一个六元组

$$( \mathcal{O}, M, s, t, \circ, i )$$

其中 $(\mathcal{O}, M, s, t)$ 是一个**图**：$\mathcal{O}$ 是**对象**，$M$ 是**态射**，$s, t : M \to \mathcal{O}$ 给出每条态射的**源**与**靶**，记 $f : X \to Y$ 表示 $s(f) = X$、$t(f) = Y$。此外还有两个映射：

**复合** $\circ$ 定义在可复合的态射对上。记

$$M \times_{s,t} M = \{ (f, g) \in M \times M : s(f) = t(g) \}$$
> 陈述续见 `nodes/def.category.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.graph` 图：用到了定义 图　proofs/def-dep.graph-category.md
- `thm.product` 笛卡尔积存在：用到了定义 笛卡尔积存在　proofs/def-dep.product-category.md
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-category.md

## 它能推出什么 / 谁在用它
- 被 `def.section-retraction` 截面与收缩 用
- 被 `def.functor` 函子 用
- 被 `def.natural-transformation` 自然变换 用

> 说明见 `notes/def.category.md`

- …另有出边，续页见 `nodes/def.category.3.md`
