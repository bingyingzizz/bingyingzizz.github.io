# 共鸣定理 $\implies$ 分别连续双线性映射联合连续
`imp.fa-ubp-bilinear` · 推出 · strong 边 · 根 `../`

`thm.ubp` 共鸣定理 → `thm.bilinear-jointly-continuous` 分别连续双线性映射联合连续

对 $x \in E$ 令 $T_x := B(x, \cdot) \in B(F, G)$。对每个 $y \in F$，$\sup_{\|x\| \le 1} \|T_x y\| = \|B(\cdot, y)\| < \infty$（$B(\cdot, y)$ 连续线性）。
由共鸣定理（定义域 $F$ 是 Banach 空间），$C := \sup_{\|x\| \le 1} \|T_x\| < \infty$。于是 $\|B(x, y)\| \le C \|x\| \, \|y\|$，联合连续性由 $B(x_n, y_n) - B(x, y) = B(x_n - x, y_n) + B(x, y_n - y)$ 与 $B(x, \cdot)$ 的连续性得到。$\blacksquare$

> 两个 Banach 假设各用在：$F$ 完备用于 UBP，$E$ 完备用于 $x_n$ 的收敛（其实这条证明主要用 $F$ 完备；$E$ 完备保证 $x_n - x$ 的范数有界只需收敛性）。
