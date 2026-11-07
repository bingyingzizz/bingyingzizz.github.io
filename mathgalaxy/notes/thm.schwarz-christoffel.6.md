# Schwarz–Christoffel 公式　`thm.schwarz-christoffel`　·　说明
根 `../`

**引理 A（Carathéodory–Osgood，Jordan 区域情形）**：Jordan 区域到单位圆盘的共形映射连续延拓为闭包同胚。多边形是 Jordan 区域，故 $F$ 的边界对应成立。

**引理 B（简单性与绕数）**：设 $F$ 在 $\mathbb{H}$ 内局部共形、连续到 $\partial\mathbb{H}$；若 $F(\partial\mathbb{H})$ 是简单闭曲线、$F(\mathbb{H})$ 落在其内部，且对该内部的每个 $w$，$F(\partial\mathbb{H})$ 绕 $w$ 的绕数为 $1$，则 $F$ 单叶。标准做法是把多边形沿边反射拼接，用 Schwarz 反射（`thm.schwarz-reflection`）延拓 $F$ 并数覆盖重数；这一步同时给出（i）与（ii）。

**为什么是这些指数**：沿实轴走过 $x_{k}$ 时，$\arg f'$ 跳变 $\pi(\alpha_{k} - 1)$，恰好把切向转过去 $\pi - \alpha_{k}\pi$ —— 正是外角。

> 续见 notes/thm.schwarz-christoffel.7.md
