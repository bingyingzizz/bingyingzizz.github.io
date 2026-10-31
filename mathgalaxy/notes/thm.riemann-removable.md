# Riemann 可去奇点定理　`thm.riemann-removable`　·　说明
根 `../`

⭐ 证明：对 $z \in D(a, r) \setminus \{a\}$ 与充分小的 $\varepsilon < |z - a|$，把 $f$ 写成两个 Cauchy 型积分之差 $f(z) = I_r(z) - I_\varepsilon(z)$，其中 $I_r$ 是沿 $|\zeta - a| = r$ 的积分（在 $D(a, r)$ 上全纯），$I_\varepsilon$ 是沿 $|\zeta - a| = \varepsilon$ 的积分。估计

$$|I_\varepsilon(z)| \le \frac{\varepsilon \, \|f\|_{\partial D(a, \varepsilon)}}{|z - a| - \varepsilon} \longrightarrow 0 \qquad (\varepsilon \to 0),$$

最后一步用的正是条件 $(z - a) f(z) \to 0$。但 $I_\varepsilon(z)$ 与 $\varepsilon \in (0, |z - a|)$ 的选取**无关**，所以只能恒为 $0$。于是 $f = I_r$ 在 $D(a, r)$ 上全纯，补上 $f(a) := I_r(a)$ 即可。

⭐ 用途：它让「可去奇点」真的可以当没有。例如 $\sin z / z$ 在 $0$ 处补成 $1$，于是 $\sin z / z$ 就是整函数；$z^k f(z)$ 的零点阶、以及「全纯函数在零点附近可写成 $(z - a)^k \psi(z)$」都要靠它。

> 续见 notes/thm.riemann-removable.2.md
