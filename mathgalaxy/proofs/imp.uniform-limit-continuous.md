# 一致收敛 + 连续 $\implies$ 极限连续
`imp.uniform-limit-continuous` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `def.continuous` 连续 → `thm.uniform-limit-continuous` 一致收敛保连续

设 $x_0 \in X$，给定 $\varepsilon > 0$。

1. 由一致收敛，存在 $n$，使**对一切 $x$** 有 $|f_n(x) - f(x)| < \varepsilon / 3$。
2. 由 $f_n$ 在 $x_0$ 连续，存在 $\delta > 0$，使 $d(x, x_0) < \delta$ 时 $|f_n(x) - f_n(x_0)| < \varepsilon / 3$。
3. 对这样的 $x$，三角不等式给出

$$|f(x) - f(x_0)| \le |f(x) - f_n(x)| + |f_n(x) - f_n(x_0)| + |f_n(x_0) - f(x_0)| < \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon$$

故 $f$ 在 $x_0$ 连续。由 $x_0$ 任意，$f$ 连续。∎

> 第 1 步之所以能用一个 $n$ 同时管住 $x$ 与 $x_0$，正是**一致**收敛的全部内容 —— 换成逐点收敛，第 1 步会给出两个不同的 $n$，证明立刻断裂。
