# 有序域公理 $\implies$ 不等式运算
`imp.order-rules` · 推出 · strong 边 · 根 `../`

`def.ordered-field` 有序域 → `prop.order-rules` 序与四则运算

**(i)** 由相容性 $a < b \implies a + c < b + c$。反向：若 $a + c < b + c$，把 $c$ 换成 $-c$ 得 $a < b$。

**(ii)** $a < b \implies a + c < b + c$；$c < d \implies b + c < b + d$；传递得 $a + c < b + d$。

**(iii)** $a < b$ 即 $b - a > 0$。若 $c > 0$，由乘正数保序得 $(b - a)c > 0$，即 $bc > ac$。若 $c < 0$，则 $-c > 0$，$(b-a)(-c) > 0$，即 $ac - bc > 0$，故 $ac > bc$。

**(iv)** 先证 $a > 0 \implies 1/a > 0$：若 $1/a < 0$，两边乘 $a > 0$ 得 $1 < 0$，与 (v)（下面证）矛盾。于是 $a, b, ab$ 都为正，$\dfrac{1}{a} - \dfrac{1}{b} = \dfrac{b - a}{ab} > 0$（分子分母都正）。

> 续见 proofs/imp.order-rules.2.md
