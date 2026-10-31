# 素数定理：$\zeta$ 在 $\operatorname{Re}\,s = 1$ 上无零点
`imp.nt-pnt` · 推出 · strong 边 · 根 `../`

`def.prime-counting` 素数计数函数 → `thm.prime-number-theorem` 素数定理

**① $\zeta$ 的解析延拓。** 对 $\operatorname{Re}\,s > 1$，$\zeta(s) = \sum_{n\ge1} n^{-s} = \prod_{p}(1 - p^{-s})^{-1}$（Euler 乘积，靠唯一分解）。它在 $s = 1$ 有单极点、留数 $1$，并可延拓为 $\mathbb{C}$ 上的亚纯函数。

**② 关键一步：$\operatorname{Re}\,s = 1$ 上无零点。** 用 $3 + 4\cos\theta + \cos 2\theta \ge 0$ 配上 Euler 乘积的对数导数，得 $\zeta(1 + it) \ne 0$。这一步是全部难点，也是「素数不会太集中在一条线上」的本质。

**③ 显式公式。** 对 $c > 1$，

$$\psi(x) = x - \sum_{\rho}\frac{x^{\rho}}{\rho} - \log 2\pi - \tfrac{1}{2}\log(1 - x^{-2}),$$

其中 $\rho$ 遍历 $\zeta$ 的非平凡零点（求和按对称方式截断）。

> 续见 proofs/imp.nt-pnt.2.md
