# imp.gauss-bonnet
`imp.gauss-bonnet` · 推出 · strong 边 · 根 `../`

`thm.liouville-formula` Liouville 公式 + `def.geodesic-curvature` 测地曲率 + `def.gauss-curvature` Gauss 曲率 + `thm.stokes` Stokes 定理 → `thm.gauss-bonnet` Gauss–Bonnet 定理

再由高斯方程 $\mathrm{d}\omega^{1}_{2} = K\,\omega^{1}\wedge\omega^{2} = K\,\mathrm{d}A$ 得
$$\int_{\partial D}k_{g}\,\mathrm{d}s = 2\pi-\sum_{i}(\pi-\alpha_{i})-\int_{D}K\,\mathrm{d}A,$$
移项即得
$$\int_{D}K\,\mathrm{d}A+\int_{\partial D}k_{g}\,\mathrm{d}s+\sum_{i}(\pi-\alpha_{i}) = 2\pi .$$
**第二步：三角剖分求和。** 把 $M$ 剖分成 $F$ 个三角形，$E$ 条边（内部 $E_{i}$、边界 $E_{b}$），$V$ 个顶点（内部 $V_{i}$、边界 $V_{b}$）。对每个三角形 $T$ 用局部版。三角形是三边都是测地线段时最简单；一般情形把局部版写成带内角 $\beta_{j}$ 的形式：
$$\int_{T}K\,\mathrm{d}A+\int_{\partial T}k_{g}\,\mathrm{d}s = \beta_{1}+\beta_{2}+\beta_{3}-\

> 续见 proofs/imp.gauss-bonnet.3.md
