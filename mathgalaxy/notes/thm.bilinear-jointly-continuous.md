# 分别连续双线性映射联合连续　`thm.bilinear-jointly-continuous`　·　说明
根 `../`

**证明。** 对每个 $y \in F$，$x \mapsto B(x, y)$ 是连续线性映射，故有界；对每个 $x \in E$，$B(x, \cdot) \in B(F, G)$。

考虑族 $\{ B(x, \cdot) : x \in E,\ \|x\| \le 1 \} \subseteq B(F, G)$。对每个固定的 $y \in F$，

$$\sup_{\|x\| \le 1} \|B(x, y)\| = \| B(\cdot, y) \| < \infty .$$

即这族算子逐点有界；$F$ 是 Banach 空间，$G$ 赋范，由共鸣定理得

$$C := \sup_{\|x\| \le 1} \| B(x, \cdot) \| < \infty .$$

于是对 $x \ne 0$，$\|B(x, y)\| = \|x\| \, \| B(x/\|x\|, y) \| \le C \|x\| \, \|y\|$；$x = 0$ 时两边为零。

**联合连续。** 设 $(x_n, y_n) \to (x, y)$，则

$$\|B(x_n, y_n) - B(x, y)\| \le \|B(x_n - x, y_n)\| + \|B(x, y_n - y)\| \le C \|x_n - x\| \, \|y_n\| + \|B(x, y_n - y)\| .$$

第一项趋于 $0$（$\|x_n - x\| \to 0$，$(y_n)$ 有界）；第二项趋于 $0$ 由 $B(x, \cdot)$ 连续。故 $B$ 联合连续。$\blacksquare$

> 续见 notes/thm.bilinear-jointly-continuous.2.md
