# 最值定理 + 保序 $\implies$ 积分中值定理
`imp.mean-value-integral` · 推出 · strong 边 · 根 `../`

`thm.evt` 最值定理 + `prop.integral-order` 积分的保序与估计 → `thm.mean-value-integral` 积分中值定理

设 $f$ 连续、$g \ge 0$ 可积（$g \le 0$ 时取 $-g$）。

1. 由最值定理，$f$ 在 $[a, b]$ 上取到最小值 $m$ 与最大值 $M$。
2. 由 $g \ge 0$ 得 $mg \le fg \le Mg$；由保序性与线性性，

$$m\int_a^b g \le \int_a^b fg \le M\int_a^b g$$

3. 若 $\int_a^b g = 0$，则三式都被夹在 $0$ 上，$\int fg = 0 = f(\xi) \cdot 0$ 对任意 $\xi$ 成立。
4. 否则令

$$c := \frac{\int_a^b fg}{\int_a^b g} \in [m, M]$$

由介值定理，存在 $\xi \in [a, b]$ 使 $f(\xi) = c$，整理即得结论。∎

> 第 4 步用的正是**介值定理** —— 中值定理家族里唯一需要「$f$ 取遍中间值」的地方。
