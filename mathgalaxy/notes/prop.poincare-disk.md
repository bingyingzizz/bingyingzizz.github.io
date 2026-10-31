# Poincaré 圆盘与双曲几何　`prop.poincare-disk`　·　说明
根 `../`

**为什么是这三种几何**：常曲率二维模型只有三个 —— 球面（$+1$）、欧氏平面（$0$）、双曲平面（$-1$）。球面经球极投影变成 $\widehat{\mathbb{C}} = \mathbb{C} \cup \{\infty\}$ 上的度量，圆盘承载双曲的，而 $\mathbb{C}$ 自己承载欧氏的。**单值化定理**说：任何单连通 Riemann 曲面（`def.riemann-surface`）都共形等价于这三者之一。

**与 Schwarz–Pick 的关系**：Schwarz–Pick 说 $\varphi : \mathbb{D} \to \mathbb{D}$ 全纯时

$$\frac{|\varphi'(z)|}{1 - |\varphi(z)|^{2}} \le \frac{1}{1 - |z|^{2}},$$

左端正是把 Poincaré 度量沿 $\varphi$ 拉回后的系数比 —— 所以这句话读作「全纯映射不放大双曲长度」，等号成立（在某点）时 $\varphi$ 是自同构。

⭐ **几何的图像**：双曲平面里「直线」是垂直撞到边界圆周的圆弧，三角形的内角和**小于** $\pi$，面积有上界。这些性质都可以用圆盘上的度量算出来，不需要另建模型。

> 续见 notes/prop.poincare-disk.2.md
