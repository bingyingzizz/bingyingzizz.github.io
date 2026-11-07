# Gauss 引理　`lem.gauss-lemma`　·　说明
根 `../`

⚠️ **四次项不能省**：其中 $u_{\theta} = \cos\theta\,e_{1}+\sin\theta\,e_{2}$，$\mathrm{d}K_{p}$ 是 $K$ 在 $p$ 处的微分。$\rho^{2}$ 项**恒为** $0$（因为 $(\sqrt G)_{\rho\rho}(0) = -K(p)\cdot\sqrt G(0) = 0$），所以 $\rho^{4}$ 项是 $\rho^{3}$ 之后**第一个**修正 —— 只写 $O(\rho^{5})$ 会在 $K(p) = 0$ 的点上把 $\rho^{4}$ 阶的偏离说成没有。例：$g = e^{2x^{3}}(\mathrm{d}x^{2}+\mathrm{d}y^{2})$ 在原点 $K = 0$ 而 $\mathrm{d}K_{p}(\partial_{x}) = -6\ne 0$，沿 $\theta = 0$ 是 $\sqrt G = \rho+\frac{1}{2}\rho^{4}+O(\rho^{5})$。

等价地，半径 $\rho$ 的测地圆周长 $L(\rho) = 2\pi\rho\left(1-\frac{K(p)}{6}\rho^{2}+O(\rho^{4})\right)$。**一个会量长度的人就能把 $K$ 量出来** —— 这就是绝妙定理的操作形式。

⚠️ 只在 $\exp_{p}$ 是微分同胚的范围内成立；越过割迹，同一组 $(\rho,\theta)$ 会对应多个点。
