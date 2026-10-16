# Cauchy 列的等价类 $\implies$ 完备有序域
`imp.real-ordered-field` · 推出 · strong 边 · 根 `../`

`def.real` 实数系 ℝ → `thm.real-ordered-field` ℝ 是完备有序域

**⑤ $\mathbb{R}$ 完备（Cauchy 完备）。** 设 $(\alpha_k)$ 是 $\mathbb{R}$ 中的 Cauchy 列，$x^{(k)} \in \alpha_k$ 是代表元。对每个 $k$，由 $(x^{(k)}_n)_n$ 的 Cauchy 性取 $N_k$，令

$$y_k := x^{(k)}_{N_k}$$

（对角抽取。）断言 $(y_k)$ 是有理 Cauchy 列：给定 $\varepsilon > 0$，由 $(\alpha_k)$ 的 Cauchy 性取 $K$，使 $k, j \ge K$ 时 $|\alpha_k - \alpha_j| < \varepsilon/3$，即

$$\exists N, \forall n \ge N : |x^{(k)}_n - x^{(j)}_n| < \varepsilon/3$$

再取 $K' \ge K$ 使 $k \ge K'$ 时 $1/k < \varepsilon/3$，并对 $k, j \ge K'$ 取 $n \ge \max(N_k, N_j, N)$：

> 续见 proofs/imp.real-ordered-field.5.md
