# 二阶 Taylor + 正定二次型的估计 $\implies$ 极值判别
`imp.second-derivative-test` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.sylvester-criterion` Sylvester 判据 + `thm.spectral-theorem` 谱定理（实对称） → `thm.second-derivative-test` 极值判别（Hessian 判据）

由 $\nabla f(a) = 0$ 与 $k = 2$ 的 Taylor 公式（`thm.taylor-multi`）：

$$f(a + h) = f(a) + \frac{1}{2} h^{\mathsf{T}} H_f(a)\, h + o\bigl(\|h\|^{2}\bigr)$$

记 $H := H_f(a)$。由 `thm.spectral-theorem`，$H$ 有正交标准特征基，特征值 $\lambda_1 \le \cdots \le \lambda_n$，于是对一切 $h$

$$\lambda_1 \|h\|^{2} \le h^{\mathsf{T}} H h \le \lambda_n \|h\|^{2}$$

> 续见 proofs/imp.second-derivative-test.2.md
