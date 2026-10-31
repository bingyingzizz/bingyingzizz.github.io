# 一致收敛 + 积分的绝对值估计 $\implies$ 极限与积分交换
`imp.uniform-limit-integral` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `prop.integral-order` 积分的保序与估计 → `thm.uniform-limit-integral` 积分与极限交换

记 $\varepsilon_n := \sup_{x \in [a, b]} |f_n(x) - f(x)|$。

1. **可积性**：$f = f_n + (f - f_n)$，其中 $f_n$ 可积、而 $f - f_n$ 被常数 $\varepsilon_n$ 控制；用振幅判据，$\omega(f - f_n) \le 2\varepsilon_n$ 逐段成立，故 $f - f_n$ 可积，从而 $f$ 可积。（也可以直接对 $f$ 用振幅判据与 $f_n$ 的振幅比较。）
2. **估计**：由积分的绝对值不等式与基本估计，

> 续见 proofs/imp.uniform-limit-integral.2.md
