# imp.galois-correspondence
`imp.galois-correspondence` · 推出 · strong 边 · 根 `../`

`def.galois-extension` 伽罗瓦扩张 + `def.galois-group` 伽罗瓦群 + `def.fixed-field` 不动域 + `def.separable-extension` 可分扩张 + `def.normal-subgroup` 正规子群 + `thm.lagrange` Lagrange 定理 → `thm.galois-correspondence` 伽罗瓦基本定理

sigma_{1}=\operatorname{id}$ 的方程 $\sum c_{j}x_{j}=0$ 与 $x_{j}$ 的 $F$-线性无关得所有 $c_{j}=0$，与非零解矛盾。故有某个分量 $\notin F$，它必不是第 $r$ 个；重排前 $r-1$ 个分量使 $c_{1}\notin F$。取 $\tau\in G$ 使 $\tau(c_{1})\ne c_{1}$。把方程组逐项作用 $\tau$，并由 $\{\tau\sigma_{i}\}=\{\sigma_{i}\}$ 重排，知 $\bigl(\tau(c_{j})\bigr)$ 也是解；相减得解 $d_{j}=c_{j}-\tau(c_{j})$：$d_{r}=0$、$d_{1}\ne 0$，故非零分量个数 $\le r-1$，矛盾。于是 $[K:F]\le n$。再证 $n\le[K:F]$：$G\subseteq\operatorname{Aut}(K/F)$，由引理 2 得 $n\le|\operatorname

> 续见 proofs/imp.galois-correspondence.7.md
