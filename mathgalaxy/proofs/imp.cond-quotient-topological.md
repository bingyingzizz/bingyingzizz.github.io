# imp.cond-quotient-topological
`imp.cond-quotient-topological` · 推出 · strong 边 · 根 `../`

`def.condensed-abelian-group` 凝聚态阿贝尔群 → `prop.cond-quotient-topological` 商群在凝聚态意义下一致

**证明（思路）。** 正合列 $0 \to N \to M \to M/N \to 0$ 里，$N$ 闭保证 $M/N$ 是 Hausdorff 的局部紧群 ✓。

要证 $\underline{M}/\underline{N} \cong \underline{M/N}$。⚠️ 不能写「保极限 $\implies$ 送余核」——保极限只给**核**。正确两步：

① CondAb 的余核 = 「逐点商」预层 $U \mapsto \underline{M}(U)/\underline{N}(U)$ 的**层化**；

> 续见 proofs/imp.cond-quotient-topological.2.md
