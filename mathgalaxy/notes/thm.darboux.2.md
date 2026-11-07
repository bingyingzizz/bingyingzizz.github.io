# Darboux 定理　`thm.darboux`　·　说明
根 `../`

**第二步：造 $\omega_{0}$，使 $\omega_{0}(p) = \omega(p)$**。在 $T_{p}M$ 上取第一步的辛基 $e_{i}, f_{i}$，即 $\omega_{p}(e_{i}, f_{j}) = \delta_{ij}$、其余配对为零。取以 $p$ 为心的图卡 $(U, x)$（$x(p) = 0$），令 $q_{i}, p_{i}$ 为对偶基给出的坐标，$\omega_{0} = \sum_{i=1}^{n} dq_{i} \wedge dp_{i}$。则 $\omega_{0}$ 常系数、闭、非退化，且 $\omega_{0}(p) = \omega_{p}$。

**第三步：Moser 同伦与 $\theta$**。令 $\eta = \omega - \omega_{0}$。它是 $U$ 上的闭 2-形式，且 $\eta(p) = 0$。把 $U$ 取成以 $p$ 为心的球（星形、可缩）；由 `lem.poincare-lemma`（$k = 2 \ge 1$）存在 1-形式 $\theta \in \Omega^{1}(U)$ 使 $\eta = d\theta$。对 $t \in [0, 1]$ 令 $\omega_{t} = \omega_{0} + t\eta$。每个 $\omega_{t}$ 都闭，且由 $\eta(p) = 0$ 得 $\omega_{t}(p) = \omega(p)$ 与 $t$ 无关。非退化性是开条件，$[0, 1]$ 紧，故可把 $U$ 再缩小，使**所有** $\omega_{t}$（$t \in [0, 1]$）都非退化。

> 续见 notes/thm.darboux.3.md
