# Lagrange 中值定理 $\implies$ 导数符号 $\implies$ 单调性
`imp.derivative-monotone` · 推出 · strong 边 · 根 `../`

`thm.mvt` Lagrange 中值定理 → `prop.derivative-monotone` 导数符号 ⟹ 单调性

设 $f' \ge 0$ 在区间 $I$ 上处处成立。取 $x < y \in I$，由中值定理存在 $\xi \in (x, y)$ 使

$$f(y) - f(x) = f'(\xi)\,(y - x) \ge 0$$

故 $f(x) \le f(y)$，即 $f$ 递增。$f' \le 0$ 的情形同法。

若 $f' > 0$ 处处成立，则上式严格为正，于是 $f$ **严格**递增。

反之设 $f$ 递增且可导。对 $h > 0$，$\dfrac{f(x + h) - f(x)}{h} \ge 0$，取极限得 $f'(x) \ge 0$。∎

> 「严格递增」那一半只用到 $f' > 0$ 的**处处**成立；若只知道「导数非负且不恒为零」，要严格单调得逐段用中值定理，不能用现在这个论证。
