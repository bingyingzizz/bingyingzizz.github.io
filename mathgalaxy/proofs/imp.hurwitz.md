# Rouché 定理 $\implies$ Hurwitz 定理
`imp.hurwitz` · 推出 · strong 边 · 根 `../`

`thm.rouche` Rouché 定理 → `thm.hurwitz` Hurwitz 定理

设 $f$ 不恒为零，且 $f(z_0) = 0$。只需在这个零点处导出矛盾。

**第一步：挖一个只含这个零点的小圆盘。** 不恒为零的全纯函数零点是孤立的，取 $r > 0$ 使 $\overline{D(z_0, r)} \subset \Omega$，且 $f$ 在 $\overline{D(z_0, r)}$ 内只有 $z_0$ 一个零点。令

$$m := \min_{|z - z_0| = r} |f(z)| > 0$$

（圆周上无零点，连续函数在紧集上有正的最小值）。

**第二步：一致收敛让扰动变小。** 在紧集 $\overline{D(z_0, r)}$ 上 $f_k \rightrightarrows f$，故当 $k$ 充分大时，对圆周上每一点

$$|f_k(z) - f(z)| \le \|f_k - f\|_{\infty} < m \le |f(z)|.$$

**第三步：用 Rouché。** 在圆周 $|z - z_0| = r$ 上以 $f$ 为主项、以 $f_k - f$ 为扰动，Rouché 定理说 $f$ 与 $f + (f_k - f) = f_k$ 在这条圆周内部的零点数相同。

> 续见 proofs/imp.hurwitz.2.md
