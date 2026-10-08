# NBV 函数的导数与测度的关系　`prop.nbv-derivative`　·　说明
根 `../`

证明：写 $d\mu_F = d\lambda + f\cdot dm$（Lebesgue 分解），由测度那条定理 $f = F'$ a.e.。于是



$\cdot$ $\mu_F \perp  m$ 意味着绝对连续部为零，即 $f = 0 \implies F' = 0 \text{a.e.}$；

$\cdot$ $\mu_F \ll  m$ 意味着 $\lambda = 0$，于是 $F(x) = \mu_F((-\infty,x]) = \int_{-\infty}^x f\cdot dm = \int_{-\infty}^x F'\cdot dt$。

⭐ 这一条就是「微积分基本定理」的测度版：**能不能把函数积回来，取决于 $\mu _F$ 是否绝对连续**。
