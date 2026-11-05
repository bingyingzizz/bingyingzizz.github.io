# 亚纯函数的定义 $\implies$ Mittag-Leffler 定理（只给证明骨架）
`imp.mittag-leffler` · 推出 · strong 边 · 根 `../`

`def.entire-meromorphic` 整函数与亚纯函数 → `thm.mittag-leffler` Mittag-Leffler 定理

=1$ 上使 $\sup\lvert P-1/(z-a_{k})\rvert<1$，则 $(z-a_{k})P(z)$ 一致逼近 $1$，但左边是多项式且在 $z=a_{k}$ 为零，于是 $\frac{1}{2\pi i}\oint_{\lvert z-a_{k}\rvert=1}\frac{(z-a_{k})P(z)}{z-a_{k}}\,\mathrm{d}z=0$ 而 $\frac{1}{2\pi i}\oint\frac{\mathrm{d}z}{z-a_{k}}=1$，矛盾（差的最大模必 $\ge 1$）。

> 续见 proofs/imp.mittag-leffler.7.md
