# 积分得到的函数绝对连续且规范有界变差　`cor.integral-is-ac-nbv`　·　说明
根 `../`

**证明。**
**(1)** 设 $f \in L^{1}(m)$、$F(x) := \int_{-\infty}^{x} f(t)\,\mathrm{d}t$。
- **$F \in NBV$**：$F$ 右连续（$x \downarrow x_{0}$ 时 $f\chi_{(-\infty,x]} \to f\chi_{(-\infty,x_{0}]}$ 逐点且被 $|f|$ 控制，用控制收敛定理）✓；$F(-\infty) = 0$ ✓；对任意划分 $\sum|F(x_{j})-F(x_{j-1})| \le \int_{a}^{b}|f| < \infty$，故 $T_{F} < \infty$ ✓。
- **$F \in AC$**：给 $\varepsilon > 0$。由 $|f| \in L^{1}$ 的绝对连续性取 $\delta > 0$ 使 $m(E) < \delta \implies \int_{E}|f| < \varepsilon$；于是对两两不交的区间族 $\bigsqcup(a_{j}, b_{j})$ 且 $\sum(b_{j}-a_{j}) < \delta$，
$$\sum_{j}|F(b_{j}) - F(a_{j})| \le \sum_{j}\int_{a_{j}}^{b_{j}}|f| = \int_{\bigcup(a_{j},b_{j})}|f| < \varepsilon \;✓$$
**(2)** 反之设 $F \in NBV \cap AC$。$F$ 有界变差 $\implies$ $F$ 可测、a.e. 可导、$F' \in L^{1}(m)$，且有 Lebesgue 分解 $dF = F'\,\mathrm{d}m + dF_{s}$（$F_{

> 续见 notes/cor.integral-is-ac-nbv.2.md
