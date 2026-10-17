# 切空间 = $\ker Dg(a)$ + 极值 $\implies$ 乘子存在
`imp.lagrange-multiplier` · 推出 · strong 边 · 根 `../`

`thm.regular-value` 正则值原像定理 → `thm.lagrange-multiplier` Lagrange 乘子法

**第四步：翻译回梯度。** 把 $\lambda$ 在 $\mathbb{R}^{m}$ 的标准基下写成 $(\lambda_1, \ldots, \lambda_m)$，即得 $Df(a) = \sum_i \lambda_i Dg_i(a)$。再用标准内积与 Riesz 表示（每边换成梯度向量）得 $\nabla f(a) = \sum_i \lambda_i \nabla g_i(a)$。∎

> ⭐ 这条证明完全没有用到 $M$ 的几何 —— **极值的分析内容只有第二步一行**，其余全是线性代数（引理）。这也是乘子法能做出来的原因：它是一条「对偶空间里取正交补」的事实。
