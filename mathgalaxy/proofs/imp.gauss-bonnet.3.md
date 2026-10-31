# imp.gauss-bonnet
`imp.gauss-bonnet` · 推出 · strong 边 · 根 `../`

`thm.liouville-formula` 刘维尔公式 + `def.geodesic-curvature` 测地曲率 + `def.gauss-curvature` 高斯曲率 → `thm.gauss-bonnet` 高斯博内定理

点周围的内角合起来恰是 $2\pi$，每个内部顶点贡献 $2\pi$；边界顶点周围的内角合起来是 $\pi$，每个边界顶点贡献 $\pi$。
于是
$$\int_{M}K\,\mathrm{d}A+\int_{\partial M}k_{g}\,\mathrm{d}s = 2\pi V_{i}+\pi V_{b}-\pi F .$$
**第三步：把右端认成 $2\pi\chi$。** 每个三角形有三条边，内部边被数两次、边界边被数一次：$3F = 2E_{i}+E_{b}$，而 $E_{b} = V_{b}$（边界的每条边对应一段）。于是
$$E = E_{i}+E_{b} = \frac{3F-E_{b}}{2}+E_{b} = \frac{3F+V_{b}}{2},$$
$$2\pi\left(V-E+F\right) = 2\pi\left(V_{i}+V_{b}-\frac{3F+V_{b}}{2}+F\right) = 2\pi V_{i}+\pi V_{b}-\pi F .$$
两端相同，且 $V-E+F = \chi(M)$ 与剖分无关，故
$$\int_{M}K\,\mathrm{d}A+\int_{\partial M}k_{g}\,\mathrm{d}s = 2\pi\chi(M).$$
**第四步：闭曲面的特例与数值。** $

> 续见 proofs/imp.gauss-bonnet.4.md
