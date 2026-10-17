# Morse 引理　`thm.morse-lemma`　·　说明
根 `../`

⭐ 这是一条**分类定理**：非退化临界点附近，函数只由一个数字 $k$ 决定局部形状。于是「鞍点」不再是模糊的日常词，而是 $k$ 的一个取值（$k = 0$ 极小、$k = n$ 极大、$0 < k < n$ 鞍点）。

⭐ 证明两步：
1. 把 $f(x) - f(a)$ 写成 $\sum_{i,j} h_{ij}(x)\,(x_i - a_i)(x_j - a_j)$，其中 $h_{ij}$ 光滑且 $h_{ij}(a) = \frac{1}{2}\partial_i\partial_j f(a)$ —— 做法是对 $\varphi(t) = f(a + t(x-a))$ 用一维 Taylor 并把余项写成积分 $\int_0^1 (1-t)\,\varphi''(t)\,dt$，于是 $h_{ij}$ 显式地是积分、自动光滑；
2. 对**光滑变化的对称矩阵** $h(x)$ 做配方（Gram–Schmidt 的光滑版本），把 $\sum h_{ij} y_i y_j$ 化成 $\pm$ 平方和。

⭐ 第 2 步里负号个数不变 —— 这正是 **Sylvester 惯性定律**（`def.quadratic-form` 那一带的二次型理论），而且它保证 $k$ 与坐标选取无关。

⚠ 「非退化」不能去：$f = x^{4}$ 在原点是退化临界点，局部形状既不是 $+u^{2}$ 也不是 $-u^{2}$，Morse 引理不适用。

> 续见 notes/thm.morse-lemma.2.md
