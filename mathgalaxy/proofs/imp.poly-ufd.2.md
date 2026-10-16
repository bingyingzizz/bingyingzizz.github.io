# 带余除法 $\implies$ 唯一分解
`imp.poly-ufd` · 推出 · strong 边 · 根 `../`

`thm.division-algorithm` 带余除法 → `thm.poly-ufd` K[x] 是唯一分解整环

**第二步：不可约 $\implies$ 素。** 设 $p$ 不可约、$p \mid fg$。若 $p \nmid f$，则 $\gcd(p, f) = 1$，由 Bézout 有 $ap + bf = 1$；两边乘 $g$：$apg + bfg = g$。左端两项都被 $p$ 整除（第一项显然，第二项因为 $p \mid fg$），故 $p \mid g$。

**第三步：存在性。** 对 $\deg f$ 归纳：若 $f$ 不可约则已分解完；否则 $f = gh$ 且 $\deg g, \deg h < \deg f$，对两者归纳。

> 续见 proofs/imp.poly-ufd.3.md
