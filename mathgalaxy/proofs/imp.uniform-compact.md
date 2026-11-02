# 列紧性 + 一致连续的定义 $\implies$ Cantor 定理
`imp.uniform-compact` · 推出 · strong 边 · 根 `../`

`thm.bolzano-weierstrass` Bolzano–Weierstrass 定理 + `def.uniform-continuity` 一致连续 → `thm.uniform-continuity-compact` 紧集上连续 ⟹ 一致连续

反证。设 $f$ 在紧度量空间 $X$ 上连续但不一致连续。则存在 $\varepsilon_0 > 0$，使对每个 $\delta > 0$ 都能找到两点距离小于 $\delta$、函数值却相差至少 $\varepsilon_0$：

即：对每个 $n$ 都能在 $X$ 中取到两点，同时满足下面两个条件 ——

$$d(x_n, x_n') < \frac{1}{n}, \qquad |f(x_n) - f(x_n')| \ge \varepsilon_0$$

> 续见 proofs/imp.uniform-compact.2.md
