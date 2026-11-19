# imp.subobject-lattice
`imp.subobject-lattice` · 推出 · strong 边 · 根 `../`

`def.subobject` 子对象 + `def.fibered-product` 纤维积 / 纤维余积 + `def.pretopos` 预拓扑斯 → `prop.subobject-lattice` 子对象构成有界格

（像的存在来自预拓扑斯里余等化子 / 商的存在。）
- **有界**：最小元是始对象到 $X$ 的唯一态射（预拓扑斯里始对象到任何对象都是单态射），最大元是 $1_{X}$ ✓。
- **分配律**：$X_{1} \cap (X_{2}\cup X_{3}) = (X_{1}\cap X_{2}) \cup (X_{1}\cap X_{3})$ —— 沿单态射的拉回保余积（预拓扑斯里余积不交且万有），把两边都算成同一个拉回 ✓。
- **拉回是格同态**：$f^{*}(-) := -\times_{Y} X$ 保拉回（是极限），故保交、保上下界；而它保余积（万有性）与像（像的计算可以搬到拉回里做），故保并 ✓。∎
