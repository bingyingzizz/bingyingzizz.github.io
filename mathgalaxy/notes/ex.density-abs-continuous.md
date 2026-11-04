# 密度型测度绝对连续　`ex.density-abs-continuous`　·　说明
根 `../`

**第 1 条为什么显然**：$\mu(E) = 0$ 时积分域是零测集，$\int_{E}f\,\mathrm{d}\mu = 0$。真正的内容是**反方向**：Radon–Nikodym 定理说 $\nu \ll \mu$ 时**一定有**这样的密度（`thm.lebesgue-radon-nikodym`）。

⭐ **第 2 条是「奇异」的样板**：$\delta_{0}$ 与 $\mu$ 互相奇异 —— 取 $A = \{0\}$，则 $\mu(A) = 0$ 而 $\delta_{0}(A) = 1$。Lebesgue 分解 $\nu = \rho + \lambda$（$\rho \ll \mu$、$\lambda \perp \mu$）就是把这一个例子的现象对一般 $\nu$ 说出来。

📌 **同一个测度可以有多种密度表示**：$f$ 改成几乎处处相等的 $g$，$\nu$ 不变。所以 $\mathrm{d}\nu/\mathrm{d}\mu$ 是 $L^{1}$ 里的**类**，不是函数 —— 这一点在链式法则 $\dfrac{\mathrm{d}\nu_{2}}{\mathrm{d}\mu} = \dfrac{\mathrm{d}\nu_{2}}{\mathrm{d}\nu_{1}}\cdot\dfrac{\mathrm{d}\nu_{1}}{\mathrm{d}\mu}$ 里最容易出错（要求 $\nu_{1}$-a.e. 成立）。

> 续见 notes/ex.density-abs-continuous.2.md
