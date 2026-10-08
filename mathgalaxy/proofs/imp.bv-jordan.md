# $T_F \pm F$ 递增 $\implies BV$ 的 Jordan 分解
`imp.bv-jordan` · 推出 · strong 边 · 根 `../`

`lem.variation-monotone` T_F ± F 递增 → `thm.bv-jordan` BV 的 Jordan 分解

**(b) 的 $(\Longleftarrow )$ 方向**：若 $F = G - H$（$G$、$H$ 有界递增），则对任意分划

$$\sum|F(x_j) - F(x_{j-1})| \le \sum|G(x_j) - G(x_{j-1})| + \sum|H(x_j) - H(x_{j-1})| = (G(x) - G(-\infty)) + (H(x) - H(-\infty))$$

（递增函数的相邻差非负，可以直接去绝对值。）于是 $T_F(x) \le (G+H)(x) - (G+H)(-\infty) < \infty$，$F \in BV$。

**(b) 的 $(\implies )$ 方向**：由**引理**，$T_F + F$ 与 $T_F - F$ 都递增；它们有界（因为 $F \in BV$ 且 $F$ 有界）。令

$$G := (1/2)(T_F + F), \quad  H := (1/2)(T_F - F)$$

则 $G$、$H$ 有界递增，且

$$G - H = (1/2)(T_F + F) - (1/2)(T_F - F) = F$$

∎

> 续见 proofs/imp.bv-jordan.2.md
