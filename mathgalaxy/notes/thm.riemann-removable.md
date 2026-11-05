# Riemann 可去奇点定理　`thm.riemann-removable`　·　说明
根 `../`

⭐ 证明：对 $z \in B(a, r) \setminus \{a\}$ 与充分小的 $\varepsilon < |z - a|$，把 $f$ 写成两个 Cauchy 型积分之差 $f(z) = I_r(z) - I_\varepsilon(z)$，其中 $I_{\rho}$ 是沿 $|\zeta - a| = \rho$ 的积分（**取 $\rho < r$** —— 圆周 $|\zeta - a| = r$ 本身不在定义域里；$I_{\rho}$ 在 $B(a, \rho)$ 上全纯），$I_\varepsilon$ 是沿 $|\zeta - a| = \varepsilon$ 的积分。

估计

$$|I_\varepsilon(z)| \le \frac{\varepsilon \, \|f\|_{\partial B(a, \varepsilon)}}{|z - a| - \varepsilon} \longrightarrow 0 \qquad (\varepsilon \to 0),$$

最后一步用的正是条件 $(z - a) f(z) \to 0$。

但 $I_\varepsilon(z)$ 与 $\varepsilon \in (0, |z - a|)$ 的选取**无关**，所以只能恒为 $0$。

于是 $f = I_{\rho}$ 在 $B(a, \rho)$ 上全纯，补上 $f(a) := I_{\rho}(a)$ 即可（$\rho < r$ 任取，各 $\rho$ 给的值一致）。

⭐ 用途：它让「可去奇点」真的可以当没有。

例如 $\sin z / z$ 在 $0$ 处补成 $1$，于是 $\sin z / z$ 就是整函数；

> 续见 notes/thm.riemann-removable.2.md
