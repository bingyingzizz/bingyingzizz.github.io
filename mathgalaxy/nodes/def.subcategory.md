# 子范畴　`def.subcategory`
子范畴与满子范畴（Subcategory）
layer 8 · 定义 · 范畴与图 · 范畴论

范畴 $\mathcal{C}$ 的**子范畴** $\mathcal{C}'$ 由以下数据组成：

1. 对象的一个子类 $\operatorname{Ob}(\mathcal{C}') \subseteq \operatorname{Ob}(\mathcal{C})$；
2. 对每对 $X, Y \in \mathcal{C}'$，一个子集 $\operatorname{Hom}_{\mathcal{C}'}(X, Y) \subseteq \operatorname{Hom}_{\mathcal{C}}(X, Y)$；

要求这些态射对复合封闭、且包含每个对象的恒等态射。（$X, Y$ 之间的全部态射都取上时叫**满子范畴**。）

## 为什么成立（入边，证明在 proofs/）
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.subcategory-category.md

> 说明见 `notes/def.subcategory.md`
