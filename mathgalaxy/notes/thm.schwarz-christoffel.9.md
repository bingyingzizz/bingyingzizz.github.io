# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

**引理 B（简单性与绕数）**：设 $F$ 在 $\mathbb{H}$ 内局部共形、连续到 $\partial\mathbb{H}$；若 $F(\partial\mathbb{H})$ 是简单闭曲线、$F(\mathbb{H})$ 落在其内部，且对该内部的每个 $w$，$F(\partial\mathbb{H})$ 绕 $w$ 的绕数为 $1$，则 $F$ 单叶。标准做法是把多边形沿边反射拼接，用 Schwarz 反射（`thm.schwarz-reflection`）延拓 $F$ 并数覆盖重数；这一步同时给出（i）与（ii）。

**为什么是这些指数**：沿实轴走过 $x_{k}$ 时，$\arg f'$ 跳变 $\pi(\alpha_{k} - 1)$，恰好把切向转过去 $\pi - \alpha_{k}\pi$ —— 正是外角。

⭐ **它是「造映射」的工业级工具**：机翼、渠道、电容器这些工程问题都归结为「先把区域近似成多边形，再用 S–C 公式搬到半平面」——搬到半平面之后 Laplace 方程的解就有现成的形式（Poisson 积分，`thm.poisson-formula`）。

> 续见 notes/thm.schwarz-christoffel.10.md
