# 紧性 + 单调 + 连续性 $\implies$ Dini 定理
`imp.dini` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `def.continuous` 连续 + `def.compact` 紧 → `thm.dini` Dini 定理

合并：$y \in U_x$ 时 $f(y) - f_{n_x}(y) < 3\varepsilon$。
3. $\{U_x\}_{x \in X}$ 是紧空间 $X$ 的开覆盖，取出有限子覆盖 $U_{x_1}, \ldots, U_{x_k}$，令 $N := \max\{n_{x_1}, \ldots, n_{x_k}\}$。
4. 对任意 $y \in X$，$y$ 落在某个 $U_{x_j}$ 里；由**单调性** $n \ge N \ge n_{x_j}$ 时 $f_{n}(y) \ge f_{n_{x_j}}(y)$，于是 $f(y) - f_n(y) \le f(y) - f_{n_{x_j}}(y) < 3\varepsilon$。

故 $\sup_y |f(y) - f_n(y)| \le 3\varepsilon$ 对一切 $n \ge N$ 成立，即 $f_n \rightrightarrows f$。∎

> 第 4 步是**单调性唯一**出场的地方：它把「$n = n_{x_j}$ 时误差小」升级成「一切 $n \ge N$ 时误差小」。没有单调性，有限覆盖给出的只是一列互不相干的点。
