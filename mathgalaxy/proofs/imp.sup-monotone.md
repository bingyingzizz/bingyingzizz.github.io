# 确界原理 $\implies$ 单调有界定理
`imp.sup-monotone` · 推出 · strong 边 · 根 `../`

`thm.real-ordered-field` ℝ 是完备有序域 → `thm.monotone-convergence` 单调有界定理

设 $\{x_n\}$ 递增且有上界。令 $s := \sup_{n} x_n$ —— 由确界原理，这个上确界存在（集合非空且有上界）。

要证 $x_n \to s$。给定 $\varepsilon > 0$。$s - \varepsilon$ 不是 $\{x_n\}$ 的上界（$s$ 是最小上界），所以存在 $N$ 使 $x_N > s - \varepsilon$。由单调性，$n \ge N$ 时 $x_n \ge x_N > s - \varepsilon$；又恒有 $x_n \le s$。故 $n \ge N$ 时 $|x_n - s| < \varepsilon$。

递减且有下界的情形取 $\inf$ 同理。∎

> 这一步是整条等价链的**唯一入口**：后面五条都从它出发，最后再转回来（见「完备性的六条等价」）。
