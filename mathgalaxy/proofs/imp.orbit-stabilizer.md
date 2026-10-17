# 构造双射 $G/G_x \to Gx$ $\implies$ 轨道–稳定子
`imp.orbit-stabilizer` · 推出 · strong 边 · 根 `../`

`def.group-action` 群作用 + `thm.lagrange` Lagrange 定理 → `thm.orbit-stabilizer` 轨道–稳定子定理

**第一步：$G_x$ 是子群。** $e \in G_x$；若 $g, h \in G_x$，则 $(gh)\cdot x = g\cdot(h\cdot x) = g \cdot x = x$，故 $gh \in G_x$；又 $g \cdot x = x$ 两边作用 $g^{-1}$ 得 $x = g^{-1}\cdot x$，故 $g^{-1} \in G_x$。

**第二步：映射 $\varphi : G/G_x \to Gx$，$g G_x \mapsto g \cdot x$ 良定义。** 若 $g' \in gG_x$，写 $g' = g h$（$h \in G_x$），则 $g'\cdot x = g\cdot(h\cdot x) = g \cdot x$ —— 与代表元无关。

> 续见 proofs/imp.orbit-stabilizer.2.md
