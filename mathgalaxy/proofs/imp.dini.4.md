# 紧性 + 单调 + 连续性 $\implies$ Dini 定理
`imp.dini` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `def.continuous` 连续 + `def.compact` 紧 → `thm.dini` Dini 定理

故 $\sup_y |f(y) - f_n(y)| \le 3\varepsilon$ 对一切 $n \ge N$ 成立，即 $f_n \rightrightarrows f$。∎

> 第 4 步是**单调性唯一**出场的地方：它把「$n = n_{x_j}$ 时误差小」升级成「一切 $n \ge N$ 时误差小」。没有单调性，有限覆盖给出的只是一列互不相干的点。
