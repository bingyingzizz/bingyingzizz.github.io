# imp.representable-preserves-limits
`imp.representable-preserves-limits` · 推出 · strong 边 · 根 `../`

`def.representable` 表示函子 + `def.limit` 极限 + `def.presheaf-cat` 预层范畴 + `def.category-of-sets` 集合范畴 → `prop.representable-preserves-limits` 可表函子保所有极限

**证明。** 先证 $h^{X} = \operatorname{Hom}(X, -)$ 保极限。取 $D : I \to \mathcal{C}$，链式：

$$\operatorname{Hom}_{\mathcal{C}}\bigl(X,\ \lim D\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{C}^{I}}\bigl(\underline{\{0\}},\ h^{X} \circ D\bigr) \;\cong\; \lim \bigl(h^{X} \circ D\bigr).$$

第一式是**极限的定义**（$\lim D$ 表示锥函子：$\operatorname{Hom}(\Delta Y, D) \cong \operatorname{Hom}(Y, \lim D)$，取 $Y = X$）；

第二式是「函子范畴里的极限逐点算」。

> 续见 proofs/imp.representable-preserves-limits.2.md
