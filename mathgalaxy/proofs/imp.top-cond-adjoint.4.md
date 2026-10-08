# $\mathbf{Top} \to \mathrm{Cond}$ 忠实、限制到 $k\mathbf{Top}$ 全忠实
`imp.top-cond-adjoint` · 推出 · strong 边 · 根 `../`

`def.compactly-generated` 紧生成空间 + `def.condensed-set` 凝聚态集 + `prop.cg-coreflective` 紧生成空间是余反射子范畴 → `thm.top-cond-adjoint` Top 与 Cond 的伴随

当 $X$ 本身紧生成时 $kX = X$，上式就是 $\operatorname{Hom}_{\mathrm{Cond}}(\underline{X}, \underline{Y}) \cong \operatorname{Hom}_{k\mathbf{Top}}(X, kY)$，逐对 $X, Y$ 都是双射 —— **限制到 $k\mathbf{Top}$ 上全忠实**。对一般 $X$，$X \to kX$ 是同一集合上的恒等映射，所以函子在态射层仍是单射 —— **在 $\mathbf{Top}$ 上忠实**。∎

> 一句话记住：**「拓扑空间 $\to$ 凝聚态集」这件事丢掉的东西，正好就是 $k$-化丢掉的东西。** 所以在 $k\mathbf{Top}$ 上它不丢信息。
