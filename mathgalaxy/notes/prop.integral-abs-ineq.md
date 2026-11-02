# 积分绝对值不等式　`prop.integral-abs-ineq`　·　说明
根 `../`

**证明。** 若 $\int f\,\mathrm{d}\mu = 0$ 则两边都是 $0$。否则——
- **实值**：取 $\alpha := \operatorname{sgn}\bigl(\int f\,\mathrm{d}\mu\bigr) \in \{\pm1\}$，则 $\alpha\int f = \bigl|\int f\bigr|$，于是
$$\Bigl|\int f\,\mathrm{d}\mu\Bigr| = \alpha\int f\,\mathrm{d}\mu = \int \alpha f\,\mathrm{d}\mu \le \int |f|\,\mathrm{d}\mu;$$
- **复值**：取 $\alpha := e^{-i\theta}$，$\theta := \arg\int f\,\mathrm{d}\mu$。则 $\alpha\int f = \bigl|\int f\bigr|$ 是实数，而
$$\Bigl|\int f\,\mathrm{d}\mu\Bigr| = \int \alpha f\,\mathrm{d}\mu = \int \operatorname{Re}(\alpha f)\,\mathrm{d}\mu \le \int |\alpha f|\,\mathrm{d}\mu = \int|f|\,\mathrm{d}\mu,$$
中间那步用的是「$u \le v$ 逐点 $\implies \int u \le \int v$」（实值情形）以及 $\operatorname{Re}(z) \le |z|$ ✓。∎

> 续见 notes/prop.integral-abs-ineq.2.md
