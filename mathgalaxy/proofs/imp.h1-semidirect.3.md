# 交叉同态 + 半直积 $\implies$ 一维上同调分类分裂结构
`imp.h1-semidirect` · 推出 · strong 边 · 根 `../`

`thm.h1-crossed` 一维上同调与交叉同态 + `def.semidirect-product` 半直积 → `thm.h1-semidirect` 一维上同调与分裂扩张

所以 $A$-共轭类恰是 $d$ 模 $B^{1}(G, A)$。另一方面，任何保持 $i$ 与 $\pi$ 的扩张同构 $E \to E$ 由 $\alpha(i(a)s(g)) = i(a)\alpha(s(g))$ 决定，而 $\alpha \circ s$ 是另一个同态截面，于是又回到上面那族 $d$ —— 即「扩张等价」与「$A$-共轭」是同一件事。

**③ 零类就是半直积那一档。** 若 $E = A \rtimes_{\varphi} G$ 且 $s(g) = (0, g)$ 是规范截面，则 $s_{d}(g) = (d(g), g)$；而 $i(a)^{-1}(0,g)i(a) = (g\cdot a - a,\ g)$。于是 $s_{d}$ 与 $s$ 共轭 $\iff$ $d = g \mapsto g\cdot a - a \in B^{1}$，即 $[d] = 0$。

> 续见 proofs/imp.h1-semidirect.4.md
