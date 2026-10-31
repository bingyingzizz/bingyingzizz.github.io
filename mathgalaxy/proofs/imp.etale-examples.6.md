# étale 层的定义 $\implies$ 开浸入、有限 étale 覆叠、常值层都是层
`imp.etale-examples` · 推出 · strong 边 · 根 `../`

`def.etale-sheaf` étale 层 + `def.etale-space` étale 空间 → `prop.etale-sheaf-examples` étale 层的例子

**③ 常值层。** 常值预层 $U \mapsto A$ 一般不是层（Zariski 下就已经如此：两条开集上的常值函数若在交叠上一致，未必是整体常值）。层化之后的 $\underline{A}$ 才是「$A$-值局部常值函数」，它在 étale 拓扑下当然是层 —— 因为它由 Zariski 层满足粘合，而 étale 覆盖比 Zariski 覆盖细，粘合条件更强但整体函数仍然唯一决定。∎

> 续见 proofs/imp.etale-examples.7.md
