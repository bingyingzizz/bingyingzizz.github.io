# imp.gauss-bonnet
`imp.gauss-bonnet` · 推出 · strong 边 · 根 `../`

`thm.liouville-formula` 刘维尔公式 + `def.geodesic-curvature` 测地曲率 + `def.gauss-curvature` 高斯曲率 → `thm.gauss-bonnet` 高斯博内定理

**第一步（局部版）：简单闭曲线围成的区域。** 设 $D$ 由分段光滑简单闭曲线 $\partial D$ 围成，取正交单位标架与联络形式 $\omega^{1}_{2}$。由刘维尔公式（或等价地 $k_{g} = \frac{\mathrm{d}\theta}{\mathrm{d}s}-\omega^{1}_{2}(\dot\gamma)$），
$$\int_{\partial D}k_{g}\,\mathrm{d}s = \int_{\partial D}\mathrm{d}\theta-\int_{\partial D}\omega^{1}_{2} = 2\pi-\int_{D}\mathrm{d}\omega^{1}_{2}.$$
第一项是切线转角定理：简单闭曲线的切方向恰好转一整圈，$\int\mathrm{d}\theta = 2\pi$（分段光滑也一样，顶点处的外角补齐即可）。第二项用斯托克斯公式。再由高斯方程 $\mathrm{d}\omega^{1}_{2} = K\,\omega^{1}\wedge\omega^{2} = K\,\mathrm{d}A$ 得
$$\int_{\partial D}k_{g}\,\mathrm{d}s = 2\pi-\int_{D}K\,\mathrm{d}A,$$
移项即得
$$\int_{D}K\,

> 续见 proofs/imp.gauss-bonnet.2.md
