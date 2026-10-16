# 可积的定义 $\implies$ 保序与绝对值不等式
`imp.integral-order` · 推出 · strong 边 · 根 `../`

`def.riemann-integrable` Riemann 可积 → `prop.integral-order` 积分的保序与估计

**保序**：设 $f \le g$ 处处成立。对每个分割 $P$ 与每个标记 $\xi$ 都有 $S(f, P, \xi) \le S(g, P, \xi)$，令 $\|P\| \to 0$ 得 $\int f \le \int g$。特别地 $f \ge 0 \implies \int f \ge 0$。

**绝对值**：由 $|f| = f^{+} + f^{-}$，其中 $f^{+} := \max(f, 0)$、$f^{-} := \max(-f, 0)$ 都是「连续函数与 $f$ 的复合」，可积（用振幅判据：$\omega(|f|) \le \omega(f)$ 逐段成立）。又 $-|f| \le f \le |f|$，由保序性得

$$-\int |f| \le \int f \le \int |f| \quad\Longrightarrow\quad \Bigl| \int_a^b f \Bigr| \le \int_a^b |f|$$

**基本估计**：$|f| \le M$ 时由保序性 $\int |f| \le \int M = M(b - a)$，配合上一条即得。∎

> $\omega(|f|) \le \omega(f)$ 是逐段证明的：$\sup |f| - \inf |f| \le \sup f - \inf f$（反向三角不等式）。
