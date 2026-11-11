# 多边形 Jordan 定理　`thm.jordan-polygon`　·　说明
根 `../`

**第三步：三角剖分（输入：`lem.polygon-diagonal`）。** 对顶点数归纳：$n = 3$ 时 $K$ 本身就是一个三角形。$n \ge 4$ 时由 `lem.polygon-diagonal` 取一条对角线，把 $P$ 分成两个顶点数更少的简单多边形，分别归纳。结果：$K = T_1 \cup \cdots \cup T_{n-2}$，$T_i$ 是闭三角形，两两内部不交，交集是公共边或公共顶点，且 $\partial K = P$。

**第四步：$A := K \setminus P$ 道路连通。**

> 续见 notes/thm.jordan-polygon.4.md
