# Cauchy 列的等价类 $\implies$ 完备有序域
`imp.real-ordered-field` · 推出 · strong 边 · 根 `../`

`def.real` 实数系 ℝ → `thm.real-ordered-field` ℝ 是完备有序域

- 若 $m_n$ 是 $S$ 的上界，则置 $\beta_n := m_n$、$\alpha_n := \alpha_{n-1}$；
- 否则有 $s \in S$ 使 $s > m_n$，置 $\alpha_n := s$、$\beta_n := \beta_{n-1}$。

于是 $(\alpha_n)$ 递增、$(\beta_n)$ 递减，且

$$\beta_n - \alpha_n = \frac{\beta_0 - \alpha_0}{2^n} \xrightarrow{\ n \to \infty\ } 0$$

两个列都是 Cauchy 列（单调 + 步长趋于 $0$），由 ⑤ 收敛到同一个 $\alpha \in \mathbb{R}$。

**$\alpha$ 是上界**：若不然，存在 $s \in S$ 使 $s > \alpha$。取 $n$ 充分大使 $\beta_n - \alpha_n < s - \alpha$；由 $\alpha_n \to \alpha$ 又有 $\alpha \le \beta_n$ 与 $\alpha_n \le \alpha$，于是 $\alpha_n + (s - \alpha) > \beta_n$，而 $\alpha_n \in S$ 且 $s \in S$ 都是 $\beta_n$ 下面的元素 —— 与「$\beta_n$ 是上界」矛盾。

> 续见 proofs/imp.real-ordered-field.7.md
