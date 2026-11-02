# 一元中值定理用两次 $\implies$ 混合偏导可交换
`imp.mixed-partials` · 推出 · strong 边 · 根 `../`

`thm.mvt` Lagrange 中值定理 + `def.partial-derivative` 偏导数 → `thm.mixed-partials` 混合偏导相等

$$\Delta = h\,\varphi'(\xi) = h\bigl[ \partial_1 f(\xi,\ a_2+k) - \partial_1 f(\xi,\ a_2) \bigr]$$
再对 $y \mapsto \partial_1 f(\xi, y)$ 用一次一维中值定理，存在 $\eta \in (a_2, a_2+k)$ 使

$$\Delta = h\,k\ \partial_2\partial_1 f(\xi,\ \eta)$$

**按第二种顺序**：对称地（令 $\psi(y) := f(a_1+h, y) - f(a_1, y)$）得到存在 $\xi' \in (a_1, a_1+h)$、$\eta' \in (a_2, a_2+k)$ 使

$$\Delta = h\,k\ \partial_1\partial_2 f(\xi',\ \eta')$$

**取极限**：两式相除 $hk \ne 0$ 得

> 续见 proofs/imp.mixed-partials.3.md
