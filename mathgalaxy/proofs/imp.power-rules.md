# 幂的定义 $\implies$ 指数律
`imp.power-rules` · 推出 · strong 边 · 根 `../`

`def.power` 整数幂 + `thm.nat-arith-laws` 自然数的运算律 → `prop.power-rules` 指数律与幂的单调性

**正指数。** 固定 $m \ge 0$，对 $n$ 归纳证 $a^{m+n} = a^{m}a^{n}$：$n = 0$ 时两边都是 $a^{m}$；$n \to n+1$ 时 $a^{m+n+1} = a^{m+n}a = a^{m}a^{n}a = a^{m}a^{n+1}$。

$(a^{m})^{n} = a^{mn}$：对 $n$ 归纳，用上一条。$(ab)^{n} = a^{n}b^{n}$：对 $n$ 归纳，用交换性。

**负指数。** $a^{-n} = (a^{-1})^{n}$，把上面三条用于 $a^{-1}, b^{-1}$ 即可。

**单调性。** $a > 1$ 时 $a^{n+1} - a^{n} = a^{n}(a - 1) > 0$（$a^{n} > 0$ 由 $a > 0$ 归纳），故 $n \mapsto a^{n}$ 严格递增；$m < n \iff a^{m} < a^{n}$ 随之成立。$0 < a < 1$ 时 $1/a > 1$，把结论用于 $1/a$ 并取倒数（正数取倒数反序）。$\blacksquare$
