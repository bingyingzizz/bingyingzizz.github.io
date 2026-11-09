# Radó 三角剖分 + 单纯逼近 + $H_{0}$ 连通分支 $\implies \chi = 2-2g$（依赖登记）
`imp.eulerchar-inputs` · 推出 · strong 边 · 根 `../`

`thm.rado` Radó 定理 + `thm.simplicial-approximation` 单纯逼近 + `prop.h0-components` H₀ 与分支 → `prop.eulerchar-genus` Euler 示性数与亏格

**这条边只登记依赖，不证结论。** 三者合起来才是证明的输入，没有哪一个单独能推出 $\chi = 2 - 2g$：

1. `thm.rado`（Radó 三角剖分存在性）：先把闭可定向曲面变成有限单纯复形 $K$，之后 $\chi(K)$ 才有定义；
2. `thm.simplicial-approximation`：把连续映射换成单纯映射，于是 $H_{2}(S) \cong H_{2}(K^{\prime}) \cong \mathbb{Z}$；
3. `prop.h0-components`：$H_{0}(S) \cong \mathbb{Z}$ 来自 $S$ 连通，即 $b_{0} = 1$。

代入 $\chi = b_{0} - b_{1} + b_{2}$ 得 $\chi = 1 - 2g + 1 = 2 - 2g$。

> ⚠ 这是**依赖登记**边，不是蕴含：把证明用到的三个外部输入登记在图上，读图时能看到本命题缺哪一块就不成立。
