# Hadamard 分解定理　`thm.hadamard-factorization`　·　说明
根 `../`

的标准证明把 $\sum_{|a_{n}|\le 2r}\log|z-a_{n}|$ 与 $\log|f(z)|$ 配对（$f$ 与乘积在 $a_{n}$ 处同阶消失），靠近零点时用 Poisson–Jensen 公式 $\log|f(z)|=\frac{1}{2\pi}\int\log|f(re^{i\theta})|\,\frac{r^{2}-|z|^{2}}{|re^{i\theta}-z|^{2}}\,d\theta-\sum\log\frac{|r^{2}-\bar a_{n}z|}{r|z-a_{n}|}$ 加最大模原理把局部负值传回整个圆周。本图 `prop.jensen` 只有圆盘中心版，没有 Poisson–Jensen 与这条下界引理的节点。**第四步因此仍缺**，不勾 ∎。

> 续见 notes/thm.hadamard-factorization.5.md
