# 留数定理在 $f(\zeta)/(\zeta-z)$ 上就是 Cauchy 积分公式
`imp.derived-cif-from-residue` · 推出 · strong 边 · 根 `../`

`thm.residue` 留数定理 → `thm.cauchy-integral-formula` Cauchy 积分公式

$$\oint_{\partial\Omega} \frac{f(\zeta)}{\zeta - z}\,\mathrm{d}\zeta = 2\pi i\,\operatorname{Res}(g,z) = 2\pi i\, f(z),$$

即 $f(z) = \dfrac{1}{2\pi i}\oint_{\partial\Omega}\dfrac{f(\zeta)}{\zeta-z}\,\mathrm{d}\zeta$。留数定理的证明只用多连通 Cauchy–Goursat（挖洞）与留数的定义，不经过 Cauchy 积分公式，所以这是一条独立路线。$\blacksquare$

> 换句话说：Cauchy 积分公式是留数定理「只有一个一阶极点」的特例。两条路都合法，只是留数那条要多走一步 Laurent 系数。
