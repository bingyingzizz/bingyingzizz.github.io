# 积分形式的 Taylor 余项 + 对称矩阵的光滑配方 $\implies$ Morse 引理
`imp.morse-lemma` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.mixed-partials` 混合偏导相等 → `thm.morse-lemma` Morse 引理

**第二步：$h_{ij}$ 的性质。** 积分号下求导说明 $h_{ij}$ 与 $f$ 有同样的光滑性；$h_{ij}(a) = \frac{1}{2}\partial_i\partial_j f(a)$；由 `thm.mixed-partials`，$h_{ij} = h_{ji}$（$f \in C^{2}$ 即可）。记对称矩阵函数 $h(x) := (h_{ij}(x))$。于是

$$f(x) - f(a) = (x - a)^{\mathsf{T}}\, h(x)\, (x - a)$$

> 续见 proofs/imp.morse-lemma.3.md
