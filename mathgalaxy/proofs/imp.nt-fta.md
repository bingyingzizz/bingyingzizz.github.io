# 唯一分解：归纳 + Euclid 引理
`imp.nt-fta` · 推出 · strong 边 · 根 `../`

`thm.int-division` 整数的带余除法 → `thm.fundamental-arithmetic` 算术基本定理

**存在性**：对 $n$ 归纳。$n$ 素则 $n = n$；否则 $n = ab$、$1 < a, b < n$，由归纳假设 $a, b$ 各有分解，乘起来即得 $n$ 的分解（再按大小重排、合并同素因子）。



**唯一性**：设 $p_{1}\cdots p_{r} = q_{1}\cdots q_{s}$。$p_{1}$ 整除右边，由 Euclid 引理（$p \mid xy \implies p \mid x$ 或 $p \mid y$，对乘积归纳）得 $p_{1} = q_{j}$ 对某个 $j$；两边约掉 $p_{1}$，对 $r + s$ 归纳即得 $r = s$ 且两边的素因子多重集相同。



Euclid 引理本身来自带余除法：若 $p \nmid a$，则 $\gcd(p, a) = 1$，由 Bézout 有 $up + va = 1$，两边乘 $b$ 得 $upb + vab = b$ —— 而 $p$ 整除右边两项（$p \mid ab$ 与 $p \mid upb$），故 $p \mid b$。
