# imp.galois-correspondence
`imp.galois-correspondence` · 推出 · strong 边 · 根 `../`

`def.galois-extension` 伽罗瓦扩张 + `def.galois-group` 伽罗瓦群 + `def.fixed-field` 不动域 + `def.separable-extension` 可分扩张 + `def.normal-subgroup` 正规子群 + `thm.lagrange` Lagrange 定理 → `thm.galois-correspondence` 伽罗瓦基本定理

**回到定理**。先说明 $K^{G}=F$：$K/F$ 正规且可分，若 $\alpha\notin F$，其极小多项式在 $K$ 中分裂且有另一个根 $\beta\ne\alpha$（可分性保证无重根、正规性保证其它根都在 $K$），$F$-嵌入 $\alpha\mapsto\beta$ 由正规性延拓为 $K$ 的自同构，它移动 $\alpha$。故固定域恰为 $F$，引理 3 给出 $[K:F] = |G|.$ 对中间域 $E$，$K/E$ 仍有限伽罗瓦（正规、可分都继承），故 $|\operatorname{Gal}(K/E)|=[K:E]$。

> 续见 proofs/imp.galois-correspondence.9.md
