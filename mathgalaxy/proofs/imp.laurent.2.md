# 环域上的 Cauchy 积分公式 + 两个几何级数 $\implies$ Laurent 展开
`imp.laurent` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 + `thm.cauchy-goursat` Cauchy–Goursat 积分定理 → `thm.laurent` Laurent 展开定理

得 $\sum_{n \ge 0} c_n (z - a)^n$，其中 $c_n = \dfrac{1}{2\pi i}\oint_{|\zeta - a| = \rho_2}\dfrac{f(\zeta)}{(\zeta - a)^{n+1}}\mathrm{d}\zeta$。

**内圆那一项：负幂次。** 在 $|\zeta - a| = \rho_1$ 上 $|\zeta - a| < |z - a|$，这次要按 $\zeta - a$ 展开：

$$-\frac{1}{\zeta - z} = \frac{1}{z - \zeta} = \frac{1}{z - a}\cdot\frac{1}{1 - \frac{\zeta - a}{z - a}} = \sum_{n=0}^{\infty}\frac{(\zeta - a)^n}{(z - a)^{n+1}},$$

代入后把 $\dfrac{1}{(z - a)^{n+1}}$ 提到积分外面、把 $n + 1$ 改写成 $-m$（$m \le -1$），就得到负幂次项，其系数同样是一个沿内圆的积分。

> 续见 proofs/imp.laurent.3.md
