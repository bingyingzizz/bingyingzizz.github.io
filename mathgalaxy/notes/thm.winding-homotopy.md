# 绕数的同伦不变性　`thm.winding-homotopy`　·　说明
根 `../`

**绕数部分的证明**：对同伦参数 $s$ 定义 $N(s) := n(H(s, \cdot), a)$。由积分表示 $N(s) = \frac{1}{2\pi i}\oint_{H(s,\cdot)} \mathrm{d}z/(z-a)$，被积函数与积分域都连续依赖 $s$，故 $N$ 连续；而 $N$ 只取整数值，连续 + 取整 $\implies$ 常值。于是 $N(0) = N(1)$。

**Cauchy 形式**：因为 $\Omega$ 单连通化之后 $f\,\mathrm{d}z$ 可以沿同伦「连续形变而积分不变」，逐 $s$ 求导即得 $\frac{\mathrm{d}}{\mathrm{d}s}\oint_{H(s,\cdot)} f\,\mathrm{d}z = 0$；这条路与「$f$ 有原函数」是同一条，见 `prop.single-valued-branch`。

⭐ **它是复分析和拓扑之间的第一根铰链**：绕数是同伦不变量，于是「全纯 $\implies$ 围道积分只看同伦类」，这就是为什么 Cauchy 定理对**任何**能把曲线缩成一点的情形都成立，而不需要区域是凸的。Brouwer 不动点定理（`thm.brouwer-fixed-point`）的复分析证明直接把这条用在 $\gamma(t) = e^{2\pi i t}$ 上。

> 续见 notes/thm.winding-homotopy.2.md
