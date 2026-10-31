# Casorati–Weierstrass 定理　`thm.casorati-weierstrass`　·　说明
根 `../`

**证明（反证）**：设存在 $w_{0}$、$\rho > 0$ 使 $f(U) \cap B(w_{0}, \rho) = \emptyset$。令

$$F(z) := \frac{1}{f(z) - w_{0}}, \qquad 0 < |z - z_{0}| < r.$$

则 $|F(z)| < 1/\rho$ 在 $U$ 上有界，故 $z_{0}$ 是 $F$ 的**可去奇点**（`thm.riemann-removable`），$F$ 在 $z_{0}$ 处可补成全纯。于是 $f = w_{0} + 1/F$ 在 $z_{0}$ 附近的行为只可能是：$F(z_{0}) \ne 0$ $\implies$ $f$ 全纯；$F$ 有 $m$ 阶零点 $\implies$ $f$ 有 $m$ 阶极点；$F \equiv 0$ $\implies$ $f \equiv \infty$（不可能）。三种都与「$z_{0}$ 是本性奇点」矛盾。∎

⭐ **怎么记**：三类奇点里，可去奇点附近**有界**，极点附近**趋于无穷**，本性奇点则**什么都可能发生** —— 它把每个去心邻域的像撒得满 $\mathbb{C}$ 都是。

⚠️ Casorati–Weierstrass 只说**稠密**，不说「取到每个值」。更强的 **Picard 大定理**说：去心邻域的像**至多漏掉一个点**（且那个值至多取到有限次）—— 本图不展开，只标出处。
