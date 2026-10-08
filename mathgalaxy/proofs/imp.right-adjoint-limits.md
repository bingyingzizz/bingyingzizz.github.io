# 伴随 $\implies$ 右伴随保极限
`imp.right-adjoint-limits` · 推出 · strong 边 · 根 `../`

`def.adjoint` 伴随函子 + `def.limit` 极限 → `thm.right-adjoint-preserves-limits` 右伴随保极限

设 $F \dashv G$，$D : I \to \mathcal{D}$ 有极限。对任意 $X \in \mathcal{C}$，把伴随的同构一路用下去：

$$\operatorname{Hom}_{\mathcal{C}}\bigl(X,\ G(\lim D)\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{D}}\bigl(F(X),\ \lim D\bigr)$$

再用 $\lim D$ 的泛性质（锥与射入极限的态射一一对应）：

$$\operatorname{Hom}_{\mathcal{D}}\bigl(F(X),\ \lim D\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{D}^{I}}\bigl(\Delta F(X),\ D\bigr) \;\cong\; \varprojlim_{i} \operatorname{Hom}_{\mathcal{D}}\bigl(F(X),\ D(i)\bigr)$$

把最后一个同构的每一项再用一次伴随：

> 续见 proofs/imp.right-adjoint-limits.2.md
