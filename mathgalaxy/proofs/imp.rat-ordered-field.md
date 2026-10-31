# 商构造 + $\mathbb{Z}$ 是整环 $\implies$ $\mathbb{Q}$ 是有序域
`imp.rat-ordered-field` · 推出 · strong 边 · 根 `../`

`def.rat` 有理数 ℚ + `thm.int-ring` ℤ 是交换整环 → `thm.rat-ordered-field` ℚ 是有序域

**良定义。** 设 $a/b = a'/b'$、$c/d = c'/d'$（即 $ab' = a'b$、$cd' = c'd$，且分母非零）。加法：要证 $(ad + bc)(b'd') = (a'd' + b'c')(bd)$，把 $ab' = a'b$ 乘 $dd'$、$cd' = c'd$ 乘 $bb'$，相加即得。乘法同理（用 $ac b'd' = a'c' bd$）。

**域公理。** 全部搬到代表元上，就是 $\mathbb{Z}$ 的环公理（`thm.int-ring`）；加法逆元 $-a/b = (-a)/b$。

**乘法逆元。** $a/b \ne 0$ 即 $a \ne 0$，此时 $(a/b)(b/a) = ab/ba = 1$（交换性用上了；$b a \ne 0$ 用到 $\mathbb{Z}$ 无零因子）。

> 续见 proofs/imp.rat-ordered-field.2.md
