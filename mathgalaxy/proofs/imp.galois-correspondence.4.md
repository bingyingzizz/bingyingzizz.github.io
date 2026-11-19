# imp.galois-correspondence
`imp.galois-correspondence` · 推出 · strong 边 · 根 `../`

`def.galois-extension` 伽罗瓦扩张 + `def.galois-group` 伽罗瓦群 + `def.fixed-field` 不动域 + `def.separable-extension` 可分扩张 + `def.normal-subgroup` 正规子群 + `thm.lagrange` Lagrange 定理 → `thm.galois-correspondence` 伽罗瓦基本定理

**引理 2**：$|\operatorname{Aut}(K/F)|\le [K:F]$。证明：设 $m=[K:F]$，取 $F$-基 $e_{1},\ldots,e_{m}$。若 $n>m$ 个不同自同构 $\sigma_{1},\ldots,\sigma_{n}$ 存在，则 $K^{m}$ 中 $n$ 个向量 $\bigl(\sigma_{i}(e_{1}),\ldots,\sigma_{i}(e_{m})\bigr)$ 线性相关：存在不全为零的 $c_{i}\in K$ 使 $\sum_{i}c_{i}\sigma_{i}(e_{j})=0$ 对每个 $j$，于是 $\sum_{i}c_{i}\sigma_{i}=0$ 在 $K$ 上成立，违背引理 1。

> 续见 proofs/imp.galois-correspondence.5.md
