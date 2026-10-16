# 乘积测度通常不完备
`imp.product-incomplete` · 推出 · strong 边 · 根 `../`

`def.product-measure` 乘积测度 → `prop.product-incomplete` 乘积测度通常不完备

则 $G \subseteq D$ 而 $\mu \times \nu (D) = 0$，但 $G$ **不属于** $\mathfrak{B} \otimes  \mathfrak{B}$（它的截口给出的正是 $N$ —— 若 $G \in \mathfrak{B} \otimes  \mathfrak{B}$，由截口可测性，对每个 $x$ 都有 $G_x \in \mathfrak{B}$，而 $G_x$ 是 {x} 或 $\emptyset$ …… 需要用「$G$ 的截面沿对角线还原出 $N$」这一论证）。故 $\mu \times \nu$ 不完备。∎

$>$ ⭐ 一句话总结：**完备性可以被「零集的子集」打破，而乘积里零集特别多**。所以实用时必须先完备化 —— 这就是上一条定理存在的理由。

> ⚠ 「$G \notin \mathfrak{B} \otimes \mathfrak{B}$」那一步的细节（如何从截面还原出 $N$）这里只给了骨架；要写严格版，建议改用「对角线论证 + Fubini 定理给矛盾」的路线。
