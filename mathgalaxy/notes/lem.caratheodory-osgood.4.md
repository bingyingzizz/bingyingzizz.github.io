# Carathéodory–Osgood 边界对应　`lem.caratheodory-osgood`　·　说明
根 `../`

**为什么需要 Jordan 条件**：只要求「单连通 + 边界局部连通」不够。取 $\Omega=\mathbb{C}\setminus(-\infty,0]$（沿负实轴剪开的平面），它单连通、边界是射线（局部连通），但平方根在剪缝两侧趋向不同的纯虚值，延拓在剪缝上不连续——这说明 A 的有界性假设不能去掉；Riemann 映射到 $\mathbb{D}$ 在剪缝的两侧没有共同极限。「边界是一条简单闭曲线」排除了这种两侧趋向不同极限的情形；而 B（边界单射）也依赖 Jordan 条件：若边界非 Jordan 而延拓单射，则连续单射把紧的边界映入单位圆，从紧到 Hausdorff 必为同胚，迫使边界同胚于圆，与梳状区域矛盾。

**与 Schwarz–Christoffel 的关系**：多边形区域（有界多边形内部）的边界是一条 Jordan 曲线，所以 A、B 适用；它们给出 S–C 存在性的 (i)（映射连续到边界、边界点一一对应）。但 S–C 还缺 (iii) 参数与边长的匹配，故 `thm.schwarz-christoffel` 仍标 skeleton。

> 续见 notes/lem.caratheodory-osgood.5.md
