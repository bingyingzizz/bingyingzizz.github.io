# 递增函数的导数积分不等式　`prop.monotone-integral-derivative`　·　说明
根 `../`

证明：$G$ 右连续递增，诱导一个正则 Borel 测度 $\mu _G$。写它的 Lebesgue–Radon–Nikodym 分解



$$d\mu_G = d\lambda + f\cdot dm, \quad  f = \lim \mu_G(E_h) / m(E_h)\quad  \text{a.e.}$$



而差商恰好是那个比值，所以 $f = G' = F'$ a.e.。于是



$$\int_a^b F' = \int_a^b f\cdot dm \le \int_a^b d\mu_G = G(b) - G(a) \le F(b) - F(a)$$



（中间那个不等号是因为省略了奇异的 $\lambda \ge 0$。）∎

⚠ **这里一般不是等号**：Cantor 函数是经典反例 —— 它递增、连续、导数 a.e. 为 0，所以左边 $= 0$ 但右边 $= 1$。这个差别正是「绝对连续」这个概念要补上的东西。
