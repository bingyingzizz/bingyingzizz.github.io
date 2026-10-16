# Cayley–Hamilton $\implies \mu_T \mid \chi_T$ 且同根
`imp.minimal-poly-divisor` · 推出 · strong 边 · 根 `../`

`thm.cayley-hamilton` Cayley–Hamilton + `def.minimal-poly` 极小多项式 → `thm.minimal-poly-divisor` 极小多项式整除特征多项式

1. **整除**：由 Cayley–Hamilton，$\chi_T(T) = 0$，即 $\chi_T \in I_T = (\mu_T)$，故 $\mu_T \mid \chi_T$。由此 $\deg \mu_T \le \deg \chi_T = n$。
2. **$\chi_T$ 的根都是 $\mu_T$ 的根**：由第 1 步与「$\mu_T$ 非零」得 $\mu_T \mid \chi_T$，故 $\chi_T$ 的每个根也是 $\mu_T$ 的根。
3. **$\mu_T$ 的根都是 $\chi_T$ 的根**：设 $\mu_T(\lambda) = 0$。由 $\mu_T \ne 0$ 且 $\mu_T \mid \chi_T$，把 $\mu_T$ 在 $K$ 的代数闭包中分解为 $\prod (x - \lambda_j)^{e_j}$；对每个 $j$ 取非零向量 $v_j \in \ker(T - \lambda_j I)^{e_j}$（

> 续见 proofs/imp.minimal-poly-divisor.2.md
