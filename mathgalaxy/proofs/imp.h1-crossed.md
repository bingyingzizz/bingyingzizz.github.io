# 上链复形的低次项 $\implies$ 一维上同调就是交叉同态模主交叉同态
`imp.h1-crossed` · 推出 · strong 边 · 根 `../`

`def.group-cohomology` 群上同调 + `def.bar-resolution` 标准消解 → `thm.h1-crossed` 一维上同调与交叉同态

**第一步：写下 $C^{1}$ 与两个微分。** 由上一条的翻译，

$$C^{0}(G, M) = M, \qquad C^{1}(G, M) = \{c : G \to M\}, \qquad C^{2}(G, M) = \{c : G \times G \to M\},$$

$$(\delta^{0} m)(g) = g m - m, \qquad (\delta^{1} c)(g_{1}, g_{2}) = g_{1} c(g_{2}) - c(g_{1}g_{2}) + c(g_{1}).$$

**第二步：$Z^{1}$ 就是交叉同态。** $\delta^{1} c = 0$ $\iff$ $c(g_{1}g_{2}) = g_{1}c(g_{2}) + c(g_{1})$，正是交叉同态关系（左端调换书写顺序即得题述形式）。

**第三步：$B^{1}$ 就是主交叉同态。** $B^{1} = \operatorname{im}\delta^{0}$，而 $\delta^{0}m$ 就是函数 $g \mapsto g m - m$，即 $d_{m}$。

> 续见 proofs/imp.h1-crossed.2.md
