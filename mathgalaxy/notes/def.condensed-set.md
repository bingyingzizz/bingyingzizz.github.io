# 凝聚态集　`def.condensed-set`　·　说明
根 `../`

**例 1. 拓扑空间给凝聚态集。** 任一拓扑空间 $X$ 给出凝聚态集 $\underline{X}(S) := C(S, X) = \operatorname{Hom}_{\mathbf{Top}}(S, X)$ —— 从 $S$ 到 $X$ 的连续映射全体。

**例 2. 收敛序列。** 取 $X$ 是拓扑空间，则 $\underline{X}(\bar{\mathbb{N}})$ 恰好是「**收敛序列 $(x_{n})_{n \ge 1}$ 连同指定的极限 $x_{\infty}$**」的集合 —— 这里 $\bar{\mathbb{N}}$ 是 $\mathbb{N}$ 的**一点紧化**，而「收敛序列连同极限」正好就是从 $\bar{\mathbb{N}}$ 到 $X$ 的连续映射：$\mathbb{N}$ 上的像给出序列，新添那个点上的像给出极限。

**例 3. 连续函数模掉局部常值函数。** 存在唯一的凝聚态集 $Q$ 使 $Q(S) = C(S, \mathbb{R}) / C(S, \mathbb{R}^{\mathrm{disc}})$。

这三个例子的共同点：**取值都是「从紧 Hausdorff 空间出发的连续映射的某种商或子集」**。凝聚态集之所以能记住拓扑信息，靠的就是把这些映射全留下来。
