# Carathéodory–Osgood 提供 S–C 的存在性
`dep.sc-caratheodory` · 推出 · strong 边 · 根 `../`

`lem.caratheodory-osgood` Carathéodory–Osgood 边界对应 → `thm.schwarz-christoffel` Schwarz–Christoffel 公式

S–C 要证：给定内角 $\alpha_{k}\in(0,2]$ 的多边形 $P$，存在上半平面到 $P$ 的共形映射，形状为 $f(z)=A\int^{z}\prod_{k}(\zeta-x_{k})^{\alpha_{k}-1}\,d\zeta+B$。形式那一半已在本节点完整证明；存在性用的正是 `lem.caratheodory-osgood`：多边形边界是 Jordan 曲线，故共形映射 $\mathbb{H}\to P$ 连续延拓到闭包、边界一一对应。有了这个延拓才能说「$x_{k}$ 映到第 $k$ 个顶点」，才能用 Schwarz 反射算出 $f^{\prime}$ 的形状；没有它，证明停在「内部双全纯」，连顶点都指不出来。∎

> S–C 存在性的 (i)（多边形边界是 Jordan 曲线，共形映射连续延拓、边界点一一对应）由本引理提供；引用它而不是直接引用 `thm.riemann-mapping`。
