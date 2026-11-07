# 商构造 + $\mathbb{Z}$ 是整环 $\implies$ $\mathbb{Q}$ 是有序域
`imp.rat-ordered-field` · 推出 · strong 边 · 根 `../`

`def.rat` 有理数 ℚ + `thm.int-ring` ℤ 是交换整环 → `thm.rat-ordered-field` ℚ 是有序域

**① 运算良定义。** 设 $a/b = a'/b'$、$c/d = c'/d'$，即 $ab' = a'b$、$cd' = c'd$（分母非零）。

加法：第一式乘 $dd'$、第二式乘 $bb'$ 后相加，得 $(ad + bc)b'd' = (a'd' + b'c')bd$。

乘法：两式相乘，得 $(ac)(b'd') = (a'c')(bd)$。
**② 域公理。** 结合、交换、分配逐项搬到代表元，全部化成 $\mathbb{Z}$ 的环公理（`thm.int-ring`）。

零元是 $0/1$、幺元是 $1/1$、加法逆元是 $(-a)/b$；$0/1 \ne 1/1$ 因为 $0 \cdot 1 \ne 1 \cdot 1$。

> 续见 proofs/imp.rat-ordered-field.2.md
