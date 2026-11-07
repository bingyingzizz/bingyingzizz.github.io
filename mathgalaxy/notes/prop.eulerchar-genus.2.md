# Euler 示性数与亏格　`prop.eulerchar-genus`　·　说明
根 `../`

**零、约定与记号。** $S$ 是闭曲面（`def.closed-surface`），$g=\tfrac12\operatorname{rank}H_{1}(S;\mathbb{Z})$（`def.genus`，直接当定义用）。$\chi(S)$ 由任一三角剖分算：`thm.euler-characteristic` 给 $\chi(K)=\sum_{p}(-1)^{p}\alpha_{p}=\sum_{p}(-1)^{p}\beta_{p}(K)$，`thm.simplicial-approximation` 给 $\beta_{p}(K)=\beta_{p}(S)$，故 $\sum_{p}(-1)^{p}\beta_{p}(S)$ 与剖分无关，把它记作 $\chi(S)$。本注把「$S$ 可定向」按拓扑意义理解：存在**定向图册**——图卡是同胚、转移映射在重叠处保向（这就是 `def.orientable-manifold` 去掉光滑性，即 `def.topological-orientability`；见第七节）。取定一个定向。

**一、三角剖分（输入：Radó）。** `thm.rado`（skeleton）断言紧曲面可三角剖分：存在有限单纯复形 $K$ 与同胚 $h:|K|\to S$。这是本条唯一的外部定理输入。

> 续见 notes/prop.eulerchar-genus.3.md
