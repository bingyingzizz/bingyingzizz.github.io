# 完备化判据　`lem.solid-completion-criterion`　·　说明
根 `../`

⭐ 这是一条**纯范畴论**的引理：它把「证明某个补全出来的子范畴性质良好」压缩成一条 Ext-消没条件。`thm.solid-abelian` 就是它的实例（$\mathcal{A} = \operatorname{Cond}(\mathbf{Ab})$，$F(\mathbb{Z}[S]) = Z[S]^{\blacksquare}$）。

⚠ 条件里只对**核**要求同构，不对余核要求 —— 但对偶地写成余核也一样（见原文 Remark 5.11）。

📌 证明是标准的同调代数：先证 $\mathcal{A}_F$ 对核与极限封闭，再用「两个直和之间的映射」把余核也拉进来，最后用 Postnikov 截断把复形的情形归约到单点。
