# Cauchy–Hadamard 公式 $\implies$ sin/cos 的收敛半径为 $+\infty$
`imp.trig-series-radius` · 推出 · strong 边 · 根 `../`

`thm.convergence-radius` 收敛半径 → `def.trig-function` 正弦与余弦

只对 $\cos$ 写；$\sin$ 的系数是 $1/(2k+1)!$，估计完全相同。
$\cos z$ 的系数为 $a_{2k} = (-1)^{k}/(2k)!$，其余 $a_n = 0$。对 $n = 2k$，由 $(2k)! = \prod_{j=1}^{2k} j \ge (k+1)^{k}$（后 $k$ 个因子每个至少为 $k+1$）得
$$|a_{2k}|^{1/(2k)} = ((2k)!)^{-1/(2k)} \le (k+1)^{-1/2} \to 0.$$
故 $\limsup_{n} |a_n|^{1/n} = 0$，由 Cauchy–Hadamard 公式得 $R = 1/0 = +\infty$。对 $\sin$ 用 $(2k+1)! \ge (k+1)^{k+1}$ 同法；结论是这两个级数在整个复平面上绝对收敛。∎

> 这里只需要系数估计，不需要复变函数理论；$\cos$ 与 $\sin$ 因此都是整函数。
