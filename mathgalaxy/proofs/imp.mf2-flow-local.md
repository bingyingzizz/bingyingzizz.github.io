# 卡里化归为自治 ODE $\implies$ 局部流存在唯一且光滑
`imp.mf2-flow-local` · 推出 · strong 边 · 根 `../`

`def.vector-field` 向量场 + `def.manifold-chart` 图卡 → `thm.flow-local` 局部流

**化归。** 取 $p$ 的卡 $(V,x)$，在 $V$ 上 $X = \sum_{i}X^{i}\partial_{i}$，$X^{i} \in C^{\infty}(V)$。于是「$\gamma$ 是积分曲线」等价于「$y := x\circ\gamma$ 满足 $\dot y^{i} = X^{i}(y)$」。

**存在唯一（Picard–Lindelöf）。** $f(y) := (X^{1}(y),\ldots,X^{n}(y))$ 在 $y_{0} := x(p)$ 附近光滑，因而局部 Lipschitz。取 $r > 0$ 使闭球 $\overline{B}(y_{0},r) \subseteq x(V)$，令 $M_{0} := \max_{\overline{B}}\lVert f\rVert$、$\varepsilon := r/(2M_{0})$。则对每个 $y_{1} \in B(y_{0}, r/2)$，方程有唯一解 $y : (-\varepsilon,\varepsilon) \to B(y_{0},r)$ 满足 $y(0) = y_{1}$（压缩映射迭代：$\dot y = f(y)$ 的积分形式在 $C^{0}([-\varepsilon,\varepsilon])$ 上是压缩）。

> 续见 proofs/imp.mf2-flow-local.2.md
