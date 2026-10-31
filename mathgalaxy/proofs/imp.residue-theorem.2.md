# 挖洞 + 多连通 Cauchy–Goursat $\implies$ 留数定理
`imp.residue-theorem` · 推出 · strong 边 · 根 `../`

`thm.cauchy-goursat` Cauchy–Goursat 积分定理 + `def.residue` 留数 → `thm.residue` 留数定理

即 $\displaystyle\oint_{\partial\Omega} f\,\mathrm{d}z = \sum_{k=1}^{n}\oint_{|\zeta - z_k| = \varepsilon} f\,\mathrm{d}\zeta$。

**认出留数。** 由留数的定义，右端每一项等于 $2\pi i\operatorname{Res}(f, z_k)$，且与 $\varepsilon$ 无关。故

$$\oint_{\partial\Omega} f\,\mathrm{d}z = 2\pi i\sum_{k=1}^{n}\operatorname{Res}(f, z_k).$$

**多连通区域的情形同理**：只是外边界换成若干条外圈之和，逐条用上面的论证。$\blacksquare$
