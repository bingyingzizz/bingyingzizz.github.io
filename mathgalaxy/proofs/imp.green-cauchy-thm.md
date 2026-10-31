# Cauchy–Green 恒等式 $\implies$ Cauchy 定理（导数连续的情形）
`imp.green-cauchy-thm` · 推出 · strong 边 · 根 `../`

`lem.cauchy-green` Cauchy–Green 恒等式 + `thm.cauchy-riemann` Cauchy–Riemann 方程 → `thm.cauchy-goursat` Cauchy–Goursat 积分定理

**已得的部分。** 由 Cauchy–Green 恒等式，只要 $f$ 在 $\overline{\Omega}$ 上 $C^1$ 且全纯，就有 $\oint_{\partial\Omega} f = 2i\iint f_{\bar z} = 0$。对简单闭曲线围成的区域，这就是 Cauchy 定理。

**推广到一般闭曲线。** 若 $\gamma$ 是分段光滑闭曲线、$f$ 在 $\gamma$ 内部及 $\gamma$ 上 $C^1$ 且全纯，则 $\gamma$ 围成的区域可以剖分成有限个简单闭曲线围成的区域（加辅助割线），逐个用上面的结论，割线上的积分两两抵消，仍得 $\oint_\gamma f = 0$。

> 续见 proofs/imp.green-cauchy-thm.2.md
