# Gauss 引理　`lem.gauss-lemma`　·　说明
根 `../`

⚠️ **$v$ 必须落在 $\operatorname{Dom}(\exp_{p})$ 里**：$\exp_{p}(v)$ 只在 $\gamma_{v}$ 能走到 $t = 1$ 时才有定义（见 `def.exponential-map`）。取开圆盘内的 $p$ 与 $v = (2,0,0)$：测地线在 $t = 1$ 之前就离开了曲面，$\exp_{p}(v)$ 与 $(\mathrm{d}\exp_{p})_{v}$ 都无从谈起。

**同一个引理的两种说法**：几何说法是「径向 $\perp$ 球面」（高斯引理的本来面貌）；坐标说法是「$F\equiv0$」（测地极坐标下的展开）。而 $E = |\partial_{\rho}|^{2} = 1$ 只是因为 $\rho$ 是弧长。

⭐ **这是整门内蕴几何的枢纽**：它把「测地线」翻译成「坐标线」，于是 $I$ 在测地极坐标下只剩**一个**未知函数 $G$。而 $G$ 的展开系数就是曲率：

$$\sqrt{G(\rho,\theta)} = \rho-\frac{K(p)}{6}\rho^{3}-\frac{\mathrm{d}K_{p}(u_{\theta})}{12}\rho^{4}+O(\rho^{5}),$$

> 续见 notes/lem.gauss-lemma.5.md
