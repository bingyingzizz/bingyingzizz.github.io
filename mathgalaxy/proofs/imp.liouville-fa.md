# Liouville 定理 $\implies$ 代数基本定理（复分析路线）
`imp.liouville-fa` · 推出 · strong 边 · 根 `../`

`thm.liouville` Liouville 定理 → `thm.fundamental-algebra` 代数基本定理

设 $p(z) = a_n z^n + \cdots + a_1 z + a_0$，$n \ge 1$，$a_n \ne 0$。反设 $p$ 在 $\mathbb{C}$ 上没有零点。

**$1/p$ 是整函数。** $p$ 处处不为零，故 $g := 1/p$ 在 $\mathbb{C}$ 上全纯（商的求导法则逐点可用）。

**$1/p$ 有界。** 先估 $|p|$ 的下界（不妨设 $|z| \ge 1$）：

$$|p(z)| \ge |a_n||z|^n - \sum_{k=0}^{n-1}|a_k||z|^k \ge |a_n||z|^n - n\,C\,|z|^{n-1},$$

其中 $C = \max_{k < n}|a_k|$。右端当 $|z|$ 足够大时 $\ge \frac{|a_n|}{2}|z|^n \to +\infty$。故存在 $R_0$ 使 $|z| > R_0$ 时 $|p(z)| \ge 1$，从而 $|g(z)| \le 1$。在紧集 $\overline{D(0, R_0)}$ 上 $g$ 连续、因而有界，设为 $M_0$。于是 $|g| \le \max\{1, M_0\}$ 在全平面成立。

**用 Liouville。** $g$ 是有界整函数，故 $g$ 是常数，从而 $p = 1/g$ 也是常数 —— 与 $n \ge 1$（$a_n \ne 0$）矛盾。

> 续见 proofs/imp.liouville-fa.2.md
