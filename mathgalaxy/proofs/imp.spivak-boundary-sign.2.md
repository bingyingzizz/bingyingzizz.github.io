# 逐面算行列式 $\implies$ 代数边界就是诱导定向的边界
`imp.spivak-boundary-sign` · 推出 · strong 边 · 根 `../`

`def.boundary-operator` 边界算子 + `def.boundary-manifold` 带边流形 → `prop.boundary-sign-convention` 边界的符号约定

**（2）把外法向搬到最前面。** 按诱导定向，$v$ 是 $F_{i,\alpha}$ 的正向基，当且仅当 $(N,v)$ 是 $\mathbb{R}^{n}$ 的正向基。计算这个行列式：

$$\det(N,v) = (-1)^{\alpha+1}\det(e_{i},e_{1},\ldots,\widehat{e_{i}},\ldots,e_{n}) = (-1)^{\alpha+1}(-1)^{i-1} = (-1)^{i+\alpha}.$$

中间那一步：矩阵 $(e_{i},e_{1},\ldots,\widehat{e_{i}},\ldots,e_{n})$ 是单位阵把第 $i$ 列搬到第 $1$ 列，需要 $i-1$ 次对换，故行列式为 $(-1)^{i-1}$。

**（3）读结论。** $\det(N,v) = (-1)^{i+\alpha}$，所以 $v$ 在 $F_{i,\alpha}$ 上为正，当且仅当 $(-1)^{i+\alpha} = +1$；而 $\partial c$ 给这一面的系数正是 $(-1)^{i+\alpha}$。两者逐面相同，命题成立。∎

> 续见 proofs/imp.spivak-boundary-sign.3.md
