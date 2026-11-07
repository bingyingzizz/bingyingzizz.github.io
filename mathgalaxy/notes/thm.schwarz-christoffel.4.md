# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

于是 $\varphi$ 与 $1/\varphi$ 都是整函数且在 $\infty$ 有界，由 Liouville 定理 $\varphi \equiv A$。积分得

$$f(z) = A\int_{z_{0}}^{z} g(\zeta)\,\mathrm{d}\zeta + B.$$

这就证明了公式的**形式**（这一半完整）。

**第二部分：存在性（未完成，缺三步）**

反过来给定多边形与 $x_{k}$，令 $F(z) = A\int^{z}_{z_{0}} g(\zeta)\,\mathrm{d}\zeta + B$。已知：

- $F' = A g$ 在 $\mathbb{H}$ 上无零点，故 $F$ 是局部共形的；

- 在每个区间 $(x_{k}, x_{k+1})$ 上 $\arg g$ 是常值（因为 $(x - x_{k})$ 的辐角只取 $0$ 或 $\pi$，符号由 $x > x_{k}$ 决定），故 $F$ 把每个区间映成一条直线段；走过 $x_{k}$ 时 $\arg F'$ 跳变 $\pi(\alpha_{k}-1)$，即内角为 $\alpha_{k}\pi$；

- $g(\zeta) = O(\zeta^{-2})$，积分在 $\pm\infty$ 都收敛，$F$ 连续到 $\partial\mathbb{H}$ 的整个边界（含 $\infty$）。

⚠️ 缺的三步（本图不写，因此保留 skeleton）：

> 续见 notes/thm.schwarz-christoffel.5.md
