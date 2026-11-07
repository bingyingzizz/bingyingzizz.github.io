# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

（1）**规范化**：把 $\infty \in \partial\mathbb{H}$ 选在不是任何顶点原像的位置（圆 $\partial\mathbb{H}$ 上除去有限个顶点原像后仍有点，用 $\operatorname{Aut}(\mathbb{H})$ 把它送到 $\infty$）。于是 $\infty$ 对应的是多边形某条边的内部，而不是顶点。

（2）**角点的局部形状**：在 $x_{k}$ 附近，$f$ 有展开

$$f(z) - f(x_{k}) = (z - x_{k})^{\alpha_{k}}\,h_{k}(z),\qquad h_{k}\ \text{在}\ x_{k}\ \text{附近全纯且}\ h_{k}(x_{k}) \ne 0.$$

理由：把角的两边所在直线作反射，角的两侧被「展开」；等价地，令 $w = (f - f(x_{k}))^{1/\alpha_{k}}$，它把角展成半平面，再用 Schwarz 反射（`thm.schwarz-reflection`）把 $f$ 延拓过 $x_{k}$，局部即得上式。

（3）**跨边延拓**：每条边 $f((x_{k}, x_{k+1}))$ 是直线段。沿这线段把多边形反射，同时把 $\mathbb{H}$ 沿 $(x_{k}, x_{k+1})$ 反射；由 Schwarz 反射，$f$ 解析延拓过整个开区间 $(x_{k}, x_{k+1})$。定义

> 续见 notes/thm.schwarz-christoffel.3.md
