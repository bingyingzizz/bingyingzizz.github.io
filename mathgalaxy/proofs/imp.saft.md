# 保极限 $\implies$ 有左伴随
`imp.saft` · 推出 · strong 边 · 根 `../`

`def.limit` 极限 + `def.comma-category` 逗号范畴 → `thm.saft` 伴随函子定理

设 $\mathcal{D}$ 小且完备，$G : \mathcal{D} \to \mathcal{C}$ 保极限。要造 $F \dashv G$。

**构造。** 固定 $X \in \mathcal{C}$，考虑逗号范畴 $X \downarrow G$（对象是 $f : X \to G(Y)$）。它由 $\mathcal{D}$ 的一个小图指标化，而 $\mathcal{D}$ 完备，所以下面这个极限存在：

$$F(X) := \varprojlim_{(Y, f) \in (X \downarrow G)} Y$$

**单位。** 投影给出 $\pi_{(Y,f)} : F(X) \to Y$。特别地取 $(Y,f) = (G(Y), \cdot)$ 这一类里的项 —— 更直接地，把 $G$ 作用上去并用 $G$ 保极限：

$$G(F(X)) = G\Bigl(\varprojlim_{(Y,f)} Y\Bigr) \cong \varprojlim_{(Y,f)} G(Y)$$

> 续见 proofs/imp.saft.2.md
