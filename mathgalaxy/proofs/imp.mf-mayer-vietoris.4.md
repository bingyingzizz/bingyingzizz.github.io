# 形式的短正合列取上同调 $\implies$ 长正合列
`imp.mf-mayer-vietoris` · 推出 · strong 边 · 根 `../`

`def.de-rham-complex` de Rham 上同调 → `thm.mayer-vietoris` Mayer–Vietoris 序列

 两式在 $W$ 上相等（$\mathrm{d}\omega = 0$），故 $\Omega$ 是 $M$ 上整体闭形式；换代表元或换单位分解只差 $\mathrm{d}$-恰当项，故 $\delta$ 良定义。
**正合性。** 三个位置逐一验证：$\ker s^{*} = \operatorname{im} r^{*}$（若 $\omega_{U}|_{W} - \omega_{V}|_{W} = \mathrm{d}\gamma$，取 $\omega = \rho_{U}\omega_{U} + \rho_{V}\omega_{V} + \mathrm{d}\rho_{U}\wedge\gamma$，则 $\mathrm{d}\omega = 0$ 且 $\omega|_{U} - \omega_{U} = -\mathrm{d}(\rho_{V}\gamma)$、$\omega|_{V} - \omega_{V} = \mathrm{d}(\rho_{U}\gamma)$）；$\operatorname{im} s^{*} = \ker\delta$（若 $\delta[\omega] = \mathrm{d}\Psi$，取 $\alpha = \rho_{V}\omega - \Psi$、$\beta = -\rho_{U}\omega - \Psi$，则 $\alpha, \beta$

> 续见 proofs/imp.mf-mayer-vietoris.5.md
