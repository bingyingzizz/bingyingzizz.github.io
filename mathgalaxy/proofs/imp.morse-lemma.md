# 积分形式的 Taylor 余项 + 对称矩阵的光滑配方 $\implies$ Morse 引理
`imp.morse-lemma` · 推出 · strong 边 · 根 `../`

`thm.taylor-multi` 多元 Taylor 公式 + `thm.mixed-partials` 混合偏导相等 → `thm.morse-lemma` Morse 引理

**第一步：把一阶 Taylor 余项写成积分（避开「$'\theta$ 依赖 $h$」这个坑）。** 对 $\varphi(t) := f(a + t(x - a))$ 用带积分余项的 Taylor 公式，

$$f(x) - f(a) = \varphi(1) - \varphi(0) = \varphi'(0) + \int_0^1 (1 - t)\,\varphi''(t)\,dt = 0 + \sum_{i,j} h_{ij}(x)\,(x_i - a_i)(x_j - a_j)$$

其中（$\varphi'(0) = Df(a)(x-a) = 0$ 用了临界性）

$$h_{ij}(x) := \int_0^1 (1 - t)\, \partial_i\partial_j f\bigl( a + t(x - a) \bigr)\, dt$$

> 续见 proofs/imp.morse-lemma.2.md
