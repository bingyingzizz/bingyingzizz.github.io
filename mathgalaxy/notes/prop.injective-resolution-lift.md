# 内射消解之间的提升　`prop.injective-resolution-lift`　·　说明
根 `../`

**证明（比较定理的标准两步）。**
**① 存在性（逐层抬升）。** 第 $0$ 层：$M = Z^{0}_{I} \hookrightarrow I^{0}$ 是单态射（因为 $I^{-1} = 0$），复合 $M \xrightarrow{\ f\ } N \to J^{0}$ 沿这个单态射由 $J^{0}$ 的**内射性**抬成 $F^{0} : I^{0} \to J^{0}$ ✓。
归纳步：设已构造 $F^{0}, \ldots, F^{n}$，且对 $k \le n$ 有 $F^{k}d^{k-1}_{I} = d^{k-1}_{J}F^{k-1}$。要构造 $F^{n+1}$ 只需在**上边缘** $B^{n+1}_{I} = \operatorname{im}d^{n}_{I}$ 上定下它的取值，因为 $B^{n+1}_{I}\hookrightarrow I^{n+1}$ 是单态射。关键观察：$n \ge 1$ 时 $H^{n}(I^{\bullet}) = 0$，即 $Z^{n}_{I} = B^{n}_{I}$ —— 于是 $F^{n}$ 在 $Z^{n}_{I}$ 上的取值已经由前一层定下、且落在 $Z^{n}_{J}$ 里（$n \ge 1$ 时它等于 $d^{n-1}_{J}F^{n-1}$，$n = 0$ 时改用增广处的交换性）✓。因此 $d^{n}_{J}F^{n}$ 在 $\ker d^{n}_{I}$ 上为零，从而沿 $B^{n+1}_{I} \hookrightarrow I^{n+1}$ 分解；再用 $J^{n+1}$ 的**内射性**把它抬成 $F^{n+1} : I^{n+1}\to J^{n+1}$ ✓。有界下方保证这

> 续见 notes/prop.injective-resolution-lift.2.md
