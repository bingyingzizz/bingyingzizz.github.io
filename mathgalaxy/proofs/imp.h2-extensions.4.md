# 群扩张 + $2$-上圈 $\implies$ $H^{2}$ 分类扩张
`imp.h2-extensions` · 推出 · strong 边 · 根 `../`

`def.group-extension` 群扩张 + `def.cocycle-2` 二维上圈与上边界 + `def.group-cohomology` 群上同调 → `thm.h2-group-extensions` 二维上同调分类群扩张

$$(a_{1}, g_{1})(a_{2}, g_{2}) := \bigl(a_{1} + g_{1}a_{2} + c(g_{1}, g_{2}),\ g_{1}g_{2}\bigr).$$

单位元是 $(0, 1)$（用归一化 $c(1, g) = c(g, 1) = 0$，它可由换截面达到）；结合律的等式两端之差恰是 $\delta^{2}c = 0$，故这是群 $E_{c}$。投影 $(a, g) \mapsto g$ 是满同态、核是 $A \times \{1\} \cong A$，于是得到扩张。

**两个方向互逆。** 从扩张读出的 $c$ 再按方向二造 $E_{c}$，则 $(a, g) \mapsto i(a)\sigma(g)$ 是群同构 $E_{c} \to E$（直接验乘法：$i(a_{1})\sigma(g_{1})\, i(a_{2})\sigma(g_{2}) = i(a_{1} + g_{1}a_{2} + c(g_{1},g_{2}))\sigma(g_{1}g_{2})$）；

> 续见 proofs/imp.h2-extensions.5.md
