# 重心重分　`def.barycentric-subdivision`　·　说明
根 `../`

⭐ 重分不改变几何实现，但把单纯形切细：若 $\dim K = n$，则 $\operatorname{mesh}(K^{(1)}) \le \frac{n}{n+1}\operatorname{mesh}(K)$，反复重分可使直径任意小。

⭐ 它是单纯逼近定理的第二步：重分够细，星条件才成立（见 thm.simplicial-approximation）。

⚠ 新顶点是「单纯形的重心」，不是原顶点；顶点数一般远多于 $K$。
