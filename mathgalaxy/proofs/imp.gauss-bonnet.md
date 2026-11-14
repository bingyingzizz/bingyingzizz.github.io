# imp.gauss-bonnet
`imp.gauss-bonnet` · 推出 · strong 边 · 根 `../`

`thm.liouville-formula` Liouville 公式 + `def.geodesic-curvature` 测地曲率 + `def.gauss-curvature` Gauss 曲率 + `thm.stokes` Stokes 定理 → `thm.gauss-bonnet` Gauss–Bonnet 定理

**第一步（局部版）：简单闭曲线围成的区域。** 设 $D$ 由分段光滑简单闭曲线 $\partial D$ 围成，取正交单位标架与联络形式 $\omega^{1}_{2}$。

由刘维尔公式（或等价地 $k_{g} = \frac{\mathrm{d}\theta}{\mathrm{d}s}-\omega^{1}_{2}(\dot\gamma)$），
$$\int_{\partial D}k_{g}\,\mathrm{d}s = \int_{\partial D}\mathrm{d}\theta-\int_{\partial D}\omega^{1}_{2} = 2\pi-\sum_{i}(\pi-\alpha_{i})-\int_{D}\mathrm{d}\omega^{1}_{2}.$$
第一项是切线转角定理：简单闭曲线的切方向恰好转一整圈，$\int\mathrm{d}\theta + \sum_{i}(\pi - \alpha_{i}) = 2\pi$（$\alpha_{i}$ 是顶点处的内角：顶点处的转角要用外角 $\pi - \alpha_{i}$ 补齐，分段光滑时也成立）。

第二项用斯托克斯公式。

> 续见 proofs/imp.gauss-bonnet.2.md
