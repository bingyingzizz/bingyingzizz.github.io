# 全变差的 NBV 性质　`lem.nbv-variation`　·　说明
根 `../`

第一部分：给定 $\varepsilon > 0$ 与 $x$，取分划使 $\sum \ge T_F(x) - \varepsilon$；于是对 $y \le x_0$ 有 $T_F(y) \le \varepsilon$。由 $\varepsilon$ 任意，$T_F(-\infty) = 0$。

第二部分：设 $\alpha = T_F(x+) - T_F(x)$。由 $F$ 右连续，对充分小的 $h$ 有 $|F(x+h) - F(x)| < \varepsilon$ 且 $T_F(x+h) - T_F(x+) < \varepsilon$；再从两边各取分划夹住，得到



$$(3/2)\alpha - \varepsilon \le T_F(x+h) - T_F(x) < \varepsilon + \alpha$$



于是 $\alpha < 4\varepsilon$，由 $\varepsilon$ 任意得 $\alpha = 0$。∎

⭐ 这条保证「全变差」这个操作**保持 NBV**：$F \in NBV \implies T_F \in NBV$，正是下一条定理里 $|\mu _F| = \mu _\{T_F\}$ 的根据。
