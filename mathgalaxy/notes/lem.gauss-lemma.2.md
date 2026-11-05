# Gauss 引理　`lem.gauss-lemma`　·　说明
根 `../`

⭐ **这是整门内蕴几何的枢纽**：它把「测地线」翻译成「坐标线」，于是 $I$ 在测地极坐标下只剩**一个**未知函数 $G$。而 $G$ 的展开系数就是曲率：

$$\sqrt{G(\rho,\theta)} = \rho-\frac{K(p)}{6}\rho^{3}-\frac{\mathrm{d}K_{p}(u_{\theta})}{12}\rho^{4}+O(\rho^{5}),$$

⚠️ **四次项不能省**：其中 $u_{\theta} = \cos\theta\,e_{1}+\sin\theta\,e_{2}$，$\mathrm{d}K_{p}$ 是 $K$ 在 $p$ 处的微分。$\rho^{2}$ 项**恒为** $0$（因为 $(\sqrt G)_{\rho\rho}(0) = -K(p)\cdot\sqrt G(0) = 0$），所以 $\rho^{4}$ 项是 $\rho^{3}$ 之后**第一个**修正 —— 只写 $O(\rho^{5})$ 会在 $K(p) = 0$ 的点上把 $\rho^{4}$ 阶的偏离说成没有。例：$g = e^{2x^{3}}(\mathrm{d}x^{2}+\mathrm{d}y^{2})$ 在原点 $K = 0$ 而 $\mathrm{d}K_{p}(\partial_{x}) = -6\ne 0$，沿 $\theta = 0$ 是 $\sqrt G = \rho+\frac{1}{2}\rho^{4}+O(\rho^{5})$。

> 续见 notes/lem.gauss-lemma.3.md
