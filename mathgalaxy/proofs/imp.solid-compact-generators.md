# 生成元 + 自由固态群是大乘积 $\implies$ 紧投射对象
`imp.solid-compact-generators` · 推出 · strong 边 · 根 `../`

`thm.solid-abelian` 固态群构成阿贝尔子范畴 + `cor.free-solid-product` 自由固态群是大乘积 → `cor.solid-compact-generators` 固态的紧投射对象

**(i)** `thm.solid-abelian` 给出一族紧投射生成元 $Z[S]^{\blacksquare}$（$S$ extremally disconnected），由 `cor.free-solid-product` 它们都是 $\prod_I \mathbb{Z}$。任意 $\prod_I \mathbb{Z}$ 可写成某个更大的 $Z[S]^{\blacksquare}$ 的收缩，而紧投射对象的收缩仍紧投射。反之，紧投射 $P$ 是某个 $\prod_I \mathbb{Z}$ 的收缩；自由阿贝尔群的收缩仍自由，逐项取对偶即知 $P$ 仍是 $\prod_J \mathbb{Z}$ 形。

**(ii)** 第一句由 (i) 形式推出。$D^b(\mathbb{Z})^{\mathrm{op}} \to D(\mathbf{Solid})^\omega$ 把有界复形送到紧对象；反向 $C \mapsto \operatorname{RHom}(C,\mathbb{Z})$ 取有界复形（用自由消解）。两者互逆。

> 续见 proofs/imp.solid-compact-generators.2.md
