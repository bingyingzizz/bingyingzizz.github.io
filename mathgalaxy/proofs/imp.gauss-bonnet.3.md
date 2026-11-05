# imp.gauss-bonnet
`imp.gauss-bonnet` · 推出 · strong 边 · 根 `../`

`thm.liouville-formula` Liouville 公式 + `def.geodesic-curvature` 测地曲率 + `def.gauss-curvature` Gauss 曲率 → `thm.gauss-bonnet` Gauss–Bonnet 定理

\mathrm{d}\theta = 2\pi$ 换成「沿三角形边界的转角 = $2\pi-$ 外角和 = 内角和 $-\pi$」。）
把所有三角形相加：
- **边的项**：每条内部边被两个三角形各走一次、方向相反，$\int k_{g}$ 相消；边界边只走一次，留下 $\int_{\partial M}k_{g}$；
- **角的项**：内部顶点周围的内角合起来恰是 $2\pi$，每个内部顶点贡献 $2\pi$；**边界顶点**周围的内角合起来是 $\alpha_{v}$（分段光滑边界在该角点处的内角），全部边界顶点贡献 $\sum_{v\in\partial M}\alpha_{v}$。⚠️ 只有光滑边界才有 $\alpha_{v} = \pi$、才退化回 $\pi V_{b}$。
于是
$$\int_{M}K\,\mathrm{d}A+\int_{\partial M}k_{g}\,\mathrm{d}s = 2\pi V_{i}+\sum_{v\in\partial M}\alpha_{v}-\pi F .$$

> 续见 proofs/imp.gauss-bonnet.4.md
