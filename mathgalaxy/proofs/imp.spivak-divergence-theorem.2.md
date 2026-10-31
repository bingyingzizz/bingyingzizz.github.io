# 对 $\iota_{X}\mathrm{d}V$ 用 Stokes $\implies$ 散度定理
`imp.spivak-divergence-theorem` · 推出 · strong 边 · 根 `../`

`def.divergence` 散度 + `prop.boundary-sign-convention` 边界的符号约定 → `thm.divergence-theorem` 散度定理

**（3）认出边界上的 $\omega$。** 取 $p\in\partial M$ 与 $T_{p}\partial M$ 的一组正向基 $(v_{1},\ldots,v_{n-1})$。按诱导定向（外法向在前，见 `prop.boundary-sign-convention`），$(N,v_{1},\ldots,v_{n-1})$ 是 $T_{p}M$ 的正向标准正交基，故 $\mathrm{d}V(N,v_{1},\ldots,v_{n-1}) = 1$。写 $X = \langle X,N\rangle N+X^{\top}$，其中 $X^{\top}\in T_{p}\partial M$。于是

$$\omega(v_{1},\ldots,v_{n-1}) = \mathrm{d}V(X,v_{1},\ldots,v_{n-1}) = \langle X,N\rangle\,\mathrm{d}V(N,v_{1},\ldots,v_{n-1})+\mathrm{d}V(X^{\top},v_{1},\ldots,v_{n-1}) .$$

> 续见 proofs/imp.spivak-divergence-theorem.3.md
