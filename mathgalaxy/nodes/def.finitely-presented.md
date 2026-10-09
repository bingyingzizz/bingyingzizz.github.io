# 有限表现对象　`def.finitely-presented`
有限表现（紧）对象（Finitely Presented Object）
layer 13 · 定义 · 预层与米田 · 范畴论

对象 $X \in \mathcal{C}$ 叫**有限表现的**（也叫**紧的**，compact），如果可表函子

$$h^{X} = \operatorname{Hom}_{\mathcal{C}}(X, -)$$

**保滤过余极限**：对每个滤过图 $D$，$\operatorname{Hom}(X, \varinjlim D) \cong \varinjlim \operatorname{Hom}(X, D(-))$。

## 为什么成立（入边，证明在 proofs/）
- `def.filtered-category` 滤过范畴：用到了定义 滤过范畴　proofs/def-dep.finpres-filtered.md
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-dep.finpres-representable.md

> 说明见 `notes/def.finitely-presented.md`
