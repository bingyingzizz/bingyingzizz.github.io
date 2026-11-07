# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

最后一个等号由 Abel 求和（分部积分）得到：$\sum_{n \le x}\Lambda(n) = \psi(x)$。于是 $\psi$ 的 Mellin 变换就是 $-\zeta'/(s\zeta)$；由命题 A，它在 $\{\operatorname{Re} s \ge 1\}$ 上除 $s = 1$ 外全纯，而 $s = 1$ 是单极点、留数为 $1$（因为 $\zeta$ 在 $1$ 附近形如 $1/(s-1) + O(1)$，故 $-\zeta'/\zeta \sim 1/(s-1)$）。把命题 B 用于 $f = \psi$（$\psi$ 非负、单调不减）得 $\psi(x) \sim x$，再由上面的等价性得素数定理。

⚠️ **缺的正是命题 A 与命题 B 的证明**：命题 A 需要 $\zeta$ 的解析延拓（Euler–Maclaurin 或 Abel 求和）、$\zeta(1+it) \ne 0$ 的经典论证（$3 + 4\cos\theta + \cos 2\theta \ge 0$ 推出 $\zeta(1+it) \ne 0$）；命题 B 是 Ingham/Newman 的 Tauber 定理，需要围道积分与增长估计。两者都不在「中等档」的篇幅内，本图不硬编——这就是本节点保留 skeleton 的原因。

> 续见 notes/thm.prime-number-theorem.6.md
