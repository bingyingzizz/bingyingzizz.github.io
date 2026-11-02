# 紧 $+$ 等度连续 $\implies$ 一致等度连续
`imp.fa-equi-uniform` · 推出 · strong 边 · 根 `../`

`def.equicontinuous` 等度连续 + `def.compact` 紧 → `thm.equicontinuous-uniform` 等度连续与一致等度连续

给 $\varepsilon$。对每个 $x$ 由等度连续取 $\eta_x > 0$ 使 $\delta(y,x) < \eta_x \implies d(f(y), f(x)) < \varepsilon/2$（一切 $f$）。
$\{B(x, \eta_x/2)\}$ 覆盖紧集，取有限子覆盖 $B(x_1, \eta_{x_1}/2), .., B(x_N, \eta_{x_N}/2)$，令 $\eta := \min_i \eta_{x_i}/2 > 0$。
若 $\delta(x,y) < \eta$，取 $i$ 使 $x \in B(x_i, \eta_{x_i}/2)$，则 $\delta(y, x_i) < \eta_{x_i}$，于是 $d(f(x), f(y)) \le d(f(x), f(x_i)) + d(f(x_i), f(y)) < \varepsilon$。$\blacksquare$

> 「有限」用两次：一次有界、一次取 min 后仍 $>0$ —— 无限个正数的下确界可以是 0，这正是紧性的用处。
