# 二阶 Taylor + 正定二次型的估计 $\implies$ 极值判别
`imp.second-derivative-test` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.sylvester-criterion` Sylvester 判据 + `thm.spectral-theorem` 谱定理（实对称） → `thm.second-derivative-test` 极值判别（Hessian 判据）

**不定情形**（有 $\lambda > 0$ 与 $\mu < 0$）：取 $v_{+}$、$v_{-}$ 为对应的特征向量并单位化。沿 $h = tv_{+}$（$t \ne 0$ 小）有 $h^{\mathsf{T}}Hh = \lambda t^{2} > 0$，故 $f(a+tv_{+}) > f(a)$；沿 $h = tv_{-}$ 有 $h^{\mathsf{T}}Hh = \mu t^{2} < 0$，故 $f(a+tv_{-}) < f(a)$。**任意**小的邻域里两种情况都出现，所以 $a$ 既非局部极小也非局部极大。∎

> 续见 proofs/imp.second-derivative-test.4.md
