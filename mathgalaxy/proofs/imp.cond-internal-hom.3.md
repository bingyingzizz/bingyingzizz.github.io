# imp.cond-internal-hom
`imp.cond-internal-hom` · 推出 · strong 边 · 根 `../`

`def.condensed-set` 凝聚态集 + `def.topos` 拓扑斯 + `def.chaus` 紧 Hausdorff 空间范畴 + `def.hausdorff` Hausdorff 空间 → `prop.cond-internal-hom` 内部 Hom 的函数空间刻画

operatorname{Hom}(X, \underline{Y})) \cong \operatorname{Hom}(X, \operatorname{Hom}(S, \underline{Y})) \cong \operatorname{Hom}\bigl(X, C(S, Y)\bigr) \cong C\bigl(X(\bullet), C(S, Y)\bigr) \cong C\bigl(S, C(X(\bullet), Y)\bigr),$$
最后一步又是指数律。于是两边作为 $\mathbf{CHaus}$ 上的层逐点同构，即自然同构。
**紧生成的情形**：$X$ 也紧生成时，$X(\bullet) = X$（底空间就是它自己），且两侧都落在 $\mathrm{CGWH}$ 里，取 $k$-化即得 $kC(X, Y) \cong \operatorname{Hom}(X, \underline{Y})$。

> 续见 proofs/imp.cond-internal-hom.4.md
