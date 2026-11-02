# imp.liouville
`imp.liouville` · 推出 · strong 边 · 根 `../`

`def.geodesic-curvature` 测地曲率 + `prop.christoffel-frame` 标架下的联络系数 → `thm.liouville-formula` Liouville 公式

由 $\nabla e_{1} = -\omega^{1}_{2}\otimes e_{2}$、$\nabla e_{2} = \omega^{1}_{2}\otimes e_{1}$ 得
$$\nabla_{\dot\gamma}\dot\gamma = \left(-\sin\theta\,\frac{\mathrm{d}\theta}{\mathrm{d}s}-\cos\theta\,\omega^{1}_{2}(\dot\gamma)\right)e_{1}+\left(\cos\theta\,\frac{\mathrm{d}\theta}{\mathrm{d}s}-\sin\theta\,\omega^{1}_{2}(\dot\gamma)\right)e_{2}.$$
与 $n\times\dot\gamma$ 作内积，两组交叉项抵消、平方项各给 $1$：
$$k_{g} = \langle \nabla_{\dot\gamma}\dot\gamma,\,n\times\dot\gamma\rangle = \frac{\mathrm{d}\theta}{\mathrm{d}s}-\omega^{1}_{2}(\dot\gamma).$$
**第二步：代入 $\omega^{1}_{2}$。** 由「标架下的联络系数」那一条，
$$\omega^{1}

> 续见 proofs/imp.liouville.3.md
