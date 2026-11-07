# 边界对应定理　`thm.boundary-correspondence`　·　说明
根 `../`

**为什么本图补不了。** (a) 的标准证明要用 crosscut / prime end（Carathéodory 拓扑），或境界的局部连通性加调和测度；(b) 要用 Jordan 曲线定理与 crosscut 论证。本图**没有** Carathéodory、crosscut、prime end、Jordan 曲线定理的节点；`thm.schwarz-reflection` 只处理解析弧（圆、直线）的反射，不能覆盖一般 Jordan 曲线。**多边形区域**是例外：此时 (a)(b) 可用 Schwarz 反射逐边拼接证明（见 `thm.schwarz-christoffel` 的注），但那只覆盖折线边界，不是本条的一般情形。因此本条保持 `status: 'skeleton'`，缺口就是这一条定理。

**⭐ 用途。** 它给 Schwarz–Christoffel（`thm.schwarz-christoffel`，仍 skeleton）的「实轴上的 $x_{k}$ 对应多边形顶点」提供合法性。

> 续见 notes/thm.boundary-correspondence.4.md
