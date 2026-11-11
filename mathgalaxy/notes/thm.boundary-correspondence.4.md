# 边界对应定理　`thm.boundary-correspondence`　·　说明
根 `../`

**为什么本图补不了。** (a) 的标准证明要用 crosscut / prime end（Carathéodory 拓扑），或境界的局部连通性加调和测度；(b) 要用 Jordan 曲线定理与 crosscut 论证。本图有 `def.prime-end` 与 `thm.jordan-curve`，但没有 crosscut 与 Carathéodory 延拓定理的证明；`thm.schwarz-reflection` 只处理解析弧（圆、直线）的反射，不能覆盖一般 Jordan 曲线。**多边形区域**是例外：此时 (a)(b) 可用 Schwarz 反射逐边拼接证明；但 SC 的注也只给策略、本图未证（`thm.schwarz-christoffel` 仍 skeleton），所以这里不把它当作已证步骤。况且那只覆盖折线边界，不是本条的一般情形。因此本条保持 `status: 'skeleton'`，缺口就是这一条定理。

**⭐ 用途。** 它给 Schwarz–Christoffel（`thm.schwarz-christoffel`，仍 skeleton）的「实轴上的 $x_{k}$ 对应多边形顶点」提供合法性。

> 续见 notes/thm.boundary-correspondence.5.md
