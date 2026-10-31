# 固态群构成阿贝尔子范畴　`thm.solid-abelian`　·　说明
根 `../`

⭐ 这是整套理论的引擎：凝聚态阿贝尔群**不是**局部化的，但固态子范畴是，而且还有足够多紧投射对象 —— 于是可以像模范畴一样做同调代数。

⭐ 证明路线：对 $\mathcal{A} = \operatorname{Cond}(\mathbf{Ab})$、$\mathcal{A}_0 = \{\mathbb{Z}[S] : S\ \text{extremally disconnected}\}$ 验证 `lem.solid-completion-criterion` 的条件。关键计算是：对由 $\prod_I \mathbb{Z}$ 的直和构成的复形 $C$，

$$\operatorname{RHom}(Z[S]^{\blacksquare}, C) \cong R\Gamma(S, C).$$

它是 Lecture VI 的主计算（把 $C$ 换成 $C \to C_{\mathbb{R}} \to C_{\mathbb{R}/\mathbb{Z}}$，再用紧阿贝尔群的两步消解与 $\mathbb{R}$-模的可缩性）。

⭐ **完整证明**见边 `imp.solid-abelian`：化到 $\prod_I\mathbb{Z}$ 型复形 $\to$ 核心断言 (6.1) $\to$ 把断言推回 $Z[S]^{\blacksquare}$ $\to$ 套用完备化判据。
