# 6-函子 + $f^!R=\omega[d]$ $\implies$ Serre 对偶
`imp.poincare-solid` · 推出 · strong 边 · 根 `../`

`thm.smooth-duality` 光滑映射的对偶复形 + `def.six-functors` 6-函子形式 → `thm.poincare-solid` 固态 Serre 对偶

**③ Verdier 对偶。** 对 $C \in D(\mathcal{O}_X)$、$M \in D(R)$，由伴随性
$$f_\ast \operatorname{RHom}_{\mathcal{O}_X}(C, f^! M) \cong \operatorname{RHom}_R(f_! C, M).$$
取 $M = R$、$f^! R = \omega[d]$、$f_\ast = R\Gamma(X,-)$，得
$$\operatorname{RHom}_{\mathcal{O}_X}(C, \omega)[d] \cong \operatorname{RHom}_R(f_! C, R)$$
（同调意义下），即 $f_!$ 的左伴随与 $f^!$ 在紧对象上互为转置（Verdier 对偶）。

> 续见 proofs/imp.poincare-solid.4.md
