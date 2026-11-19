# imp.polygon-diagonal
`imp.polygon-diagonal` · 推出 · strong 边 · 根 `../`

`def.jordan-curve` Jordan 曲线 + `def.convex-set` 凸集 → `lem.polygon-diagonal` 简单多边形的对角线

**证明**用「旋转射线」：从凸顶点 $v$ 出发，把方向从一条邻边连续转到另一条，看射线第一次撞上 $P$ 的位置。第一步取 $v$，第二、四步是两个情形共用的准备，第三、五步分别处理「撞点在边内部」与「转到边界边」两种情形；最后一段是退化情形的说明。

**约定**。$P = v_0v_1\cdots v_{n-1}$ 是简单闭多边形（`def.jordan-curve` 的多边形特例：折线无自交点、首尾相接）。$K$ 指 $P$ 围成的多边形区域，$\operatorname{int}K$ 是它的内部。**对角线**指连接两个不相邻顶点 $v_i,v_j$、且开线段 $(v_i,v_j)$ 落在 $\operatorname{int}K$ 里的线段。

> 续见 proofs/imp.polygon-diagonal.2.md
