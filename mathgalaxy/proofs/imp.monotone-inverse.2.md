# 介值定理 + 单调有界 $\implies$ 反函数连续
`imp.monotone-inverse` · 推出 · strong 边 · 根 `../`

`thm.ivt` 介值定理 + `thm.monotone-convergence` 单调有界定理 → `thm.monotone-inverse` 反函数连续

1. **$f(I)$ 是区间**：取 $y_1 < y_2$ 属于 $f(I)$，即 $y_i = f(x_i)$。由严格递增 $x_1 < x_2$。任取 $y \in (y_1, y_2)$，则 $f(x_1) < y < f(x_2)$，由介值定理在 $[x_1, x_2]$ 上存在 $x$ 使 $f(x) = y$，故 $y \in f(I)$。
2. **$f$ 是双射**：严格递增给出单射，$f(I)$ 的定义给出满射。
3. **$f^{-1}$ 递增**：若 $y_1 < y_2$ 而 $f^{-1}(y_1) \ge f^{-1}(y_2)$，由 $f$ 递增就有 $y_1 \ge y_2$，矛盾。
4. **$f^{-1}$ 连续**：设 $y_0 = f(x_0)$，给定 $\varepsilon > 0$。由 $x_0$ 在 $I$ 内部的情形（端点同理）取 $x_0 - \varepsilon < x_0 < x_0 + \varepsilon$ 都落在 $I$ 内。令 $y_{-} := f(x_0 - \varepsilon)$、$y_{+} := 

> 续见 proofs/imp.monotone-inverse.3.md
