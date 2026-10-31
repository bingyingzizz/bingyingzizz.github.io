# Cauchy 积分公式 $\implies$ Riemann 可去奇点定理
`imp.removable` · 推出 · strong 边 · 根 `../`

`thm.cauchy-integral-formula` Cauchy 积分公式 → `thm.riemann-removable` Riemann 可去奇点定理

$$|I_\varepsilon(z)| \le \frac{1}{2\pi}\cdot\frac{\max_{|\zeta - a| = \varepsilon}|f(\zeta)|}{|z - a| - \varepsilon}\cdot 2\pi\varepsilon = \frac{\varepsilon\,\|f\|_{\partial D(a, \varepsilon)}}{|z - a| - \varepsilon}.$$

条件 $\lim_{z \to a}(z - a)f(z) = 0$ 说的正是 $\varepsilon \|f\|_{\partial D(a, \varepsilon)} \to 0$（把 $z$ 取成圆上使 $|f|$ 最大的点）。故 $I_\varepsilon(z) \to 0$。

**$\varepsilon$ 不能被「取极限」牵动。** $I_\varepsilon(z)$ 由 $f$ 在圆周 $|\zeta - a| = \varepsilon$ 上的值决定；而对每个固定的 $\varepsilon \in (0, |z - a|)$，它是 $f(z) - I_r(z)$ 的一部分，是个**定值**。既然它被任意小的常数压住，只能是 $0$。

> 续见 proofs/imp.removable.3.md
