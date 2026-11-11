# 多边形 Jordan 定理　`thm.jordan-polygon`　·　说明
根 `../`

**第六步：合起来恰两个分量。** $A$ 与 $B$ 都是开集、都非空、且 $\mathbb{R}^{2}\setminus P = A \sqcup B$：$P$ 上的点被挖掉；不在 $P$ 上的点要么在某三角形内部或内部边上（属于 $K$，即 $A$），要么不在 $K$ 里（属于 $B$）。若有一条道路从 $A$ 连到 $B$，它的像连通且含于两个不相交开集之并，只能落在其中一个里，矛盾。所以 $A$、$B$ 就是全部两个分量：一个是有界的 $\operatorname{int}K$ 那一侧，一个是无界的 $\mathbb{R}^{2}\setminus K$。

**第七步：边界。** $A,B$ 都开，故 $\partial A \subseteq P$、$\partial B \subseteq P$；反过来，$P$ 上任一点 $x$ 的任意小邻域里既有 $A$ 的点（$x$ 在 $\partial K$ 上）又有 $B$ 的点，故 $P \subseteq \partial A \cap \partial B$。两边合起来 $\partial A = \partial B = P$。

> 续见 notes/thm.jordan-polygon.7.md
