# 一元中值定理用两次 $\implies$ 混合偏导可交换
`imp.mixed-partials` · 推出 · strong 边 · 根 `../`

`thm.mvt` Lagrange 中值定理 + `def.partial-derivative` 偏导数 → `thm.mixed-partials` 混合偏导相等

化归到 $n = 2$：只需证 $\partial_1\partial_2 f(a) = \partial_2\partial_1 f(a)$，其中 $a = (a_1, a_2)$。取 $h, k$ 使小方块 $[a_1, a_1+h] \times [a_2, a_2+k]$ 落在假设的邻域里。定义**二阶差分**

$$\Delta(h, k) := f(a_1+h,\ a_2+k) - f(a_1+h,\ a_2) - f(a_1,\ a_2+k) + f(a_1,\ a_2)$$

**按第一种顺序**：令 $\varphi(x) := f(x,\ a_2+k) - f(x,\ a_2)$。则 $\Delta = \varphi(a_1+h) - \varphi(a_1)$。对 $\varphi$ 用一维中值定理，存在 $\xi \in (a_1, a_1+h)$ 使

> 续见 proofs/imp.mixed-partials.2.md
