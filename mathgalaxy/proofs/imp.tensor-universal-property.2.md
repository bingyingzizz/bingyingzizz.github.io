# 张量积的构造 $\implies$ 万有性质
`imp.tensor-universal-property` · 推出 · strong 边 · 根 `../`

`def.tensor-product-vs` 张量积 + `def.quotient-vs` 商空间 → `thm.tensor-universal-property` 张量积的万有性质

**唯一性**：任何满足 $\widetilde B(v \otimes w) = B(v, w)$ 的线性映射在可分解张量上取值已定；而可分解张量张成 $V \otimes W$，故线性映射被取值唯一确定。

**反向**：给定线性 $\widetilde B$，则 $B := \widetilde B \circ \otimes$ 是双线性的（因为 $\otimes$ 双线性）。

两个方向互逆且自然，故 $\operatorname{Hom}(V \otimes W, U) \cong \operatorname{Bil}(V, W; U)$。∎

> 结尾的「自然」两字是**伴随**的入口：正因为同构对 $U$（以及 $V, W$）自然，张量积才是一个真正的函子层面的构造，而不仅是「某个具体的商空间」。
