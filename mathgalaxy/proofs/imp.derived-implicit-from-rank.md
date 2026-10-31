# 秩定理的淹没情形 $r = m$ 就是隐函数定理
`imp.derived-implicit-from-rank` · 推出 · strong 边 · 根 `../`

`cor.rank-theorem` 常秩定理 → `thm.implicit-function` 隐函数定理

沿用隐函数定理的记号：$F : U \subseteq \mathbb{R}^{n} \times \mathbb{R}^{m} \to \mathbb{R}^{m}$，$F(a,b) = 0$，$D_{y}F(a,b)$ 可逆。

**① 秩恒为 $m$。** $D_{y}F$ 是 $DF$ 里的一整块 $m \times m$ 子矩阵，它可逆 $\implies \operatorname{rank} DF(a,b) \ge m$；而值域是 $\mathbb{R}^{m}$，故秩恰为 $m$。由 $\det D_{y}F \ne 0$ 在 $(a,b)$ 附近持续成立，秩在邻域上恒为 $r = m$。

> 续见 proofs/imp.derived-implicit-from-rank.2.md
