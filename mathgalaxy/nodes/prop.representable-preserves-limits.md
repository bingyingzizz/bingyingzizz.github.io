# 可表函子保所有极限　`prop.representable-preserves-limits`
可表函子保所有极限
layer 13 · 命题 · 预层与米田 · 范畴论

若 $F : \mathcal{C} \to \mathbf{Set}$ **可表**，即 $F \cong \operatorname{Hom}_{\mathcal{C}}(X, -)$，则 $F$ **保所有极限**：对任何图 $D : I \to \mathcal{C}$（只要 $\lim D$ 存在），

$$\operatorname{Hom}_{\mathcal{C}}\bigl(X,\ \lim D\bigr) \;\cong\; \lim \operatorname{Hom}_{\mathcal{C}}\bigl(X,\ D(-)\bigr).$$

## 为什么成立（入边，证明在 proofs/）
- `def.limit` 极限：用到了定义 极限　proofs/def-dep.replim-limit.md
- `def.representable` 表示函子：用到了定义 表示函子　proofs/def-dep.replim-representable.md
- `def.presheaf-cat` 预层范畴：用到了定义 预层范畴　proofs/def-dep.replim-functorcat.md

> 说明见 `notes/prop.representable-preserves-limits.md`
