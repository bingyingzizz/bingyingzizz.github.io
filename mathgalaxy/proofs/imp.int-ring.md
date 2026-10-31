# 商构造 + $\mathbb{N}$ 的运算律 $\implies$ $\mathbb{Z}$ 是整环
`imp.int-ring` · 推出 · strong 边 · 根 `../`

`def.int` 整数 ℤ + `thm.nat-arith-laws` 自然数的运算律 → `thm.int-ring` ℤ 是交换整环

**良定义。** 若 $[a,b] = [a',b']$、$[c,d] = [c',d']$（即 $a + b' = a' + b$、$c + d' = c' + d$），则把两式相加并重排得 $(a+c) + (b'+d') = (a'+c') + (b+d)$，即加法良定义。乘法要长一点：由 $a + b' = a' + b$ 两边乘 $c + d'$、$c + d' = c' + d$ 两边乘 $a' + b$，再比较两个展开式，用 $\mathbb{N}$ 的分配律与消去律得 $ac + bd + a'd' + b'c' = a'c' + b'd' + ad + bc$，即 $[ac+bd,\ ad+bc] = [a'c'+b'd',\ a'd'+b'c']$。

**环公理。** 逐条搬到代表元：结合、交换、分配都变成 $\mathbb{N}$ 的对应等式（`thm.nat-arith-laws`）。零元是 $[0,0]$，幺元是 $[1,0]$，加法逆元是 $-[a,b] = [b,a]$（因 $[a,b] + [b,a] = [a+b,\ a+b] = 0$）。

> 续见 proofs/imp.int-ring.2.md
