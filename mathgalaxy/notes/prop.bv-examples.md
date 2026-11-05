# 有界变差函数的例子与基本性质　`prop.bv-examples`　·　说明
根 `../`

**逐条验证。** 记 $T_{F}(x) := \sup\bigl\{\sum_{j=1}^{n}|F(x_{j})-F(x_{j-1})| : -\infty < x_{0} < \cdots < x_{n} = x\bigr\}$。
1. **有界递增**：任意划分的变差和 $\sum_{j}(F(x_{j})-F(x_{j-1})) = F(b)-F(a)$（telescoping，绝对值可以去掉），故 $T_{F}(x) = F(x)-F(-\infty)$ 有限 ✓。
2. **$BV$ 是 $\mathbb{C}$-向量空间**：逐点 $|(F+G)(x_{j})-(F+G)(x_{j-1})| \le |\Delta F| + |\Delta G|$，对划分取上确界得 $T_{F+G} \le T_{F}+T_{G} < \infty$ ✓；数乘同理 ✓。
3. **可微 + $F'$ 有界**：$|F'| \le M$ 时由中值定理 $|F(x_{j})-F(x_{j-1})| \le M(x_{j}-x_{j-1})$，故 $T_{F}(b)-T_{F}(a) \le M(b-a) < \infty$ ✓。
4. **$\sin x$**：$|\sin'| \le 1$，套上 3 ✓。
5. **$\lvert x\rvert^{3/2}\sin(1/x)$**（$x \ne 0$，$F^{\prime}(0)=0$）：$F^{\prime}$ 在 $0$ 附近**无界**（$\sim -\lvert x\rvert^{-1/2}\cos(1/x)$），第 3 条用不上；但 $\lvert F^{\prime}\rvert \lesssim \tfrac{3}{2}\lvert x\rvert^{1/2}+\lve

> 续见 notes/prop.bv-examples.2.md
