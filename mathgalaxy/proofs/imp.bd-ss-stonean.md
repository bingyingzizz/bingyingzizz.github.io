# Breen–Deligne 分解 $\implies$ Stonean 上的谱序列
`imp.bd-ss-stonean` · 推出 · strong 边 · 根 `../`

`thm.breen-deligne` Breen–Deligne 分解 → `prop.breen-deligne-ss-stonean` Stonean 上 Breen–Deligne 的谱序列

取 Breen–Deligne 左消解 $F(M)^{\bullet} \twoheadrightarrow M$（每一项是有限个 $\mathbb{Z}\cdot M^{s_{n,i}}$ 的直和）。

对 $\operatorname{Ext}^{\bullet}_{\mathbb{Z}}(-,\, N)(S)$ 应用这个消解：每个 $\mathbb{Z}\cdot M^{s}$ 项带上 $S$ 之后由**截面公式**（`lem.ext-stonean-section`）化成 $H^{q}(M^{s} \times S,\ N)$。

按**分解的次数** $p$ 过滤得到的双复形，其谱序列第一页正是

$$E^{p,q}_{1} = \bigoplus_{i=1}^{r_{p}} H^{q}\bigl(M^{s_{p,i}} \times S,\ N\bigr) \implies \operatorname{Ext}^{p+q}_{\mathbb{Z}}(M,N)(S).$$

⭐ 分解的作用就是把「$M$ 上算 Ext」换成「自由项上算 Ext」，而自由项由截面公式已经算完了。
