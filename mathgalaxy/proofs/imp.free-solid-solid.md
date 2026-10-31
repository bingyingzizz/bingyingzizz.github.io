# 大乘积 + $\mathbb{R}$ 可缩 $\implies$ 自由固态群固态
`imp.free-solid-solid` · 推出 · strong 边 · 根 `../`

`cor.free-solid-product` 自由固态群是大乘积 + `thm.csz-free` 连续函数群是自由的 + `prop.solid-hypercover` 固态化把超覆盖变成正合列 → `prop.free-solid-solid` 自由固态群是固态的

要证对一切 profinite $T$，$\operatorname{RHom}(Z[T]^{\blacksquare}, Z[S]^{\blacksquare}) \cong \operatorname{RHom}(\mathbb{Z}[T], Z[S]^{\blacksquare})$。由 `cor.free-solid-product` 可设 $Z[S]^{\blacksquare} = \mathbb{Z}$（一般情形是 $\prod$ 的直和，逐项算）。此时左边用

$$0 \to \prod_J \mathbb{Z} \to \prod_J \mathbb{R} \to \prod_J \mathbb{R}/\mathbb{Z} \to 0$$

计算：$\prod_J \mathbb{R}$ 是凝聚态 $\mathbb{R}$-模，故 $\operatorname{RHom}(\prod_J \mathbb{R}, \mathbb{Z}) = 0$；而 $\operatorname{RHom}(\prod_J \mathbb{R}/\mathbb{Z}, \mathbb{Z}) = \bigoplus_J \mathbb{Z}[-1]$。合起来

> 续见 proofs/imp.free-solid-solid.2.md
