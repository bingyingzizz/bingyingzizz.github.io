# 紧性 + 单调 + 连续性 $\implies$ Dini 定理
`imp.dini` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `def.continuous` 连续 + `def.compact` 紧 → `thm.dini` Dini 定理

1. 对每个 $x \in X$，由逐点单调收敛存在 $n_x$ 使 $0 \le f(x) - f_{n_x}(x) < \varepsilon$（这里用到了「$f_n(x)$ 单调递增地收敛到 $f(x)$」）。
2. 由 $f$ 与 $f_{n_x}$ 都连续，存在 $x$ 的邻域 $U_x$ 使 $y \in U_x$ 时 $|f(y) - f(x)| < \varepsilon$ 且 $|f_{n_x}(y) - f_{n_x}(x)| < \varepsilon$。合并：$y \in U_x$ 时 $f(y) - f_{n_x}(y) < 3\varepsilon$。
3. $\{U_x\}_{x \in X}$ 是紧空间 $X$ 的开覆盖，取出有限子覆盖 $U_{x_1}, \ldots, U_{x_k}$，令 $N := \max\{n_{x_1}, \ldots, n_{x_k}\}$。
4. 对任意 $y \in X$，$y$ 落在某个 $U_{x_j}$ 里；由**单调性** $n \ge N \ge n_{x_j}$ 时 $f_{n}(y) \ge f_{n_{x_j}}

> 续见 proofs/imp.dini.3.md
