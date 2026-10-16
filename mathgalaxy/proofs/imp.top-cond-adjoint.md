# $\mathbf{Top} \to \mathrm{Cond}$ 忠实、限制到 $k\mathbf{Top}$ 全忠实
`imp.top-cond-adjoint` · 推出 · strong 边 · 根 `../`

`def.compactly-generated` 紧生成空间 + `def.condensed-set` 凝聚态集 + `prop.cg-coreflective` 紧生成空间是余反射子范畴 → `thm.top-cond-adjoint` Top 与 Cond 的伴随

**$\underline{X}$ 是凝聚态集。** 对任一点集 $S$，$\underline{X}(S) = C(S, X)$；$C(-, X)$ 把 $\mathbf{CHaus}$ 里的**有限不交并**变成有限积、把**商**变成核（连续映射在无交并上与商上都是逐块决定的）。由凝聚态集的两条判据，$\underline{X}$ 是凝聚态集。∎

**伴随。** 函子 $X \mapsto \underline{X}$ 与 $Z \mapsto Z(\cdot)$ 之间要给出

$$\operatorname{Hom}_{\mathrm{Cond}}(\underline{X}, Z) \;\cong\; \operatorname{Hom}_{\mathbf{Top}}\bigl(X, Z(\cdot)\bigr)$$

> 续见 proofs/imp.top-cond-adjoint.2.md
