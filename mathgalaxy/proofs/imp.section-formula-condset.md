# 截面公式（$M = \mathbb{Z}\cdot X$）$\implies$ 凝聚态集的版本
`imp.section-formula-condset` · 推出 · strong 边 · 根 `../`

`lem.ext-stonean-section` Stonean 上 Ext 的截面公式 → `cor.ext-cond-set-section` Ext 的截面公式

把截面公式里的 $M$ 取成自由凝聚态阿贝尔群 $\mathbb{Z}\cdot X$（$X$ 是凝聚态集）。此时

$$M \cdot S = \mathbb{Z}\cdot X \otimes_{\mathbb{Z}} \mathbb{Z}[S] = \mathbb{Z}\cdot(X \times S),$$

代回 $\operatorname{Ext}^{n}(M,N)(S) \cong \operatorname{Ext}^{n}(M\cdot S, N)$ 得

$$\operatorname{Ext}^{n}_{\mathbb{Z}}(\mathbb{Z}\cdot X,\ N)(S) \;\cong\; \operatorname{Ext}^{n}_{\mathbb{Z}}(\mathbb{Z}\cdot(X \times S),\ N) \;=\; H^{n}(X \times S,\ N),$$

最后一步是凝聚态上同调的定义（$H^{n}(T,M) := \operatorname{Ext}^{n}(\mathbb{Z}\cdot T, M)$，即「$T$ 上的层」的余同调）。
