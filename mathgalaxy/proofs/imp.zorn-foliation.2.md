# Zorn 引理：把局部叶片粘成极大叶
`imp.zorn-foliation` · 推出 · strong 边 · 根 `../`

`lem.zorn` Zorn 引理 + `def.involutive-distribution` 对合分布 + `def.integral-manifold` 积分流形 → `thm.foliation-existence` 叶状结构存在定理

**第二步：链有上界。** 设 $\{L_{\alpha}\}$ 是全序链，$L^{*} := \bigcup_{\alpha} L_{\alpha}$。连通性：递增并仍连通（任两点落在同一成员里）。切空间：$T L^{*} = \bigcup T L_{\alpha} = \mathcal{D}|_{L^{*}}$。光滑性：$L^{*}$ 是浸入子流形的递增并，且链中每个成员都是开浸入子流形，故 $L^{*}$ 仍是浸入子流形。于是 $L^{*} \in \mathcal{S}$，是链的上界。

**第三步：Zorn 取极大元。** 由 Zorn 引理得极大元 $L$，即过给定点的极大连通积分流形。

> 续见 proofs/imp.zorn-foliation.3.md
