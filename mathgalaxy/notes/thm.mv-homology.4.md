# Mayer–Vietoris（同调）　`thm.mv-homology`　·　说明
根 `../`

故 $|b_{S^{\prime}} - b_{S}| \le \left(1 - \frac{|S|}{|S^{\prime}|}\right)\delta \le \frac{p}{p+1}\delta$。于是 $\operatorname{mesh}(\operatorname{sd}^{m}\tau) \le (p/(p+1))^{m}\delta$：重分足够多次，小单纯形的直径可以任意小。

**第四步：小链引理。** 包含 $\iota : S^{\mathcal{U}}_{*}(X) \hookrightarrow S_{*}(X)$ 诱导同调同构。

证明：对每个奇异 $p$-单纯形 $\sigma$，$\{\sigma^{-1}(U), \sigma^{-1}(V)\}$ 是紧空间 $\Delta^{p}$ 的开覆盖，有 Lebesgue 数 $\delta_{\sigma} > 0$（直径 $< \delta_{\sigma}$ 的子集必落在其中一个里）。取 $m$ 使 $(p/(p+1))^{m}\operatorname{diam}(\Delta^{p}) < \delta_{\sigma}$，则 $\operatorname{Sd}^{m}(\sigma)$ 的每个小单纯形的像落在 $U$ 或 $V$ 里。

记 $T_{M} := \sum_{j=0}^{M-1}\operatorname{Sd}^{j} T$，则 $\partial T_{M} + T_{M}\partial = \operatorname{Sd}^{M} - \operatorname{id}$。

> 续见 notes/thm.mv-homology.5.md
