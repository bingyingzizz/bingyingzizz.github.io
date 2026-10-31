# 商构造 + $\mathbb{Z}$ 是整环 $\implies$ $\mathbb{Q}$ 是有序域
`imp.rat-ordered-field` · 推出 · strong 边 · 根 `../`

`def.rat` 有理数 ℚ + `thm.int-ring` ℤ 是交换整环 → `thm.rat-ordered-field` ℚ 是有序域

**序。** 把每个元素写成 $b > 0$ 的 $a/b$（分母取相反数即可）。定义 $a/b \le c/d :\iff ad \le bc$。良定义：换代表元时两边同乘正元 $b'd' > 0$，由 `thm.int-ring` 的序相容性不等号不变。全序与两条相容性逐项验证（加法直接；乘法用 $bd > 0$ 时同乘正数保序）。

**嵌入。** $n \mapsto n/1$，保持运算与序。$\blacksquare$
