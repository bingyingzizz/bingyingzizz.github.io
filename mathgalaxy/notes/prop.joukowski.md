# Joukowski 映射　`prop.joukowski`　·　说明
根 `../`

**为什么**：$w = \tfrac12(z + 1/z)$ 把 $z = r e^{i\theta}$ 送到

$$u = \tfrac12\left(r + \tfrac1r\right)\cos\theta,\qquad v = \tfrac12\left(r - \tfrac1r\right)\sin\theta,$$

这正是椭圆的参数方程（半轴 $\tfrac12(r \pm 1/r)$）。$r \to 1$ 时短轴趋于 $0$，椭圆退化成线段。∎

⭐ **为什么它在空气动力学里出名**：保角映射把「绕机翼的流动」搬到「绕圆的流动」，而绕圆的流动有现成公式；再由 `thm.riemann-mapping` 保证这种搬运不改变「无旋、不可压、无粘」这些结构（Laplace 方程在共形映射下不变）。

⚠️ $w = \tfrac12(z + 1/z)$ **不是单叶**：$z$ 与 $1/z$ 给同一个 $w$。要得到双全纯，必须限制在 $\mathbb{D}$ 或 $\mathbb{D}$ 的外部（含 $\infty$）。
