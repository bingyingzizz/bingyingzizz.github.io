# 「直和就是积」给出分裂短正合列的等价判据
`imp.derived-split-exact-biproduct` · 推出 · strong 边 · 根 `../`

`prop.biproduct-is-product` 直和就是积 → `def.split-exact` 分裂短正合列

于是 $\{i, p, r, s\}$ 满足双积的三条等式 $ri = 1_{M_{1}}$、$ps = 1_{M_{2}}$、$ir+sp = 1_{M}$。由「直和就是积」，这三条等式连同 $pi = 0$ 使 $M$ 成为 $M_{1}$ 与 $M_{2}$ 的**双积**：$(M,p)$ 是积、$(M,i)$ 是余积，特别地 $M \cong M_{1}\oplus M_{2}$ 且该列同构于标准列，即分裂。

**分裂就有截面。** 分裂时该列同构于 $0 \to M_{1} \xrightarrow{\operatorname{pr}_{1}} M_{1}\oplus M_{2} \xrightarrow{\operatorname{pr}_{2}} M_{2} \to 0$，而 $\operatorname{pr}_{2}$ 有显然的截面 $m_{2}\mapsto (0,m_{2})$。

两条合起来给出分裂短正合列的三条等价判据。$\blacksquare$

> 关键的一步是「双积的三条等式」，而那正是「直和就是积」的内容 —— 没有它就只能说「该列分裂」，说不出 $M$ 是直和。
