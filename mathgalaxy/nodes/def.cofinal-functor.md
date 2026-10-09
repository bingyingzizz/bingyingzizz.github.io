# 共尾函子　`def.cofinal-functor`
共尾函子（Cofinal Functor）
layer 13 · 定义 · 图与极限 · 范畴论

设 $F : J \to I$ 是函子。对 $i \in I$，记 $i \downarrow F$ 为逗号范畴，它的对象是 $\{\, f : i \to F(j) \,\}$（$j \in J$）。

称 $F$ 是**共尾的**（cofinal，也写作 **final**），如果对每个 $i \in I$：

$$i \downarrow F \quad \text{非空，且连通。}$$

## 为什么成立（入边，证明在 proofs/）
- `def.comma-category` 逗号范畴：用到了定义 逗号范畴　proofs/def-dep.cofinal-comma.md
- `def.connected-category` 连通范畴：用到了定义 连通范畴　proofs/def-dep.cofinal-connected.md
- `def.functor` 函子：用到了定义 函子　proofs/def-dep.cofinal-functor.md

## 它能推出什么 / 谁在用它
- 被 `thm.cofinal-colimit` 共尾函子不改变余极限 用
- 被 `prop.filtered-directed` 滤过范畴可换成有向集 用

> 说明见 `notes/def.cofinal-functor.md`
