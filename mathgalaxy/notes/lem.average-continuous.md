# 平均算子联合连续　`lem.average-continuous`　·　说明
根 `../`

**证明。** 记 $m$ 为 Lebesgue 测度，$\omega_n := m(B(0,1))$，则 $m(B(x,r)) = \omega_n r^n$。只要对任意满足 $r_k > 0$、$(x_k, r_k) \to (x_0, r_0)$ 的序列证明 $A_{r_k} f(x_k) \to A_{r_0} f(x_0)$，即得联合连续。

**第一步：拆项。** 把差写成

$$A_r f(x) - A_{r_0} f(x_0) = \frac{1}{m(B(x,r))}\int_{\mathbb{R}^n} \bigl(\chi_{B(x,r)} - \chi_{B(x_0,r_0)}\bigr) f + \Bigl(\frac{1}{m(B(x,r))} - \frac{1}{m(B(x_0,r_0))}\Bigr)\int_{B(x_0,r_0)} f .$$

第二项趋于 $0$：$\omega_n r_k^n \to \omega_n r_0^n > 0$，故系数趋于 $0$，而 $\int_{B(x_0,r_0)} f$ 是固定常数。

**第二步：找控制函数。** 取 $\delta = 1/2$：若 $|x - x_0| < 1/2$、$|r - r_0| < 1/2$，则 $r < r_0 + 1/2$，且 $|y - x| < r$ 推出

$$|y - x_0| \le |y - x| + |x - x_0| < r + 1/2 < r_0 + 1,$$

即 $B(x,r) \subseteq B(x_0, r_0 + 1)$。于是对这样的 $(x,r)$ 与一切 $y$，

> 续见 notes/lem.average-continuous.2.md
