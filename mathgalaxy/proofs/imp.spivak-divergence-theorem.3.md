# 对 $\iota_{X}\mathrm{d}V$ 用 Stokes $\implies$ 散度定理
`imp.spivak-divergence-theorem` · 推出 · strong 边 · 根 `../`

`def.divergence` 散度 + `prop.boundary-sign-convention` 边界的符号约定 → `thm.divergence-theorem` 散度定理

**（4）合并。** 代入 (2) 得 $\int_{M}(\operatorname{div}X)\mathrm{d}V = \int_{\partial M}\langle X,N\rangle\,\mathrm{d}A$。∎

⭐ 两个约定各出一半的力：诱导定向让 $(N,v_{1},\ldots,v_{n-1})$ 成为正向基（否则第一步就少一个号），外法向让 $N$ 与 $\mathrm{d}V$ 的配对恰好给出 $\langle X,N\rangle$（否则第二项不消失）。
