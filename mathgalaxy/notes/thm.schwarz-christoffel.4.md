# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

反过来给定多边形与 $x_{k}$，令 $F(z) = A\int^{z}_{z_{0}} g(\zeta)\,\mathrm{d}\zeta + B$。已知：

- $F' = A g$ 在 $\mathbb{H}$ 上无零点，故 $F$ 是局部共形的；

- 在每个区间 $(x_{k}, x_{k+1})$ 上 $\arg g$ 是常值（因为 $(x - x_{k})$ 的辐角只取 $0$ 或 $\pi$，符号由 $x > x_{k}$ 决定），故 $F$ 把每个区间映成一条直线段；走过 $x_{k}$ 时 $\arg F'$ 跳变 $\pi(\alpha_{k}-1)$，即内角为 $\alpha_{k}\pi$；

- $g(\zeta) = O(\zeta^{-2})$，积分在 $\pm\infty$ 都收敛，$F$ 连续到 $\partial\mathbb{H}$ 的整个边界（含 $\infty$）。

⚠️ 缺的三步（本图不写，因此保留 skeleton）：

（i）**边界曲线的简单性**：要证 $F(\partial\mathbb{H})$ 是简单闭折线（无自交）。仅凭「分段直线 + 内角正确」不够——同一组内角可以有自交的折线；标准证法要把多边形沿边反射、用 Schwarz 反射把 $F$ 解析延拓到拼接区域，再证延拓是单值的、逐块覆盖平面。

> 续见 notes/thm.schwarz-christoffel.5.md
