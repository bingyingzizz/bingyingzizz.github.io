# $\mathbf{Top} \to \mathrm{Cond}$ 忠实、限制到 $k\mathbf{Top}$ 全忠实
`imp.top-cond-adjoint` · 推出 · strong 边 · 根 `../`

`def.compactly-generated` 紧生成空间 + `def.condensed-set` 凝聚态集 + `prop.cg-coreflective` 紧生成空间是余反射子范畴 → `thm.top-cond-adjoint` Top 与 Cond 的伴随

而关键的一步是：**$\underline{Y}(\cdot) \cong kY$**（把 $Y$ 换成它的 $k$-化，拓扑可能变细）。于是

$$\operatorname{Hom}_{\mathrm{Cond}}(\underline{X}, \underline{Y}) \;\cong\; \operatorname{Hom}_{\mathbf{Top}}(X, kY) \;\cong\; \operatorname{Hom}_{k\mathbf{Top}}(kX, kY)$$

（最后一个同构因为 $k\mathbf{Top}$ 是余反射子范畴，$k$ 是含入的右伴随：$kX$ 处的映射等同于一切从 $X$ 出发射入紧生成空间的映射。）

> 续见 proofs/imp.top-cond-adjoint.4.md
