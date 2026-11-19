# imp.galois-correspondence
`imp.galois-correspondence` · 推出 · strong 边 · 根 `../`

`def.galois-extension` 伽罗瓦扩张 + `def.galois-group` 伽罗瓦群 + `def.fixed-field` 不动域 + `def.separable-extension` 可分扩张 + `def.normal-subgroup` 正规子群 + `thm.lagrange` Lagrange 定理 → `thm.galois-correspondence` 伽罗瓦基本定理

**引理 3（Artin 定理）**：设 $G$ 是 $K$ 的有限自同构群、$n=|G|$、$F=K^{G}$。则 $[K:F]=n$。证明分两步。先证 $[K:F]\le n$：反设 $m=[K:F]>n$，取 $F$-线性无关的 $x_{1},\ldots,x_{n+1}\in K$。方程组 $\sum_{j=1}^{n+1}\sigma_{i}(x_{j})c_{j}=0$（$i=1,\ldots,n$）是 $n$ 个方程、$n+1$ 个未知量，有非零解 $c\in K^{n+1}$。在所有非零解中取非零分量个数 $r$ 最小者。$r\ge 2$：若只有 $c_{j}\ne 0$，由 $\sigma_{1}=\operatorname{id}$ 的方程得 $c_{j}x_{j}=0$，与 $x_{j}\ne 0$ 矛盾。重排并伸缩，使 $c_{r}=1$（于是 $c_{r}\in F$）；若此时所有分量都落在 $F$，则由 $\

> 续见 proofs/imp.galois-correspondence.6.md
