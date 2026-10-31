# Cauchy–Green 恒等式 $\implies$ Cauchy 定理（导数连续的情形）
`imp.green-cauchy-thm` · 推出 · strong 边 · 根 `../`

`lem.cauchy-green` Cauchy–Green 恒等式 + `thm.cauchy-riemann` Cauchy–Riemann 方程 → `thm.cauchy-goursat` Cauchy–Goursat 积分定理

**推广到多连通。** 把 $\gamma_0$ 与内圈 $\gamma_1, \cdots, \gamma_n$ 用 $n$ 条割线连起来，得到一条闭曲线的边界；在它上面积分为 $0$。每条割线被走两次、方向相反，抵消后正是 $\oint_{\gamma_0} f - \sum_k \oint_{\gamma_k} f = 0$。

**这一步到此为止的地方。** 上面每一句都用了「$f \in C^1$」，因为 Green 公式要求 $P, Q$ 在闭包上连续可微。全纯**不**蕴含 $f'$ 连续（此刻还不知道），所以这条路线只证出了「额外假设 $f'$ 连续」的版本。去掉这个假设要另起一条路 —— 见 Goursat 三角形引理那条边。$\blacksquare$
