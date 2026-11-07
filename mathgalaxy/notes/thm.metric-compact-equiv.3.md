# 紧的三个等价刻画　`thm.metric-compact-equiv`　·　说明
根 `../`

**② (b) $\implies$ (c)：列紧 $\implies$ 完备 + 全有界。** **完备**：设 $\{x_{n}\}$ Cauchy，由 (b) 有子列 $x_{n_{k}} \to x$。任给 $\varepsilon > 0$，取 $N$ 使 $n, m \ge N$ 时 $d(x_{n}, x_{m}) < \varepsilon/2$，再取 $k$ 使 $n_{k} \ge N$ 且 $d(x_{n_{k}}, x) < \varepsilon/2$；则 $n \ge N$ 时 $d(x_{n}, x) \le d(x_{n}, x_{n_{k}}) + d(x_{n_{k}}, x) < \varepsilon$，故 $x_{n} \to x$ ✓。**全有界**：反设存在 $\varepsilon > 0$ 使 $X$ 没有有限的 $\varepsilon$-网。取 $x_{1} \in X$；若 $x_{1}, \ldots, x_{n}$ 已取好且两两距离 $\ge \varepsilon$，则 $\{x_{1}, \ldots, x_{n}\}$ 不是 $\varepsilon$-网，故存在 $x_{n+1}$ 使 $d(x_{n+1}, x_{i}) \ge \varepsilon$（$i \le n$）。如此得到两两距离 $\ge \varepsilon$ 的序列，它没有 Cauchy 子列、更没有收敛子列 —— 与 (b) 矛盾 ✓。⚠️ 这里的递归取点用**可数选择**（DC）。

> 续见 notes/thm.metric-compact-equiv.4.md
