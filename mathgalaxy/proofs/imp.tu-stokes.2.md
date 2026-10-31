# 一元微积分基本定理 $\implies$ Stokes 定理
`imp.tu-stokes` · 推出 · strong 边 · 根 `../`

`def.integral-form` 形式的积分 + `def.exterior-derivative` 外微分 → `thm.stokes` Stokes 定理

只剩 $i = n$：$\int_{Q}\partial_{n}f_{n}\ \mathrm{d}x^{1}\cdots\mathrm{d}x^{n} = \int f_{n}(x^{1},\ldots,x^{n-1},0)\,\mathrm{d}x^{1}\cdots\mathrm{d}x^{n-1}$ —— 而这正是 $\omega$ 限制到边界 $\{x^{n} = 0\}$ 上的积分（诱导定向使两个符号一致）。

**拼回去。** 各块相加时，内部边界出现两次、方向相反、互相抵消，剩下恰好是 $\partial M$ 上的积分。∎

⚠️ 符号全部来自「诱导定向 = 外法向在前」这一条约定；约定改一个字，整条公式就差一个负号。
