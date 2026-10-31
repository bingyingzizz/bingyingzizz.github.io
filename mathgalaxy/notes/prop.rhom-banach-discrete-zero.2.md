# 有限维 Banach 到离散群全零　`prop.rhom-banach-discrete-zero`　·　说明
根 `../`

**证明。** 用上一条的谱序列（$S$ 取 Stonean），要证收敛项为零，只需证每一格 $E^{p,q}_{1}$ 为零。
- $M^{s_{p,i}}$ 是有限维实向量空间的（可能大）幂，**凸 $\implies$ 可缩**；
- 而 $M^{s_{p,i}}\times S \to S$ 是同伦等价，$M^{s_{p,i}}\times S$ **局部紧 Hausdorff**、$N$ **离散**，于是由 Dyckhoff（局部紧 + 离散系数：凝聚态 = 层上同调）与「层上同调是同伦不变量」得
$$H^{q}\bigl(M^{s_{p,i}}\times S,\ N\bigr) \cong H^{q}(S,\ N).$$
- 右边**完全不含 $M$**。于是这一族 $E_{1}$ 项与 $M$ 无关：把 $M = 0$ 代进去得到同一族 $E_{1}$ 项，而 $\operatorname{RHom}_{\mathbb{Z}}(0, N) = 0$，谱序列收敛到 $0$；由谱序列的收敛性（$E_{1}$ 项决定极限），一般 $M$ 的收敛项也为 $0$。∎
**一般 $\mathbb{R}$-模的情形**：$\operatorname{RHom}_{\mathbb{Z}}(V, N) = \operatorname{RHom}_{\mathbb{R}}(V, \operatorname{RHom}_{\mathbb{Z}}(\mathbb{R}, N)) = \operatorname{RHom}_{\mathbb{R}}(V, 0) = 0$（$\operatorname{RHom}_{\mathbb{Z}}(\mathbb{R},

> 续见 notes/prop.rhom-banach-discrete-zero.3.md
