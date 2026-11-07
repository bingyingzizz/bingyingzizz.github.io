# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

（2）**角点的局部形状**：在 $x_{k}$ 附近，$f$ 有展开

$$f(z) - f(x_{k}) = (z - x_{k})^{\alpha_{k}}\,h_{k}(z),\qquad h_{k}\ \text{在}\ x_{k}\ \text{附近全纯且}\ h_{k}(x_{k}) \ne 0.$$

理由：把角的两边所在直线作反射，角的两侧被「展开」；等价地，令 $w = (f - f(x_{k}))^{1/\alpha_{k}}$，它把角展成半平面，再用 Schwarz 反射（`thm.schwarz-reflection`）把 $f$ 延拓过 $x_{k}$，局部即得上式。

（3）**跨边延拓**：每条边 $f((x_{k}, x_{k+1}))$ 是直线段。沿这线段把多边形反射，同时把 $\mathbb{H}$ 沿 $(x_{k}, x_{k+1})$ 反射；由 Schwarz 反射，$f$ 解析延拓过整个开区间 $(x_{k}, x_{k+1})$。定义

$$\varphi(z) := \frac{f'(z)}{g(z)} = \frac{f'(z)}{\prod_{k=1}^{n}(z - x_{k})^{\alpha_{k}-1}}.$$

由（2），$\varphi$ 在 $x_{k}$ 处有可去奇点且 $\varphi(x_{k}) = h_{k}(x_{k}) \ne 0$；由跨边反射，$\varphi(\bar z) = \overline{\varphi(z)}$，故 $\varphi$ 延拓成 $\mathbb{C}$ 上的整函数。

> 续见 notes/thm.schwarz-christoffel.3.md
