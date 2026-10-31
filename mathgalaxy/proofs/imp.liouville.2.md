# imp.liouville
`imp.liouville` · 推出 · strong 边 · 根 `../`

`def.geodesic-curvature` 测地曲率 + `prop.christoffel-frame` 标架下的联络系数 → `thm.liouville-formula` Liouville 公式

gamma$ 作内积，两组交叉项抵消、平方项各给 $1$：
$$k_{g} = \langle \nabla_{\dot\gamma}\dot\gamma,\,n\times\dot\gamma\rangle = \frac{\mathrm{d}\theta}{\mathrm{d}s}-\omega^{1}_{2}(\dot\gamma).$$
**第二步：代入 $\omega^{1}_{2}$。** 由「标架下的联络系数」那一条，
$$\omega^{1}_{2} = \frac{(\ln E)_{v}}{2\sqrt G}\,\omega^{1}-\frac{(\ln G)_{u}}{2\sqrt E}\,\omega^{2},$$
而 $\omega^{1}(\dot\gamma) = \cos\theta$、$\omega^{2}(\dot\gamma) = \sin\theta$（因为 $\dot\gamma$ 在这组单位正交余标架下的分量就是 $\cos\theta,\sin\theta$）。所以
$$\omega^{1}_{2}(\dot\gamma) = \frac{(\ln E)_{v}}{2\sqrt G}\cos\theta-\frac{(\ln G)_{u}}{2\sqrt E}\sin\theta ,$$
代回第一步即得
$$k_{g}(\gamma) 

> 续见 proofs/imp.liouville.3.md
