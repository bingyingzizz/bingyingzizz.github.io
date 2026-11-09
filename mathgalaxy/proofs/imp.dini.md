# 紧性 + 单调 + 连续性 $\implies$ Dini 定理
`imp.dini` · 推出 · strong 边 · 根 `../`

`def.uniform-convergence` 一致收敛 + `def.continuous` 连续（ε-δ 判据） + `def.compact` 紧 → `thm.dini` Dini 定理

若 $X=\emptyset$ 结论平凡；以下设 $X$ 非空（$X\ne\emptyset$）。

以 $f_n \uparrow f$ 为例（$f_n \downarrow f$ 时对 $-f_n$ 用同样的论证）。给定 $\varepsilon > 0$。

1. 对每个 $x \in X$，由逐点单调收敛存在 $n_x$ 使 $0 \le f(x) - f_{n_x}(x) < \varepsilon$（这里用到了「$f_n(x)$ 单调递增地收敛到 $f(x)$」）。
2. 由 $f$ 与 $f_{n_x}$ 都连续，存在 $x$ 的邻域 $U_x$ 使 $y \in U_x$ 时 $|f(y) - f(x)| < \varepsilon$ 且 $|f_{n_x}(y) - f_{n_x}(x)| < \varepsilon$。

> 续见 proofs/imp.dini.2.md
