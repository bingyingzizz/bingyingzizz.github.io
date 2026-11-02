# 二阶 Taylor + 正定二次型的估计 $\implies$ 极值判别
`imp.second-derivative-test` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.sylvester-criterion` Sylvester 判据 + `thm.spectral-theorem` 谱定理（实对称） → `thm.second-derivative-test` 极值判别（Hessian 判据）

**正定情形**（$\lambda_1 > 0$）：余项 $o(\|h\|^{2})$ 满足「存在 $\rho > 0$，$\|h\| < \rho$ 时 $|o(\|h\|^{2})| \le \frac{\lambda_1}{4}\|h\|^{2}$」。于是

$$f(a+h) - f(a) \ge \frac{\lambda_1}{2}\|h\|^{2} - \frac{\lambda_1}{4}\|h\|^{2} = \frac{\lambda_1}{4}\|h\|^{2} > 0 \quad (0 < \|h\| < \rho)$$

即 $a$ 是局部严格极小点。

**负定情形**：把 $f$ 换成 $-f$（注意 $\nabla(-f) = -\nabla f = 0$、$H_{-f} = -H_f$ 正定）即得局部严格极大点。

> 续见 proofs/imp.second-derivative-test.3.md
