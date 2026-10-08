# 微分定理 + 正则性 $\implies RN$ 导数的点态公式
`imp.rn-pointwise` · 推出 · strong 边 · 根 `../`

`thm.differentiation-general` 可缩族的微分定理 + `def.regular-measure` 正则 Borel 测度 + `lem.covering` 覆盖引理 → `thm.rn-pointwise` RN 导数的点态公式

设 $d\nu = d\lambda + f\cdot dm$（$\lambda \perp  m$），$\nu$ 正则。

**① 先算全变差。** 由全变差的性质，$d|\nu| = d|\lambda| + |f|\cdot dm$。既然 $\nu$ 正则，$|\nu |$ 正则，于是 $\lambda$ 与 $f\cdot dm$ 都正则；由「$g\cdot dm$ 正则 $\iff$ $g \in L^1_{loc}$」得 $f \in L^1_{loc}$。

**② 拆比值。**

$$\nu(E_r) / m(E_r) = \lambda(E_r) / m(E_r) + \frac{1}{m(E_r)} \int_{E_r} f\cdot dm$$

第二项由**可缩族的微分定理**趋于 $f(x)$（对 m-a.e. x）。所以只需证第一项趋于 0。

> 续见 proofs/imp.rn-pointwise.2.md
