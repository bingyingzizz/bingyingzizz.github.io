# 幂集 + 配对 + 并集 + 分离公理模式 $\implies A \times B$ 存在
`imp.product` · 推出 · strong 边 · 根 `../`

`ax.power` 幂集公理 + `ax.pair` 配对公理 + `ax.union` 并集公理 + `ax.sep` 分离公理模式 → `thm.product` 笛卡尔积存在

则 $C$ 恰是 $A \times B$：一方面每个 (a, b) 都在 $\mathcal{P}(\mathcal{P}(A \cup B))$ 中，另一方面 $z$ 是不在 $A$、$B$ 中任意点处取到的有序对时不会被选进来。∎

> 这个证明展示了一个典型套路：先用幂集「造一个足够大的容器」，再用分离公理模式「筛出真正想要的东西」。
