# Riemann–Lebesgue 引理　`thm.riemann-lebesgue`　·　说明
根 `../`

**为什么它重要**：Fourier 系数趋于 $0$ 是 Fourier 级数收敛理论的入口（Riemann–Lebesgue 本身不足以给出逐点收敛，那需要 Dirichlet 核与分段光滑性）；在测度论里它升级成「$L^{1}$ 函数的 Fourier 变换在无穷远处趋于 $0$」（$L^{1}$ 情形的 Riemann–Lebesgue），进一步就是「$L^{2}$ 里 Fourier 变换是酉算子」。

⚠️ **名字里两个人都要提**：只说「Riemann 引理」或「Lebesgue 引理」都不对（后者另有所指：可积的 Lebesgue 判据）。本图把它记作 `thm.riemann-lebesgue`，与 `thm.riemann-lebesgue-criterion`（可积  $\iff$  不连续点零测，那是 **Lebesgue 判据**）是两个不同的东西 —— 搜的时候容易撞。

⚠️ **「Riemann 可积」不能换成「有界」**：反例是 $f = \mathbf{1}_{\mathbb{Q}}$（Dirichlet 函数）—— 有界但不 Riemann 可积，且它的「积分」没有意义，定理无从谈起。至于 Lebesgue 可积情形，同样的证明用 $L^{1}$ 逼近（简单函数代替阶梯函数）即可。
