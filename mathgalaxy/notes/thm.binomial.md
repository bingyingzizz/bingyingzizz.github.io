# 二项式定理　`thm.binomial`　·　说明
根 `../`

⭐ 这条定理在图上被两处用到：`def.exp-function` 的函数方程 $\exp(z+w) = \exp z\,\exp w$（把 $(z+w)^{n}$ 展开再重排），以及 `thm.nth-root` 里放大 $(b+h)^{n}$。

⭐ 证明只对 $n$ 归纳：把 $(a+b)^{n+1} = (a+b)^{n}(a+b)$ 展开，用 Pascal 把两组系数并起来。

⚠ 非交换环里不成立（$ab \ne ba$），所以条件写的是交换环。
