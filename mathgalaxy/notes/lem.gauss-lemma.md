# Gauss 引理　`lem.gauss-lemma`　·　说明
根 `../`

**证明骨架（细节在边上）**：沿测地线对 $\langle \partial_{\rho},\partial_{\theta}\rangle$ 求 $\rho$ 的导数，第一项因测地线为零，第二项用 $[\partial_{\rho},\partial_{\theta}] = 0$ 与 $|\partial_{\rho}| = 1$ 化成 $\frac{1}{2}\partial_{\theta}\langle \partial_{\rho},\partial_{\rho}\rangle = 0$。于是这个内积沿 $\rho$ 是常数；$\rho\to0$ 时 $\partial_{\theta}\to0$，常数只能是 $0$。

**同一个引理的两种说法**：几何说法是「径向 $\perp$ 球面」（高斯引理的本来面貌）；坐标说法是「$F\equiv0$」（测地极坐标下的展开）。而 $E = |\partial_{\rho}|^{2} = 1$ 只是因为 $\rho$ 是弧长。

⭐ **这是整门内蕴几何的枢纽**：它把「测地线」翻译成「坐标线」，于是 $I$ 在测地极坐标下只剩**一个**未知函数 $G$。而 $G$ 的展开系数就是曲率：

$$\sqrt{G(\rho,\theta)} = \rho-\frac{K(p)}{6}\rho^{3}+O(\rho^{5}),$$

> 续见 notes/lem.gauss-lemma.2.md
