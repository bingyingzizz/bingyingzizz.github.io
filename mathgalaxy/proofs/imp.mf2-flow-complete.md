# 局部存在 $+$ 紧性 $\implies$ 有限端点必逃逸，紧流形上处处完备
`imp.mf2-flow-complete` · 推出 · strong 边 · 根 `../`

`def.flow` 流 + `thm.flow-local` 局部流 + `def.compact` 紧 → `thm.flow-complete` 流完备性

**第 1 条（区间是开的）。** 设 $\gamma : J \to M$ 极大，$t_{0} \in J$。

由 `thm.flow-local`，$\gamma(t_{0})$ 附近有局部流 $\varphi$（时间 $\varepsilon > 0$）；

把它与 $\gamma$ 在 $\gamma(t_{0})$ 处接起来，得解在 $(t_{0}-\varepsilon,t_{0}+\varepsilon)$ 上存在。

故「可延拓」的点集在 $J$ 中开，而 $J$ 是极大区间 —— 于是 $J$ 是开区间。

**第 2 条（逃逸引理）。** 反设存在紧集 $K$ 与 $t_{1} < b_{q}$ 使 $\gamma([t_{1}, b_{q})) \subseteq K$。

对每点 $y \in K$ 取一张卡 $V_{y}$ 与 `thm.flow-local` 给的时间 $\varepsilon_{y} > 0$；

$K$ 紧，取有限个 $y_{1},\ldots,y_{m}$ 使 $K \subseteq \bigcup_{i}V_{y_{i}}$，令 $\varepsilon := \min_{i}\varepsilon_{y_{i}} > 0$。

> 续见 proofs/imp.mf2-flow-complete.2.md
