# 沿线段的中值定理迭代 $\implies$ 多元 Taylor 公式
`imp.taylor-multi` · 推出 · strong 边 · 根 `../`

`thm.mean-value-multi` 多元中值定理 → `thm.taylor-multi` 多元 Taylor 公式

**第一步：沿线段化归到一元。** 令 $\gamma(t) := a + th$、$\varphi(t) := f(\gamma(t))$，$t \in [0,1]$。用链式法则逐次求导可得

$$\varphi^{(j)}(t) = D^{j} f(a + th)\underbrace{(h, \ldots, h)}_{j \text{ 个}} \qquad (j \le k+1)$$

其中 $D^{j}f$ 是 $j$ 重线性型（$j = 2$ 时即对称双线性型 $D^{2}f(a)(h,h) = h^{\mathsf{T}} H_f(a) h$）。

**第二步：一元 Taylor。** 对 $\varphi$ 在 $[0,1]$ 上用带 Lagrange 余项的一元 Taylor 公式（`thm.taylor`），存在 $\theta \in (0,1)$ 使

> 续见 proofs/imp.taylor-multi.2.md
