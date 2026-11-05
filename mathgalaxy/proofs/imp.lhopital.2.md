# Cauchy 中值定理 $\implies$ L'Hôpital 法则
`imp.lhopital` · 推出 · strong 边 · 根 `../`

`thm.cauchy-mvt` Cauchy 中值定理 → `thm.lhopital` L'Hôpital 法则

给定 $\varepsilon > 0$，先取 $\delta_1 > 0$ 使 $t \in (x_0, x_0+\delta_1)$ 上 $\lvert f^{\prime}(t)/g^{\prime}(t) - L\rvert < \varepsilon/3$ 且 $g^{\prime}(t) \ne 0$。

**先固定** $y \in (x_0, x_0+\delta_1)$，再让 $x$ 靠近 $x_0$。对 $[y, x]$ 用 Cauchy 中值定理（分母不为零：若 $g(x) = g(y)$，Rolle 会逼出某个 $g^{\prime} = 0$），得 $\xi \in (y,x)$ 使 $\dfrac{f(x)-f(y)}{g(x)-g(y)} = \dfrac{f^{\prime}(\xi)}{g^{\prime}(\xi)}$。把 $f(x)$ 写成 $[f(x)-f(y)] + f(y)$：

> 续见 proofs/imp.lhopital.3.md
