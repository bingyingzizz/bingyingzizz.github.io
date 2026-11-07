# Euler 示性数与亏格　`prop.eulerchar-genus`　·　说明
根 `../`

**七、状态与剩下的缺口。** ①本图未证的唯一外部定理：Radó（`thm.rado`，skeleton）。②可定向性已是节点：`def.topological-orientability`（定向图册 / 定向双覆盖）。本图另有光滑版（`def.orientable-manifold`、`prop.volume-form-orientation`）与 $\mathbb{R}^{3}$ 外在版（`def.orientable-surface`）；光滑定义不能直接搬到拓扑曲面，除非先证光滑化（那又要 Radó/Whitehead），本注第二节就在拓扑意义下重述了它。③因此本条标 `status: 'skeleton'`：证明**条件于 Radó**（`thm.rado` 仍是 skeleton）；Radó 补完后可删本节点 status（可定向性见 `def.topological-orientability`，不影响结论）。④另一可选口径（不改陈述，由父会话定）：把假设改成「可三角剖分的闭可定向曲面」，则本条立刻完整——但那会把 Radó 从定理变成假设。

> 续见 notes/prop.eulerchar-genus.8.md
