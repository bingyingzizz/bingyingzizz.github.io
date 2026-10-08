# 拓扑斯上的层 $\iff$ 保极限
`imp.topos-sheaf-limits` · 推出 · strong 边 · 根 `../`

`def.sheaf` 层 + `def.canonical-topology` 标准拓扑 → `prop.topos-sheaf-limits` 拓扑斯上的层即保极限的预层

**(保极限 $\implies$ 层)** 反过来，若 $F$ 保所有极限，把上式倒过来读：对每个 $R \in J(X)$，$F(X) \cong \varprojlim_{X' \in \mathcal{C}/R} F(X')$，而右边与 $\operatorname{Hom}(R, F)$ 同构（前面的计算），所以 $F$ 是层。∎

> 证明短得出奇 —— 因为**标准拓扑对覆盖筛的规定，本来就是「$X$ 是这些 $X'$ 的余极限」**。所以「层」在拓扑斯上等于「把余极限送回极限」，几何与范畴在这里合成一句话。
