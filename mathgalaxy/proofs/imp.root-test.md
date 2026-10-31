# 与几何级数比较 $\implies$ 根值判别法
`imp.root-test` · 推出 · strong 边 · 根 `../`

`thm.comparison-test` 比较判别法 → `thm.root-test` 根值判别法

**$\alpha < 1$**：取 $q$ 使 $\alpha < q < 1$。由 $\limsup \sqrt[n]{a_n} = \alpha < q$，存在 $N$ 使 $n \ge N$ 时 $\sqrt[n]{a_n} < q$，即 $a_n < q^{n}$。几何级数 $\sum q^{n}$ 收敛，由比较判别法 $\sum a_n$ 收敛。

**$\alpha > 1$**：此时 $\sqrt[n]{a_n} > 1$ 对无穷多个 $n$ 成立（否则 $\limsup \le 1$），即 $a_n > 1$ 对无穷多个 $n$ 成立。于是 $a_n \not\to 0$，由级数的必要条件（Cauchy 准则）发散。

**$\alpha = 1$**：$a_n = 1/n$（发散）与 $a_n = 1/n^{2}$（收敛）都满足 $\limsup \sqrt[n]{a_n} = 1$，故无结论。

> 续见 proofs/imp.root-test.2.md
