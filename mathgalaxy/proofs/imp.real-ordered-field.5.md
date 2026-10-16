# Cauchy 列的等价类 $\implies$ 完备有序域
`imp.real-ordered-field` · 推出 · strong 边 · 根 `../`

`def.real` 实数系 ℝ → `thm.real-ordered-field` ℝ 是完备有序域

$$|y_k - y_j| \le |y_k - x^{(k)}_n| + |x^{(k)}_n - x^{(j)}_n| + |x^{(j)}_n - y_j| < \tfrac{\varepsilon}{3} + \tfrac{\varepsilon}{3} + \tfrac{\varepsilon}{3} = \varepsilon$$

于是 $\alpha := [y_k] \in \mathbb{R}$。同一组估计给出 $|\alpha_k - \alpha| \le 2\varepsilon/3$（取 $j$ 充分大），故 $\alpha_k \to \alpha$。**每个 Cauchy 列在 $\mathbb{R}$ 中收敛。**

**⑥ 由 Cauchy 完备推出确界原理。** 设 $S \subseteq \mathbb{R}$ 非空、有上界 $\beta_0$，取 $\alpha_0 \in S$。归纳地造两个数列：已知 $\alpha_{n-1} \in S$ 与上界 $\beta_{n-1}$，取中点 $m_n := (\alpha_{n-1} + \beta_{n-1})/2$：

> 续见 proofs/imp.real-ordered-field.6.md
