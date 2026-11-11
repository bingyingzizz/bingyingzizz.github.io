# Mayer–Vietoris（同调）　`thm.mv-homology`　·　说明
根 `../`

**第二步：自然性。** 对奇异单纯形 $\sigma$ 令 $\operatorname{Sd}(\sigma) := \sigma_{\#}\operatorname{sd}_{p}$、$T(\sigma) := \sigma_{\#} t_{p}$，线性延拓。因 $\sigma_{\#}$ 是链映射且与连续映射相容，

$$\partial\operatorname{Sd} = \operatorname{Sd}\partial,\qquad \partial T + T\partial = \operatorname{Sd} - \operatorname{id}.$$

（逐项抄上一条恒等式即得；$T$ 可能产生退化单纯形，这不影响链恒等式。）单个 $\operatorname{Sd}(\sigma)$ 未必小，小性要靠迭代。

**第三步：直径收缩。** 设 $\tau \subseteq \Delta^{p}$ 是直径 $\delta$ 的单纯形，$b_{S}$ 表示面 $S$ 的重心。$\operatorname{sd}(\tau)$ 的顶点是某些面 $S_{0} \subset \cdots \subset S_{q}$ 的重心，且对 $S \subset S^{\prime}$ 有

$$b_{S^{\prime}} - b_{S} = \frac{1}{\#S^{\prime}}\sum_{v \in S^{\prime} \setminus S}(v - b_{S}),$$

> 续见 notes/thm.mv-homology.4.md
