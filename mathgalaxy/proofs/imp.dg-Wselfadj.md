# 系数对称 $\implies$ Weingarten 变换自伴
`imp.dg-Wselfadj` · 推出 · strong 边 · 根 `../`

`lem.second-form-symmetric` 第二基本形式对称 → `def.weingarten-map` Weingarten 变换

$W(e_{j}) = -\mathrm{d}n(e_{j}) = -\sum_{i}c_{ij}e_{i} = \sum_{i}h_{ij}e_{i}$，故 $W$ 相对正交基 $(e_{1}, e_{2})$ 的矩阵就是 $(h_{ij})$。于是

$$\langle W(e_{i}), e_{j}\rangle = h_{ij} = h_{ji} = \langle e_{i}, W(e_{j})\rangle ,$$

即 $W$ 自伴。又 $\langle \mathrm{d}n(v), n\rangle = \tfrac{1}{2}\,\mathrm{d}\langle n, n\rangle(v) = 0$，所以 $W$ 确实把切平面映进切平面（而不是映到法向上）。∎
