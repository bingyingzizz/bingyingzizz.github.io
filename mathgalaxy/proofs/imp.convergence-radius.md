# 根值判别法 $\implies$ Cauchy–Hadamard 公式
`imp.convergence-radius` · 推出 · strong 边 · 根 `../`

`thm.root-test` 根值判别法 + `def.power-series` 幂级数 → `thm.convergence-radius` 收敛半径

记 $b_n(x) := a_n (x - x_0)^{n}$，则 $\sqrt[n]{|b_n(x)|} = |x - x_0| \cdot \sqrt[n]{|a_n|}$。

1. 由 $\limsup$ 的乘法性质，

$$\limsup_{n} \sqrt[n]{|b_n(x)|} = |x - x_0| \cdot \limsup_{n} \sqrt[n]{|a_n|} = \frac{|x - x_0|}{R}$$

（约定 $R = +\infty$ 时右端为 $0$、$R = 0$ 时为 $+\infty$。）
2. 由**根值判别法**：上式 $< 1$ 即 $|x - x_0| < R$ 时绝对收敛；$> 1$ 即 $|x - x_0| > R$ 时发散。
3. $|x - x_0| = R$ 时上式恰为 $1$，根值判别法在此**没有结论**。∎

> 注意用 $\limsup$ 而非 $\lim$ 的必要性：根值判别法本身就是用 $\limsup$ 陈述的，所以这条公式才对所有幂级数（包括那些系数没有极限的）都成立。
