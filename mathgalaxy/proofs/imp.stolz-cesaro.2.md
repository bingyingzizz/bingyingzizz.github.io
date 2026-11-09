# Stolz–Cesàro 定理的证明（$0/0$ 与 $\infty/\infty$）
`imp.stolz-cesaro` · 推出 · strong 边 · 根 `../`

`def.sequence-limit` 数列极限 → `thm.stolz-cesaro` Stolz–Cesàro 定理

N$ 时 $(L-\varepsilon)\Delta y_k\le\Delta x_k\le(L+\varepsilon)\Delta y_k$。对 $m>n\ge N$ 求和得
$$(L-\varepsilon)(y_m-y_n)\le x_m-x_n\le(L+\varepsilon)(y_m-y_n),$$
除以 $y_m$ 并令 $m\to\infty$，得 $L-\varepsilon\le\liminf x_m/y_m\le\limsup x_m/y_m\le L+\varepsilon$；令 $\varepsilon\to0$ 即得。$\blacksquare$
