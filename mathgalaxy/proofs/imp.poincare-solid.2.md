# 6-函子 + $f^!R=\omega[d]$ $\implies$ Serre 对偶
`imp.poincare-solid` · 推出 · strong 边 · 根 `../`

`thm.smooth-duality` 光滑映射的对偶复形 + `def.six-functors` 6-函子形式 → `thm.poincare-solid` 固态 Serre 对偶

**② 迹映射。** 由伴随 $f_! \dashv f^!$，余单位给出 $f_! f^! R \to R$，即
$$\operatorname{tr} : f_!\, \omega[d] \longrightarrow R.$$
由 ① 与投影公式（`thm.coherent-duality` ②），$f_! \omega[d] \cong \omega \otimes^L_R f_! \mathcal{O}_X[d]$ 是可逆 $R$-模，故 $\operatorname{tr}$ 是 $R$-模的满射，其核是有限生成投射。

> 续见 proofs/imp.poincare-solid.3.md
