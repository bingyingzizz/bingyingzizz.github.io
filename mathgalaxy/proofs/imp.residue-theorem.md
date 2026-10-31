# 挖洞 + 多连通 Cauchy–Goursat $\implies$ 留数定理
`imp.residue-theorem` · 推出 · strong 边 · 根 `../`

`thm.cauchy-goursat` Cauchy–Goursat 积分定理 + `def.residue` 留数 → `thm.residue` 留数定理

**挖洞。** 取 $\varepsilon > 0$ 足够小，使闭圆盘 $\overline{D(z_k, \varepsilon)}$（$k = 1, \cdots, n$）两两不交、且都含在 $\Omega$ 内。令

$$\Omega_\varepsilon := \Omega \setminus \bigcup_{k=1}^{n}\overline{D(z_k, \varepsilon)}.$$

$\Omega_\varepsilon$ 是 $n$ 连通的，而 $f$ 在它上面全纯（挖掉的正是全部奇点）。

**用多连通 Cauchy–Goursat。** 把 $\Omega_\varepsilon$ 的外边界与 $n$ 个内圈用 $n$ 条割线连成一条闭曲线，在它上面积分为 $0$；割线各被走两次、方向相反互相抵消，于是

$$0 = \oint_{\partial\Omega_\varepsilon} f\,\mathrm{d}z = \oint_{\partial\Omega} f\,\mathrm{d}z - \sum_{k=1}^{n}\oint_{|\zeta - z_k| = \varepsilon} f\,\mathrm{d}\zeta,$$

> 续见 proofs/imp.residue-theorem.2.md
