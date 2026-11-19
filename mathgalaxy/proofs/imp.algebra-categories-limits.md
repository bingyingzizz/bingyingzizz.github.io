# imp.algebra-categories-limits
`imp.algebra-categories-limits` · 推出 · strong 边 · 根 `../`

`def.limit` 极限 + `def.product` 积 / 余积 + `def.equalizer` 等化子 / 余等化子 + `def.final-initial` 终对象 / 始对象 + `def.fibered-product` 纤维积 / 纤维余积 + `def.monoid` 幺半群 + `def.group` 群 + `def.ring` 环 + `def.category-of-sets` 集合范畴 + `def.group-action` 群作用 + `def.module` 模 + `def.algebra-over-ring` 环上的代数 → `prop.algebra-categories-limits` 代数范畴里的极限与余极限

**构造。** 设 $F:J\to\mathcal C$ 是小图。把每个 $F(j)$ 忘成底层集合，在 $\mathbf{Set}$ 中取极限 $L=\varprojlim F$，即 $L=\{(x_j)\in\prod_j F(j): F(u)(x_j)=x_k\ \text{对每条 }u:j\to k\}$。逐项验证：

> 续见 proofs/imp.algebra-categories-limits.2.md
