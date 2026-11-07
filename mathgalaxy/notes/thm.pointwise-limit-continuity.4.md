# 连续点集是稠密 G_δ　`thm.pointwise-limit-continuity`　·　说明
根 `../`

**$\operatorname{cont}(f)$ 是 $G_\delta$**：对 $k\in\mathbb{N}$ 令 $A_{k} := \bigcup\{U\subseteq X \text{ 开} : \operatorname{diam} f(U) \le 1/k\}$，它是开集。若 $f$ 在 $x$ 连续，则对每个 $k$ 存在 $x$ 的邻域 $U$ 使 $\operatorname{diam}f(U) \le 1/k$，故 $x\in A_{k}$；反之若 $x\in\bigcap_{k}A_{k}$，给 $\varepsilon>0$ 取 $k$ 使 $1/k<\varepsilon$，则存在开邻域 $U\ni x$ 使 $\operatorname{diam}f(U)\le 1/k<\varepsilon$，即 $f$ 在 $x$ 连续。故 $\operatorname{cont}(f) = \bigcap_{k}A_{k}$ 是 $G_\delta$。∎

⚠️ 逐点极限**不必**连续（$f_{n}(x) = x^{n}$ 在 $[0,1]$ 上，极限在 $x=1$ 处不连续）；定理说的是「连续点很多」，不是「处处连续」。

⭐ 同一模板的经典产物：$C[0,1]$ 里「处处不可微」的函数构成稠密 $G_\delta$（Banach 1931）。
