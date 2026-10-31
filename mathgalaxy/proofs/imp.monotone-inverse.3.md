# 介值定理 + 单调有界 $\implies$ 反函数连续
`imp.monotone-inverse` · 推出 · strong 边 · 根 `../`

`thm.ivt` 介值定理 + `thm.monotone-convergence` 单调有界定理 → `thm.monotone-inverse` 反函数连续

f(x_0 + \varepsilon)$，取 $\delta := \min\{y_0 - y_{-},\ y_{+} - y_0\} > 0$。则 $|y - y_0| < \delta$ 时 $y_{-} < y < y_{+}$，由第 3 步的单调性得 $x_0 - \varepsilon < f^{-1}(y) < x_0 + \varepsilon$，即 $|f^{-1}(y) - x_0| < \varepsilon$。∎

> 证明里只用到了「严格单调 + 介值」，**没有**用到一致连续 —— 反函数连续是比「$f$ 一致连续」更弱的条件就能得到的结论。
