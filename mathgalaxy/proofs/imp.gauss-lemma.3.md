# imp.gauss-lemma
`imp.gauss-lemma` · 推出 · strong 边 · 根 `../`

`def.exponential-map` 指数映射 + `def.geodesic` 测地线 → `lem.gauss-lemma` Gauss 引理

p_{p})_{v}(v),(\mathrm{d}\exp_{p})_{v}(w^{\perp})\rangle = 0$。径向部分：$t\mapsto\exp_{p}((1+t)v) = \gamma_{v}(1+t)$ 是单位速度测地线的重参数化，故 $(\mathrm{d}\exp_{p})_{v}(v) = \dot\gamma_{v}(1)$，长度是 $|v|$，于是 $(\mathrm{d}\exp_{p})_{v}(\lambda v) = \lambda\dot\gamma_{v}(1)$ 给出 $\lambda|v|^{2}$。两部分相加：
$$\langle (\mathrm{d}\exp_{p})_{v}(v),(\mathrm{d}\exp_{p})_{v}(w)\rangle = \lambda|v|^{2}+0 = \langle v,\,\lambda v+w^{\perp}\rangle .$$
这正是 Gauss 引理。
**$\sqrt G$ 的展开。** $G = |\partial_{\theta}|^{2}$。$(-\rho,\theta+\pi)$ 与 $(\rho,\theta)$ 是同一点，故 $G$ 在 $\rho$ 方向上是偶的（$\theta$ 上差 $\pi$），Taylor 展开只有 $\rho$ 的偶次项：$G = \rho^{2}+c_{4}\rho^{4}+O(\rho^{6})

> 续见 proofs/imp.gauss-lemma.4.md
