# 全忠实 $+$ 本质满 $\implies$ 范畴等价
`imp.equiv-criterion` · 推出 · strong 边 · 根 `../`

`def.ff-faithful` 忠实 / 满 / 全忠实 + `def.essentially-surjective` 本质满 → `def.cat-equivalence` 范畴等价

由 $F$ 全忠实，$\operatorname{Hom}(G(X'), G(Y')) \to \operatorname{Hom}(F G(X'), F G(Y'))$ 是双射，所以存在**唯一**的 $G(f')$ 使 $F(G(f')) = g$。这个唯一性是关键：它让 $G$ 自动保持复合与单位（两边都取 $F$ 之后相等，再用忠实性拉回来）。于是 $G$ 是函子，且 $\eta : F \circ G \implies 1_{\mathcal{C}'}$ 是自然同构。

另一半 $G \circ F \cong 1_{\mathcal{C}}$ 同法：令 $\theta = F^{-1}(\eta_{F(\cdot)})$，交换性由 $F$ 保持复合、而 $F^{-1}$ 也跟着保持交换图逐块验证。∎

> 续见 proofs/imp.equiv-criterion.3.md
