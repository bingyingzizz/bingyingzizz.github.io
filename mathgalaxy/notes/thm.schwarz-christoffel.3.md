# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

$$\varphi(z) := \frac{f'(z)}{g(z)} = \frac{f'(z)}{\prod_{k=1}^{n}(z - x_{k})^{\alpha_{k}-1}}.$$

由（2），$\varphi$ 在 $x_{k}$ 处有可去奇点且 $\varphi(x_{k}) = h_{k}(x_{k}) \ne 0$；由跨边反射，$\varphi(\bar z) = \overline{\varphi(z)}$，故 $\varphi$ 延拓成 $\mathbb{C}$ 上的整函数。

（4）**$\varphi$ 无零点**：$\mathbb{H}$ 内 $f' \ne 0$（共形）；每个开区间 $(x_{k}, x_{k+1})$ 上 $f$ 的参数化导数非零（边是直线段，$f$ 是双射）；由反射式，下半平面也无零点；角点处由（2）。故 $\varphi$ 是处处非零的整函数。

（5）**$\varphi$ 在无穷远有有限非零极限**：由（1），$\infty$ 映到某条边内部，跨这条边反射给出 $f$ 在 $\infty$ 的邻域内全纯；在坐标 $w = 1/z$ 下 $f$ 在 $w = 0$ 全纯，故 $f'(z) = O(z^{-2})$。另一方面 $g(z) = \prod(z - x_{k})^{\alpha_{k}-1} = z^{-2}\,(1 + O(1/z))$（用了指数和 $-2$）。于是 $\varphi(z) \to A \ne 0$（$A$ 是某个非零常数），$\varphi$ 在 $\infty$ 有可去奇点。

> 续见 notes/thm.schwarz-christoffel.4.md
