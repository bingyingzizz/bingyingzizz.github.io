# 二阶 Taylor + 正定二次型的估计 $\implies$ 极值判别
`imp.second-derivative-test` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.spectral-theorem` 谱定理（实对称） → `thm.second-derivative-test` 极值判别（Hessian 判据）

$$f(a+h) - f(a) \ge \frac{\lambda_1}{2}\|h\|^{2} - \frac{\lambda_1}{4}\|h\|^{2} = \frac{\lambda_1}{4}\|h\|^{2} > 0 \quad (0 < \|h\| < \rho)$$

即 $a$ 是局部严格极小点。

**负定情形**：把 $f$ 换成 $-f$（注意 $\nabla(-f) = -\nabla f = 0$、$H_{-f} = -H_f$ 正定）即得局部严格极大点。

**不定情形**（有 $\lambda > 0$ 与 $\mu < 0$）：取 $v_{+}$、$v_{-}$ 为对应的特征向量并单位化。

沿 $h = tv_{+}$（$t \ne 0$ 小）有 $h^{\mathsf{T}}Hh = \lambda t^{2} > 0$，故 $f(a+tv_{+}) > f(a)$；

> 续见 proofs/imp.second-derivative-test.3.md
