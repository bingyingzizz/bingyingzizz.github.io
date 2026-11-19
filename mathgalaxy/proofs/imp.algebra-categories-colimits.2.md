# imp.algebra-categories-colimits
`imp.algebra-categories-colimits` · 推出 · strong 边 · 根 `../`

`def.universal-colimit` 万有关系 + `def.product` 积 / 余积 + `def.equalizer` 等化子 / 余等化子 + `def.final-initial` 终对象 / 始对象 + `def.monoid` 幺半群 + `def.group` 群 + `def.ring` 环 + `def.category-of-g-sets` G-集范畴 + `def.module-category` 模范畴 + `def.category-of-algebras` R-代数范畴 + `def.category-of-sets` 集合范畴 → `prop.algebra-categories-colimits` 代数范畴的余极限

**余等化子**：对 $f,g:A\to B$，在 $\mathbf{Set}$ 中取商 $B/\sim$（$f(a)\sim g(a)$ 生成），再取使商映射成为该范畴态射的最细结构：幺半群取同余闭包、群取正规闭包、环取代数理想、$G$-集取生成等价关系、模取子模、代数取双边理想。商对象满足余等化子的泛性质。

**余完备性**：小余积 + 余等化子生成所有小余极限；把上述构造组合即得。∎

> 自由构造 + 商闭包；每一步只核对泛性质，不依赖具体元素计算。
