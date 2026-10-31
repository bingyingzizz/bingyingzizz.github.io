# imp.liouville
`imp.liouville` · 推出 · strong 边 · 根 `../`

`def.geodesic-curvature` 测地曲率 + `prop.christoffel-frame` 标架下的联络系数 → `thm.liouville-formula` Liouville 公式

**第一步：曲线在正交标架里的绝对导数。** 取 $e_{1} = \partial_{u}/\sqrt E$、$e_{2} = \partial_{v}/\sqrt G$，写 $\dot\gamma = \cos\theta\,e_{1}+\sin\theta\,e_{2}$（$\theta$ 就是与 $u$ 线的夹角），于是 $n\times\dot\gamma = -\sin\theta\,e_{1}+\cos\theta\,e_{2}$。由 $\nabla e_{1} = -\omega^{1}_{2}\otimes e_{2}$、$\nabla e_{2} = \omega^{1}_{2}\otimes e_{1}$ 得
$$\nabla_{\dot\gamma}\dot\gamma = \left(-\sin\theta\,\frac{\mathrm{d}\theta}{\mathrm{d}s}-\cos\theta\,\omega^{1}_{2}(\dot\gamma)\right)e_{1}+\left(\cos\theta\,\frac{\mathrm{d}\theta}{\mathrm{d}s}-\sin\theta\,\omega^{1}_{2}(\dot\gamma)\right)e_{2}.$$
与 $n\times\dot\

> 续见 proofs/imp.liouville.2.md
