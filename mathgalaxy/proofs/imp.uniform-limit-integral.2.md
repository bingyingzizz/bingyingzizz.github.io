# 一致收敛 + 积分的绝对值估计 $\implies$ 极限与积分交换
`imp.uniform-limit-integral` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `prop.integral-order` 积分的保序与估计 → `thm.uniform-limit-integral` 积分与极限交换

$$\Bigl| \int_a^b f_n - \int_a^b f \Bigr| = \Bigl| \int_a^b (f_n - f) \Bigr| \le \int_a^b |f_n - f| \le (b - a)\,\varepsilon_n$$
3. 由一致收敛 $\varepsilon_n \to 0$，右端趋于零，故极限与积分可交换。∎

> 整个证明里**没有一次**提到具体是哪个 $x$ —— 误差被一个与 $x$ 无关的常数 $\varepsilon_n$ 统一控制，这就是一致收敛的力量。
