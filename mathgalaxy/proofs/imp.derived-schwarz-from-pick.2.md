# Schwarz–Pick 取 $z_{0} = 0$、$f(0) = 0$ 就是 Schwarz 引理
`imp.derived-schwarz-from-pick` · 推出 · strong 边 · 根 `../`

`thm.schwarz-pick` Schwarz–Pick 定理 → `lem.schwarz` Schwarz 引理

**等号情形。** Pick 说「某个 $z \ne z_{0}$ 或导数处取等号 $\iff$ $f$ 是 $\mathbb{D}$ 的分式线性自同构」。而固定原点的分式线性自同构只有 $\varphi_{0} \equiv 0$ 这一族退化情形可用，即 $z \mapsto e^{i\theta} z$：代入 $\varphi_{a}(z) = (z-a)/(1-\bar a z)$ 取 $a = 0$ 得 $\varphi_{0}(z) = z$，再乘上单位模常数。故等号成立 $\iff$ $f$ 是旋转 —— 正是引理的 (3)。$\blacksquare$

> 黑边 `imp.schwarz-pick` 走反方向（Schwarz 引理 $+$ 圆盘自同构 $\implies$ Pick）。两条并存：一条是证明路线，一条记录「引理只是 Pick 在原点处的那一格」。
