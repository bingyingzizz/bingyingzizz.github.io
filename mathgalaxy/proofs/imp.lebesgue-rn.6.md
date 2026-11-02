# 「要么奇异、要么有下界」$\implies$ Lebesgue–Radon–Nikodym
`imp.lebesgue-rn` · 推出 · strong 边 · 根 `../`

`lem.singular-or-lower-bound` 要么奇异、要么有下界 + `thm.mct` 单调收敛定理 + `prop.ac-and-variations` 绝对连续与变差 → `thm.lebesgue-radon-nikodym` Lebesgue–Radon–Nikodym 定理

对每一对 $(\mu_j, \nu_j)$ 用 $I$，得 $d\nu_j = d\lambda_j + f_j d\mu_j$。规定 $\lambda_j(A_j^c) = 0$、$f_j = 0$ 在 $A_j^c$ 上，令

$$\lambda := \sum_j \lambda_j, \quad  f := \sum_j f_j$$

则 $d\nu = d\lambda + f d\mu$、$\lambda \perp  \mu$，且 $d\lambda$、$f d\mu$ 都 $\sigma$有限。

> 续见 proofs/imp.lebesgue-rn.7.md
