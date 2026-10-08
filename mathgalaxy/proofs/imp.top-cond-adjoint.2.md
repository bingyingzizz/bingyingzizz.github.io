# $\mathbf{Top} \to \mathrm{Cond}$ 忠实、限制到 $k\mathbf{Top}$ 全忠实
`imp.top-cond-adjoint` · 推出 · strong 边 · 根 `../`

`def.compactly-generated` 紧生成空间 + `def.condensed-set` 凝聚态集 + `prop.cg-coreflective` 紧生成空间是余反射子范畴 → `thm.top-cond-adjoint` Top 与 Cond 的伴随

而 $\operatorname{Hom}_{\mathrm{Cond}}(\underline{X}, Z) = \operatorname{Nat}(C(-,X), Z)$，按米田式的计算，它正是「在 $S = \ast$ 处的取值」加上自然性 —— 也就是 $Z(\cdot) = Z(\ast)$ 上的一个元素，并且与所有 $\underline{X}(S) = C(S,X)$ 相容。这恰恰是「从 $X$ 出发的连续映射」，两边一一对应。∎

**忠实。** 由上面的伴随式取 $Z = \underline{Y}$：

$$\operatorname{Hom}_{\mathrm{Cond}}(\underline{X}, \underline{Y}) \;\cong\; \operatorname{Hom}_{\mathbf{Top}}\bigl(X, \underline{Y}(\cdot)\bigr)$$

> 续见 proofs/imp.top-cond-adjoint.3.md
