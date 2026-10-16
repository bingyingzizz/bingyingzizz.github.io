# 单位同构 $\implies$ 左伴随全忠实
`imp.adjoint-ff` · 推出 · strong 边 · 根 `../`

`def.adjunction-unit` 单位与余单位 + `def.ff-faithful` 忠实 / 满 / 全忠实 → `prop.adjoint-full-faithful` 全忠实与单位

设 $F \dashv G$。对 $X, Y \in \mathcal{C}$，串起伴随的同构：

$$\operatorname{Hom}_{\mathcal{C}}(X, Y) \xrightarrow{\ F\ } \operatorname{Hom}_{\mathcal{D}}\bigl(F(X), F(Y)\bigr) \xrightarrow{\ \Phi_{X, F(Y)}\ } \operatorname{Hom}_{\mathcal{C}}\bigl(X, G F(Y)\bigr)$$

第二个箭头是双射，且复合把 $f$ 送到 $G F(f) \circ \eta_{X}$（这是 $\Phi$ 的显式公式）。所以第一个箭头（即 $F$ 在 Hom 集上的作用）是双射当且仅当

$$\operatorname{Hom}_{\mathcal{C}}(X, Y) \xrightarrow{\ \eta_{X} \ \circ\, -\ } \operatorname{Hom}_{\mathcal{C}}\bigl(X, G F(Y)\bigr)$$

是双射，当且仅当 $\eta_{X}$ 是同构（取 $Y$ 使 $GF(Y)$ 覆盖所需的目标即可）。

> 续见 proofs/imp.adjoint-ff.2.md
