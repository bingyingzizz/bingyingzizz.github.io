# 散度定理　`thm.divergence-theorem`　·　说明
根 `../`

**它不是新定理**：证明就是把 `thm.stokes` 用在 $\omega = \iota_{X}\mathrm{d}V$ 上。所以「微积分基本定理 / Stokes / 散度定理 / Green / Kelvin–Stokes」这五条是同一句公式在五种维数与五种形式次数上的读法。

**符号的两个来源**：$N$ 必须朝**外**，$\partial M$ 必须取**诱导**定向（外法向在前）。两个约定缺一个，整体就差一个负号 —— 而所有二、三维的特例都仍然「看起来对」，所以这个错误特别难查。约定之间的相容性由 `prop.boundary-sign-convention` 保证。

**Green 第一公式**：取 $X = \nabla u$（$\nabla$ 取 $g$ 的梯度），得 $\int_{M}\Delta u\,\mathrm{d}V = \int_{\partial M}\partial_{N}u\,\mathrm{d}A$；再对 $u\,\nabla v$ 用一次并相减，就得到对称的那个版本。

**⚠️ 紧致性**：不紧时右边必须绝对可积，或对穷竭序列 $M_{1}\subset M_{2}\subset\cdots$ 取极限（此时会多出内部边界项，靠它们两两相消收敛）。本图只陈述紧致情形。

> 续见 notes/thm.divergence-theorem.2.md
