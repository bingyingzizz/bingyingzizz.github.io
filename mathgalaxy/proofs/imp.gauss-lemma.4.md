# imp.gauss-lemma
`imp.gauss-lemma` · 推出 · strong 边 · 根 `../`

`def.exponential-map` 指数映射 + `def.geodesic` 测地线 → `lem.gauss-lemma` Gauss 引理

正交部分用上面同一套计算（把 $v,w^{\perp}$ 张成的平面当成 $\rho\theta$ 平面）得 $\langle (\mathrm{d}\exp_{p})_{v}(v),(\mathrm{d}\exp_{p})_{v}(w^{\perp})\rangle = 0$。

径向部分：$t\mapsto\exp_{p}((1+t)v) = \gamma_{v}(1+t)$ 是单位速度测地线的重参数化，故 $(\mathrm{d}\exp_{p})_{v}(v) = \dot\gamma_{v}(1)$，长度是 $|v|$，于是 $(\mathrm{d}\exp_{p})_{v}(\lambda v) = \lambda\dot\gamma_{v}(1)$ 给出 $\lambda|v|^{2}$。

两部分相加：
$$\langle (\mathrm{d}\exp_{p})_{v}(v),(\mathrm{d}\exp_{p})_{v}(w)\rangle = \lambda|v|^{2}+0 = \langle v,\,\lambda v+w^{\perp}\rangle .$$
这正是 Gauss 引理。
**$\sqrt G$ 的展开。** $G = |\partial_{\theta}|^{2}$。

> 续见 proofs/imp.gauss-lemma.5.md
