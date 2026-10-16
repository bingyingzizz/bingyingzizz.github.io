# 有限维 Banach 空间的对偶是向量空间对偶　`prop.pontryagin-finite-dim-banach`　·　说明
根 `../`

**证明。** 因为 $\mathbb{T} = \mathbb{R}/\mathbb{Z}$，而 $V$ 是有限维实向量空间、特别地**单连通** ✓，连续同态 $V \to \mathbb{T}$ 都能唯一地提升为连续同态 $V \to \mathbb{R}$ ✓。再注意：**连续的加法映射 $V \to \mathbb{R}$ 自动是 $\mathbb{R}$-线性的** —— 先在有理数上由加性得 $f(qv) = q f(v)$ ✓，再由连续性逼近实数系数 ✓。于是 $\widehat{V} \cong \operatorname{Hom}_{\mathbb{R}}(V, \mathbb{R}) = V^{\ast}$ ✓。∎

📌 前提「有限维」不能去掉：实 Banach 空间**局部紧当且仅当有限维**。
