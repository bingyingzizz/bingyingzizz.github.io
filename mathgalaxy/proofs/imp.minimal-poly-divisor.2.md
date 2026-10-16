# Cayley–Hamilton $\implies \mu_T \mid \chi_T$ 且同根
`imp.minimal-poly-divisor` · 推出 · strong 边 · 根 `../`

`thm.cayley-hamilton` Cayley–Hamilton + `def.minimal-poly` 极小多项式 → `thm.minimal-poly-divisor` 极小多项式整除特征多项式

由第 4 步非零），则 $v := v_j$ 满足 $\mu_T(T) v = 0$。若 $\lambda_j$ 不是特征值，则 $T - \lambda_j I$ 可逆，于是 $(T - \lambda_j I)^{e_j}$ 可逆，$\ker = \{0\}$，矛盾。故每个 $\lambda_j$ 都是特征值，即 $\chi_T(\lambda_j) = 0$。
4. **每个 $\ker (T - \lambda_j I)^{e_j} \ne \{0\}$**：若全为零，则 $\mu_T$ 的每个因子都可逆、乘积可逆，而 $\mu_T(T) = 0$ 与可逆性矛盾（$n \ge 1$ 时 $V \ne 0$）。

> 续见 proofs/imp.minimal-poly-divisor.3.md
