# 一致凸　`def.uniformly-convex`　·　说明
根 `../`

**例子**：Hilbert 空间（平行四边形律给 $\|(x+y)/2\|^2 = 1 - \|x-y\|^2/4$，取 $\delta = 1 - \sqrt{1 - \varepsilon^2/4}$）；$L^p$（$1 < p < \infty$，Clarkson 不等式）；$\ell^p$（$1 < p < \infty$）。

**反例**：$\ell^1$、$\ell^\infty$、$c_0$、$C[0,1]$ 都不一致凸（$\ell^1$ 里 $e_1, e_2$ 的中点仍范数 $1$；$\ell^\infty$ 里 $(1,0,\ldots)$ 与 $(1,1,0,\ldots)$ 之类的分段常值序列可构造）。

⭐ 一致凸 $\implies$ 严格凸（`def.strictly-convex`）：若 $\|x\| = \|y\| = 1$、$x \ne y$，取 $\varepsilon = \|x - y\| > 0$ 即得中点范数 $< 1$。

📌 一致凸是「范数一致地弯」：它把「严格凸」逐点、逐对的结论升级成对全部单位向量一致的估计，这正是 Milman–Pettis（`thm.milman-pettis`）与 Clarkson 不等式需要的定量形式。
