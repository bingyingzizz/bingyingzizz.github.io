# étale 层的定义 $\implies$ 开浸入、有限 étale 覆叠、常值层都是层
`imp.etale-examples` · 推出 · strong 边 · 根 `../`

`def.etale-sheaf` étale 层 + `def.etale-space` étale 空间 → `prop.etale-sheaf-examples` étale 层的例子

层化之后的 $\underline{A}$ 才是「$A$-值局部常值函数」，它在 étale 拓扑下当然是层 —— 因为它由 Zariski 层满足粘合，而 étale 覆盖比 Zariski 覆盖细，粘合条件更强但整体函数仍然唯一决定。

∎

**④ 两个具体例子是有限 étale 的。** $\operatorname{Spec}\mathbb{C} \to \operatorname{Spec}\mathbb{R}$：有限（作为 $\mathbb{R}$-模秩 $2$）、平坦（自由）、无分歧（$\mathbb{C}/\mathbb{R}$ 是可分扩张，$\Omega^{1} = 0$）。

$t \mapsto t^{n} : \mathbb{G}_{m} \to \mathbb{G}_{m}$：有限平坦；

在 $n$ 于基上可逆时无分歧（微分 $n t^{n-1}dt$ 是单位倍的 $dt$）。

∎

> 续见 proofs/imp.etale-examples.6.md
