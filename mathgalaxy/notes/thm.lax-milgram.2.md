# Lax–Milgram 定理　`thm.lax-milgram`　·　说明
根 `../`

$$\langle x, A(\alpha y + \beta z) \rangle = L(x, \alpha y + \beta z) = \bar{\alpha} L(x, y) + \bar{\beta} L(x, z) = \langle x, \alpha A y + \beta A z \rangle$$

对一切 $x$ 成立，故 $A(\alpha y + \beta z) = \alpha A y + \beta A z$。又 $\|A y\| \le M \|y\|$，故 $A \in B(H)$ 且 $\|A\| \le M$。唯一性由 Riesz 表示的唯一性（每个 $y$ 的 $A y$ 唯一确定）得到。

**第三步：强制性给出下界。** 由 (3) 与 $L(x, x) = \langle x, A x \rangle$，

$$\delta \|x\|^{2} \le |L(x, x)| = |\langle x, A x \rangle| \le \|x\| \, \|A x\| ,$$

所以 $\|A x\| \ge \delta \|x\|$。特别地 $A$ 单射。

**第四步：$A(H)$ 闭。** 设 $A x_n \to z$。则

$$\|x_n - x_m\| \le \frac{1}{\delta} \|A(x_n - x_m)\| \to 0 ,$$

故 $(x_n)$ 是 Cauchy 列；$H$ 完备，设 $x_n \to x$。由 $A$ 连续，$A x = z$，故 $z \in A(H)$。

> 续见 notes/thm.lax-milgram.3.md
