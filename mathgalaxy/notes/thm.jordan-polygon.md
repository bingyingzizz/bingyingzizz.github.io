# 多边形 Jordan 定理　`thm.jordan-polygon`　·　说明
根 `../`

**证明结构**：先证补集里有「射线交点奇偶」这个二值不变量（第一、二步），再用对角线引理 `lem.polygon-diagonal` 归纳出三角剖分（第三步），最后用三角剖分把补集分成两个开集、证明它们互不相通（第四至七步）。

**约定**。$P$ 是简单闭多边形，$K$ 是 $P$ 围成的多边形区域（射线奇偶 $\Phi=1$ 的一侧加上边界，见下），$\operatorname{int}K$ 是它的内部。结论：$\mathbb{R}^{2}\setminus P$ **恰有两个连通分量**，一个是 $\operatorname{int}K$（有界），另一个是 $\mathbb{R}^{2}\setminus K$（无界），两者都以 $P$ 为边界。

> 续见 notes/thm.jordan-polygon.2.md
