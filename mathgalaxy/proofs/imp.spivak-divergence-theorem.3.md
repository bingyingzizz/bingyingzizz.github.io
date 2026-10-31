# 对 $\iota_{X}\mathrm{d}V$ 用 Stokes $\implies$ 散度定理
`imp.spivak-divergence-theorem` · 推出 · strong 边 · 根 `../`

`def.divergence` 散度 + `prop.boundary-sign-convention` 边界的符号约定 → `thm.divergence-theorem` 散度定理

第二项为零：写 $X^{\top} = \sum_{j}a_{j}v_{j}$，则它等于 $\sum_{j}a_{j}\mathrm{d}V(v_{j},v_{1},\ldots,v_{n-1})$，每一项都有两个相同的槽（$v_{j}$ 出现两次），交错性给出零。所以 $\omega(v_{1},\ldots,v_{n-1}) = \langle X,N\rangle$，即 $\omega|_{\partial M} = \langle X,N\rangle\,\mathrm{d}A$。

**（4）合并。** 代入 (2) 得 $\int_{M}(\operatorname{div}X)\mathrm{d}V = \int_{\partial M}\langle X,N\rangle\,\mathrm{d}A$。∎

⭐ 两个约定各出一半的力：诱导定向让 $(N,v_{1},\ldots,v_{n-1})$ 成为正向基（否则第一步就少一个号），外法向让 $N$ 与 $\mathrm{d}V$ 的配对恰好给出 $\langle X,N\rangle$（否则第二项不消失）。
