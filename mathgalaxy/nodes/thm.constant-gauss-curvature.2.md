# 常 Gauss 曲率曲面　`thm.constant-gauss-curvature`　·　续页（第 2 页）
[在星图里打开](../#n=thm.constant-gauss-curvature)　·　第 1 页 [nodes/thm.constant-gauss-curvature.md](./thm.constant-gauss-curvature.md)

## 陈述（续）
设 $\Sigma$ 的 Gauss 曲率 $K$ 为**常数**。在任一点取**测地极坐标** $(r, \theta)$，则

$$g = \mathrm{d}r^{2} + f(r,\theta)^{2}\,\mathrm{d}\theta^{2} ,$$
由 Cartan 结构方程 $\mathrm{d}\omega^{2} = K\,\omega^{1}\wedge\omega^{2}$ 得 $f$ 满足

$$\frac{\partial^{2} f}{\partial r^{2}} + K f = 0 ,$$

配初值 $f(0,\theta) = 0$、$\partial_{r}f(0,\theta) = 1$ 得三个解：
- $K = 0$：$f = r$，即 $g = \mathrm{d}r^{2} + r^{2}\mathrm{d}\theta^{2}$（**欧氏度量**）；
- $K > 0$：$f = \frac{1}{\sqrt K}\sin(\sqrt K\, r)$（**球面度量**）；
- $K < 0$：$f = \frac{1}{\sqrt{-K}}\sinh(\sqrt{-K}\, r
)$（**双曲度量**）。
**定理**：常 Gauss 曲率曲面**局部**只能等距于平面、球面或双曲面之一。

**推论**：单连通且完备时，只有平面、球面、双曲平面三种。

> 续见 [nodes/thm.constant-gauss-curvature.3.md](./thm.constant-gauss-curvature.3.md)
