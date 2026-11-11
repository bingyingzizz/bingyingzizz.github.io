# Jordan 曲线定理　`thm.jordan-curve`　·　说明
根 `../`

**第一步：分量即道路分量。** $\mathbb{R}^{2}\setminus C$ 是 $\mathbb{R}^{2}$ 的开子集，故局部道路连通；局部道路连通空间里连通分量与道路分量一致。

**第二步：恰两个分量。** 设 $\mathbb{R}^{2}\setminus C$ 有 $n$ 个连通分量（$n \in \mathbb{N}\cup\{\infty\}$）。对局部道路连通、局部紧的空间，$\widetilde{H}_{0}$ 是以分量为基的自由阿贝尔群，故 $\operatorname{rank}\widetilde{H}_{0} = n-1$（$n$ 有限时）。由 (A) 的 $\operatorname{rank}\widetilde{H}_{0} = 1$ 得 $n = 2$。

**第三步：一个有界、一个无界。** $C$ 紧，故有 $R$ 使 $C \subseteq B(0,R)$。于是 $\mathbb{R}^{2}\setminus B(0,R) \subseteq \mathbb{R}^{2}\setminus C$，而 $\mathbb{R}^{2}\setminus B(0,R)$ 道路连通；它落在某一个分量里，那个分量无界。另一个分量必含于 $B(0,R)$，故有界。

> 续见 notes/thm.jordan-curve.3.md
