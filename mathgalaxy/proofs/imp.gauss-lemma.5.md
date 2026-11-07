# imp.gauss-lemma
`imp.gauss-lemma` · 推出 · strong 边 · 根 `../`

`def.exponential-map` 指数映射 + `def.geodesic` 测地线 → `lem.gauss-lemma` Gauss 引理

由 $(\mathrm{d}\exp_{p})_{0}=\mathrm{id}$ 与法坐标下 $g_{ij}=\delta_{ij}+O(|x|^{2})$：点 $\exp_{p}(x)$（$x=\rho(\cos\theta\,e_{1}+\sin\theta\,e_{2})$）处的 $\partial_{\theta}$ 沿切向坐标向量 $\rho u_{\theta}$ 的方向（$u_{\theta}=(-\sin\theta,\cos\theta)$ 是单位向量），故 $G = \rho^{2}g_{\exp_{p}(x)}(u_{\theta},u_{\theta}) = \rho^{2}(1+O(\rho^{2})) = \rho^{2}+O(\rho^{4})$，写成展开即 $G = \rho^{2}+c_{4}\rho^{4}+O(\rho^{6})$，即 $\sqrt G = \rho+O(\rho^{3})$。

二次项系数为 $1$ 是因为 $(\mathrm{d}\exp_{p})_{0} = \mathrm{id}$：$\rho = 0$ 处的一阶行为就是欧氏的。

$\blacksquare$
