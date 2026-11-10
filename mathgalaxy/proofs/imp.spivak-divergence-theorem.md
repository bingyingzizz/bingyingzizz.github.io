# 对 $\iota_{X}\mathrm{d}V$ 用 Stokes $\implies$ 散度定理
`imp.spivak-divergence-theorem` · 推出 · strong 边 · 根 `../`

`def.divergence` 散度 + `prop.boundary-sign-convention` 边界的符号约定 + `thm.stokes` Stokes 定理 → `thm.divergence-theorem` 散度定理

**（1）造一个 $(n-1)$-形式。** 令 $\omega := \iota_{X}\mathrm{d}V$。

按散度的等价定义（Cartan 公式那一版），$\mathrm{d}\omega = (\operatorname{div}X)\,\mathrm{d}V$。

$\omega$ 在 $M$ 上光滑，故可限制到 $\partial M$。

**（2）用 Stokes。** $M$ 紧致、定向、带边，由 `thm.stokes`

$$\int_{M}(\operatorname{div}X)\,\mathrm{d}V = \int_{M}\mathrm{d}\omega = \int_{\partial M}\omega .$$

**（3）认出边界上的 $\omega$。** 取 $p\in\partial M$ 与 $T_{p}\partial M$ 的一组正向基 $(v_{1},\ldots,v_{n-1})$。

> 续见 proofs/imp.spivak-divergence-theorem.2.md
