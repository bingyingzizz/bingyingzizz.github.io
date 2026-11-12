# 完备化判据 + 关键计算 $\implies$ $\mathbf{Solid}$ 是阿贝尔子范畴
`imp.solid-abelian` · 推出 · strong 边 · 根 `../`

`lem.solid-completion-criterion` 完备化判据 + `prop.free-solid-solid` 自由固态群是固态的 + `cor.free-solid-product` 自由固态群是大乘积 + `thm.breen-deligne` Breen–Deligne 分解 → `thm.solid-abelian` 固态群构成阿贝尔子范畴

**预备。** 取 $\mathcal{A} = \operatorname{Cond}(\mathbf{Ab})$，$\mathcal{A}_0 = \{\mathbb{Z}[S] : S\ \text{extremally disconnected}\}$（紧投射生成元），$F(\mathbb{Z}[S]) = Z[S]^{\blacksquare}$。

要验证 `lem.solid-completion-criterion` 的假设。

**第一步：化到「$\prod_I\mathbb{Z}$ 型」的复形。** 由 `cor.free-solid-product`，每个 $Z[T]^{\blacksquare} \cong \prod_I \mathbb{Z}$。

> 续见 proofs/imp.solid-abelian.2.md
