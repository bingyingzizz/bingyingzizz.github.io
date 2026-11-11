# 简单多边形的对角线　`lem.polygon-diagonal`　·　说明
根 `../`

**先说明一个前提：$\operatorname{int}K$ 是什么。** 本图在 `thm.jordan-polygon` 的注里给出「射线交点奇偶 $\Phi$」的定义与良定性（按水平条带：每个条带内 $P$ 的边都是从下边界贯到上边界、互不相交的曲线 $x = x_i(y)$，$\Phi$ 就是「左侧墙数 mod 2」）。$\operatorname{int}K$ 就取 $\Phi = 1$ 的那一侧。这一步只用平面几何，不用 Jordan 曲线定理。

**第一步：存在凸顶点。** 取 $P$ 中 $y$ 最小、并列时 $x$ 最小的顶点 $v$，记其邻居为 $a,b$。$P$ 的全部顶点都在闭半平面 $y \ge y_v$ 内，与 $v$ 同高的顶点都在 $v$ 右侧（这是并列规则）。于是 $v$ 处的内角 $< \pi$：$v$ 是凸顶点，且从 $v$ 出发、方向落在角 $\angle avb$ 内部的射线，其起点一小段必在 $\operatorname{int}K$ 里。

> 续见 notes/lem.polygon-diagonal.3.md
