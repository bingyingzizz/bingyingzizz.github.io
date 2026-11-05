# 一致度量的完备性来自 $E$ 的完备性
`imp.fa-ck-banach` · 推出 · strong 边 · 根 `../`

`def.ck-space` C(K,E) + `def.complete` 完备 → `thm.ck-complete` C(K,E) 完备

设 $(f_n)$ 是 $(C(K,E), \Delta)$ 中的 Cauchy 列。给 $x$：$d(f_n(x), f_m(x)) \le \Delta(f_n, f_m) \to 0$，故 $(f_n(x))$ 在 $E$ 中 Cauchy，$E$ 完备给出极限 $f(x)$。
$f_n \to f$ 在 $\Delta$ 下：给 $\varepsilon$，取 $N$ 使 $n, m \ge N \implies \Delta(f_n, f_m) < \varepsilon/2$；

固定 $x$ 令 $m \to \infty$ 得 $d(f_n(x), f(x)) \le \varepsilon/2$，再对 $x$ 取上确界。
$f$ 连续：$d(f(x), f(y)) \le \Delta(f, f_n) + d(f_n(x), f_n(y)) + \Delta(f_n, f)$。$\blacksquare$

> 这三步（逐点取极限 $\to$ 一致收敛 $\to$ 保连续）是「一致收敛」语言的万能模板。
