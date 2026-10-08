# 列紧 $\implies$ 紧
`imp.seqcompact-compact` · 推出 · strong 边 · 根 `../`

`def.sequentially-compact` 列紧 → `def.compact` 紧

**⑤ 收尾。** $x$ 落在某个 $U \in \mathcal{U}$ 中。$U$ 开，故存在 $r > 0$ 使 $B(x, r) \subseteq U$。取 $k$ 充分大，使 $1/k < r/2$ 且 $d(x_{k}, x) < r/2$；则对任意 $y \in B_{k}$，

$$d(y, x) \le d(y, x_k) + d(x_k, x) < 1/k + r/2 < r$$

即 $B_{k} \subseteq B(x, r) \subseteq U$。于是 $B_{k}$ 被 $\mathcal{U}$ 的**一个**成员盖住了，与「$B_{k}$ 是坏球」矛盾。

故 $\mathcal{U}$ 必有有限子覆盖，$X$ 紧。∎

> 「坏球」这一招的直觉是：让一串被架空的小球缩到一个极限点，再用极限点的开邻域一口吞掉它。整段只用全有界，没用选择公理。
