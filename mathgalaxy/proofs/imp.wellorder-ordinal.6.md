# 递归定理 + 替换公理 $\implies$ 每个良序集有唯一序型
`imp.wellorder-ordinal` · 推出 · strong 边 · 根 `../`

`thm.recursion-wellorder` 超限递归 + `ax.repl` 替换公理模式 + `ax.found` 正则公理 + `thm.ordinal-trichotomy` 序数可比 → `thm.wellorder-ordinal` 良序集的序型

**引理**（上一步用到）：良序集 $(L, \prec)$ 不可能与它的真初始段 $L_{< a} = \{ x \in L : x \prec a \}$ 序同构。
证：设 $h : L \to L_{< a}$ 是序同构。对 $x \prec a$ 用**超限归纳**：若 $\forall y \prec x,\ h(y) = y$，则 $h(x)$ 是 $L_{< a}$ 中大于一切 $h(y) = y\ (y \prec x)$ 的最小元，也就是「大于一切 $y \prec x$ 的最小元」，即 $h(x) = x$（序同构把「小于 $x$ 的全部元素」映成「小于 $h(x)$ 的全部元素」）。故 $h$ 在 $L_{< a}$ 上恒等；于是 $h(a)$ 是 $L_{< a}$ 中大于一切 $y \prec a$ 的最小元，即 $h(a) = a$ —

> 续见 proofs/imp.wellorder-ordinal.7.md
