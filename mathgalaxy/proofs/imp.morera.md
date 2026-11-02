# 连续 + 沿闭三角形积分为零 $\implies$ 全纯
`imp.morera` · 推出 · strong 边 · 根 `../`

`def.contour-integral` 复围道积分 + `def.holomorphic` 全纯函数 → `thm.morera` Morera 定理

在 $\Omega$ 内任取一个圆盘 $D(a, r) \subset \Omega$，只要在圆盘上造出原函数就够（全纯是局部性质）。

**第一步：沿折线的积分与路径无关。** 对 $z = x + iy \in D(a, r)$，取 $a = x_0 + i y_0$，沿「先水平后竖直」的折线定义

$$F(z) := \int_{x_0}^{x} f(t + i y_0)\,\mathrm{d}t + \int_{y_0}^{y} f(x + i t)\,\mathrm{d}t.$$

> 续见 proofs/imp.morera.2.md
