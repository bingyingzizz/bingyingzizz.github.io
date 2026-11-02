# 积分中值定理 $\implies$ Newton–Leibniz 公式
`imp.ftc-part2` · 推出 · strong 边 · 根 `../`

`thm.mean-value-integral` 积分中值定理 + `prop.integral-linear` 积分的线性与区间可加 → `thm.ftc-riemann-part2` Newton–Leibniz 公式

设 $F$ 可导、$f := F'$ 可积。取分割 $P = \{ a = x_0 < \cdots < x_n = b \}$。对每一段用 Lagrange 中值定理：存在 $\xi_i \in (x_{i-1}, x_i)$ 使

$$F(x_i) - F(x_{i-1}) = F'(\xi_i)\,\Delta x_i = f(\xi_i)\,\Delta x_i$$

对各段求和，左端**裂项**：

$$F(b) - F(a) = \sum_{i} \bigl( F(x_i) - F(x_{i-1}) \bigr) = \sum_i f(\xi_i)\,\Delta x_i = S(f, P, \xi)$$

右端正是一个 Riemann 和。令 $\|P\| \to 0$，由 $f$ 可积，$S(f, P, \xi) \to \int_a^b f$；左端与 $P$ 无关，故 $F(b) - F(a) = \int_a^b f$。∎

> 证明里没有用到积分中值定理（那是**另一条**常用证明）；这里的要点是「**裂项**」：导数在中值点取到的值恰好把所有增量接起来。这也解释了为什么必须要求 $F'$ 可积 —— 否则右端的 Riemann 和没有极限可言。
