# 唯一分解 + 极小多项式 $\implies$ 根子空间分解
`imp.primary-decomposition` · 推出 · strong 边 · 根 `../`

`thm.poly-ufd` K[x] 是唯一分解整环 + `def.minimal-poly` 极小多项式 + `prop.root-bound` 根的个数不超过次数 → `thm.primary-decomposition` 根子空间分解

设 $K$ 代数闭、$\chi_T = \prod_{i=1}^{r}(x - \lambda_i)^{m_i}$，$\lambda_i$ 互异。

1. **把 $V$ 看成 $K[x]$-模**：令 $x \cdot v := T(v)$。模的公理就是 $T$ 的线性性 + $T^{0} = I$，逐步验证即可。于是 $\chi_T \cdot V = 0$。
2. **中国剩余定理**：$\chi_T = \prod_i (x - \lambda_i)^{m_i}$ 中诸因子两两互素（互异一次因子的幂），故

> 续见 proofs/imp.primary-decomposition.2.md
