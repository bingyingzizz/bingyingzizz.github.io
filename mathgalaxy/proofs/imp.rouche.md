# 辐角原理 $\implies$ Rouché 定理
`imp.rouche` · 推出 · strong 边 · 根 `../`

`thm.argument-principle` 辐角原理 → `thm.rouche` Rouché 定理

**第一步：把 $f$ 与 $f + g$ 连起来。** 对 $t \in [0, 1]$ 令 $h_t := f + t g$。在 $\gamma$ 上

$$|h_t| \ge |f| - t|g| \ge |f| - |g| > 0,$$

所以每个 $h_t$ 在 $\gamma$ 上都没有零点，辐角原理对每个 $t$ 都能用。

**第二步：数零点的量是整数。** 令

$$N(t) := \frac{1}{2\pi i}\oint_{\gamma} \frac{h_t'(z)}{h_t(z)}\,\mathrm{d}z.$$

由辐角原理，$N(t)$ 就是 $h_t$ 在 $\gamma$ 内部的零点数（按重数），是整数。

**第三步：它连续。** 被积函数 $(z, t) \mapsto \dfrac{h_t'(z)}{h_t(z)} = \dfrac{f'(z) + t g'(z)}{f(z) + t g(z)}$ 在紧集 $\gamma \times [0, 1]$ 上连续（分母那里 $|f + tg| \ge |f| - |g| > 0$），故关于 $t$ 一致连续，$N$ 连续。

> 续见 proofs/imp.rouche.2.md
