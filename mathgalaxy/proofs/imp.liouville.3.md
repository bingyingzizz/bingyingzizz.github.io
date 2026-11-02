# imp.liouville
`imp.liouville` · 推出 · strong 边 · 根 `../`

`def.geodesic-curvature` 测地曲率 + `prop.christoffel-frame` 标架下的联络系数 → `thm.liouville-formula` Liouville 公式

_{2} = \frac{(\ln E)_{v}}{2\sqrt G}\,\omega^{1}-\frac{(\ln G)_{u}}{2\sqrt E}\,\omega^{2},$$
而 $\omega^{1}(\dot\gamma) = \cos\theta$、$\omega^{2}(\dot\gamma) = \sin\theta$（因为 $\dot\gamma$ 在这组单位正交余标架下的分量就是 $\cos\theta,\sin\theta$）。所以
$$\omega^{1}_{2}(\dot\gamma) = \frac{(\ln E)_{v}}{2\sqrt G}\cos\theta-\frac{(\ln G)_{u}}{2\sqrt E}\sin\theta ,$$
代回第一步即得
$$k_{g}(\gamma) = \frac{\mathrm{d}\theta}{\mathrm{d}s}-\frac{(\ln E)_{v}}{2\sqrt G}\cos\theta+\frac{(\ln G)_{u}}{2\sqrt E}\sin\theta .$$
**第三步：测地线的判据。** 由 $\gamma$ 是测地线 $\iff k_{g}\equiv0$，上式为零就是测地线在这组坐标下的方程 —— 一个关于 $\theta$ 的一阶方程，比二阶的测地线方程组好用了整整一个量级

> 续见 proofs/imp.liouville.4.md
