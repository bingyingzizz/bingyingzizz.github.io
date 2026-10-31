# 伴随 $\implies$ 右伴随保极限
`imp.right-adjoint-limits` · 推出 · strong 边 · 根 `../`

`def.adjoint` 伴随函子 + `def.limit` 极限 → `thm.right-adjoint-preserves-limits` 右伴随保极限

$$\varprojlim_{i} \operatorname{Hom}_{\mathcal{D}}(F(X), D(i)) \;\cong\; \varprojlim_{i} \operatorname{Hom}_{\mathcal{C}}\bigl(X,\ G D(i)\bigr) \;\cong\; \operatorname{Hom}_{\mathcal{C}}\bigl(X,\ \lim (G \circ D)\bigr)$$

于是 $\operatorname{Hom}_{\mathcal{C}}(-, G(\lim D))$ 与 $\operatorname{Hom}_{\mathcal{C}}(-, \lim (G \circ D))$ 是同一个函子的两个表示；由米田引理（表示对象在同构意义下唯一），

$$G(\lim D) \;\cong\; \lim (G \circ D)$$

∎。对偶地左伴随保余极限。

> 整个证明只用了两样东西：**伴随的同构**与**极限的泛性质**。这就是为什么这条定理几乎不需要任何额外假设。
