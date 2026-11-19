# imp.algebra-categories-colimits
`imp.algebra-categories-colimits` · 推出 · strong 边 · 根 `../`

`def.universal-colimit` 万有关系 + `def.product` 积 / 余积 + `def.equalizer` 等化子 / 余等化子 + `def.final-initial` 终对象 / 始对象 + `def.monoid` 幺半群 + `def.group` 群 + `def.ring` 环 + `def.category-of-g-sets` G-集范畴 + `def.module-category` 模范畴 + `def.category-of-algebras` R-代数范畴 + `def.category-of-sets` 集合范畴 → `prop.algebra-categories-colimits` 代数范畴的余极限

**构造。** 先看余积：$\mathbf{Mon}$ 的自由积取字并置后对「单位与运算相容」生成同余取商；$\mathbf{Grp}$ 的自由积同理（取正规闭包）；$\mathbf{Rng}$ 的自由积取非交换多项式环；$\mathbf{Alg}_R$ 的自由积取张量代数再商关系；$G\text{-}\mathbf{Set}$ 取不交并；$R\text{-}\mathbf{Mod}$ 取直和。每种的包含映射都满足余积泛性质。

> 续见 proofs/imp.algebra-categories-colimits.2.md
