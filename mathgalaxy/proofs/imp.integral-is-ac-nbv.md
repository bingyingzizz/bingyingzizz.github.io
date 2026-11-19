# imp.integral-is-ac-nbv
`imp.integral-is-ac-nbv` · 推出 · strong 边 · 根 `../`

`def.nbv` 规范有界变差函数 + `def.integrable` 可积 / L¹ → `cor.integral-is-ac-nbv` 积分得到的函数绝对连续且规范有界变差

**证明。**
**(1)** 设 $f \in L^{1}(m)$、$F(x) := \int_{-\infty}^{x} f(t)\,\mathrm{d}t$。
- **$F \in NBV$**：$F$ 右连续（$x \downarrow x_{0}$ 时 $f\chi_{(-\infty,x]} \to f\chi_{(-\infty,x_{0}]}$ 逐点且被 $|f|$ 控制，用控制收敛定理）✓；

$F(-\infty) = 0$ ✓；

对任意划分 $\sum|F(x_{j})-F(x_{j-1})| \le \int_{a}^{b}|f| < \infty$，故 $T_{F} < \infty$ ✓。
- **$F \in AC$**：给 $\varepsilon > 0$。

由 $|f| \in L^{1}$ 的绝对连续性取 $\delta > 0$ 使 $m(E) < \delta \implies \int_{E}|f| < \varepsilon$；

> 续见 proofs/imp.integral-is-ac-nbv.2.md
