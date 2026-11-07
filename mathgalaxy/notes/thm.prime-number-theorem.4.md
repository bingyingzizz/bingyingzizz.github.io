# 素数定理　`thm.prime-number-theorem`　·　说明
根 `../`

命题 A（$\zeta$ 的解析延拓与无零点）：$\zeta(s) = \sum_{n \ge 1} n^{-s}$（$\operatorname{Re} s > 1$）可亚纯延拓到包含 $\{\operatorname{Re} s \ge 1\}$ 的开集，唯一极点是 $s = 1$ 处的单极点、留数 $1$；且 $\zeta(1 + it) \ne 0$ 对一切 $t \in \mathbb{R}$。

命题 B（Tauber 型收尾）：设 $f : [1, \infty) \to \mathbb{R}$ 非负、单调不减，且其 Mellin 变换

$$g(s) = \int_{1}^{\infty} f(t)\,t^{-s-1}\,\mathrm{d}t$$

在 $\operatorname{Re} s > 1$ 收敛，并解析延拓到 $\{\operatorname{Re} s \ge 1\}$ 的一个邻域，除 $s = 1$ 处单极点（留数 $1$）外全纯，则 $f(x) \sim x$。

**这两个命题怎么接上**：$\zeta$ 的 Euler 乘积取对数再求导给出

$$-\frac{\zeta'(s)}{\zeta(s)} = \sum_{n \ge 1} \Lambda(n)\,n^{-s} = s\int_{1}^{\infty} \psi(t)\,t^{-s-1}\,\mathrm{d}t \qquad (\operatorname{Re} s > 1),$$

> 续见 notes/thm.prime-number-theorem.5.md
