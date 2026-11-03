# 陈–Weil 同态　`thm.chern-weil`　·　说明
根 `../`

**两条各用什么**（这是本定理的结构）：

- **① 闭性**：**只用 Bianchi 恒等式** $\mathrm{d}F = F \wedge \theta - \theta \wedge F$（在标架下写出来就是 $\mathrm{d}F_{\nabla} = [F_{\nabla}, \theta]$），配合 $P$ 的不变性给出 $\mathrm{d}P(F) = $（对 $P$ 的“不变”求导后的项）$= 0$。**不需要任何整体假设** —— 所以闭性在局部就成立。

- **② 与联络无关**：**这一步才用整体论证**。取两联络之间的道路 $\nabla_{t} = (1-t)\nabla_{0} + t\nabla_{1}$，算出 $\frac{\mathrm{d}}{\mathrm{d}t}P(F_{\nabla_{t}}) = \mathrm{d}(\text{某个}\ (2m-1)\text{-形式})$（**同伦公式**，也叫陈–Weil 的“transgression”）。于是两者的差是恰当形式，上同调类相同。⚠️ 这里要对 $t$ 积分 —— 用的是**光滑性 + 基本定理**，不需要紧性。

> 续见 notes/thm.chern-weil.2.md
