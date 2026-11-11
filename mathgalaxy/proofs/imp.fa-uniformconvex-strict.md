# 一致凸 $\implies$ 严格凸
`imp.fa-uniformconvex-strict` · 推出 · strong 边 · 根 `../`

`def.uniformly-convex` 一致凸 → `def.strictly-convex` 严格凸

设 $X$ 一致凸，取 $\|x\| = \|y\| = 1$、$x \ne y$，令 $\varepsilon = \|x - y\| > 0$。
由一致凸，存在 $\delta = \delta(\varepsilon) > 0$ 使 $\|(x + y)/2\| \le 1 - \delta < 1$。
按 `def.strictly-convex` 的定义，这正是严格凸。$\blacksquare$

> 严格凸是独立定义，不由一致凸构造；这条只是逻辑包含，故不分层。反向不成立：存在严格凸但不一致凸的 Banach 空间。
