# 绕数的积分表示　`prop.winding-integral`　·　说明
根 `../`

**证明**：先把 $a$ 平移到 $0$（平移不改变积分值）。令 $\varphi(t) := \displaystyle\int_{0}^{t} \frac{\gamma'(s)}{\gamma(s)}\,\mathrm{d}s$，则 $(\gamma e^{-\varphi})' = e^{-\varphi}(\gamma' - \varphi'\gamma) = 0$，故 $\gamma(t) e^{-\varphi(t)}$ 是常数；由 $\varphi(0) = 0$ 得 $e^{\varphi(t)} = \gamma(t)/\gamma(0)$。

取 $t = 1$：因 $\gamma(1) = \gamma(0)$，有 $e^{\varphi(1)} = 1$，所以 $\varphi(1) \in 2\pi i \mathbb{Z}$。而 $\varphi(1) = \oint_{\gamma} \mathrm{d}z/z$，于是积分除以 $2\pi i$ 是整数，它随 $a$ 连续变化故恰是绕数（整数值 + 连续 $\implies$ 局部常值）。

⭐ **这条式子的意义**：绕数本来是「曲线绕点转了几圈」的几何说法，这里换成了**积分**，于是「几何量」可以参与计算 —— 辐角原理（`thm.argument-principle`）就是拿它去数零点的。

⚠️ 积分结果与 $\gamma$ 的参数化无关，只与定向有关：反向走一圈，绕数变号。
