# 对 $\Phi(x,y) = (x, F(x,y))$ 用逆映射定理 $\implies$ 隐函数定理
`imp.implicit-function` · 推出 · strong 边 · 根 `../`

`thm.inverse-function` 逆映射定理 → `thm.implicit-function` 隐函数定理

**第五步：取 $g(x) := \theta(x, 0)$。** 由 $\Phi \circ \Theta = \mathrm{id}$ 得 $F\bigl(x,\ \theta(x, 0)\bigr) = 0$，且 $\Theta(a, 0) = (a, b)$ 给出 $g(a) = b$。

存在 $a$ 的开邻域 $V$ 使 $(x, 0) \in \widetilde W$（$\widetilde W$ 开）。

$g$ 是 $C^{1}$ 的复合，故 $C^{1}$。

**第六步：唯一性与 $Dg$ 的公式。** 若 $\widehat g$ 也在 $V$ 上满足 $\widehat g(a) = b$、$F(x, \widehat g(x)) = 0$，则 $(x, \widehat g(x))$ 是 $(x, 0)$ 在 $\Phi$ 下的原像，由 $\Phi$ 在 $\widetilde U$ 上单射得 $\widehat g = g$。

> 续见 proofs/imp.implicit-function.4.md
