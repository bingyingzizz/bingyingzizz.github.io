# imp.lc-ext-vanishing
`imp.lc-ext-vanishing` · 推出 · strong 边 · 根 `../`

`def.locally-compact-space` 局部紧空间 + `def.ext` 扩展群 Ext + `def.derived-category` 导出范畴 + `def.abelian-category` 阿贝尔范畴 → `thm.lc-ext-vanishing` 局部紧阿贝尔群高次 Ext 消失

**证法：先归约、再逐类掐掉**。

由局部紧阿贝尔群的**结构定理**（每个这样的群都是「离散群」被「有限维实 Banach 空间 $\oplus$ 连通紧 Hausdorff 群」扩张出来的），只要对三类源与三类靶交叉验证即可。

$M$ 离散时用两段自由消解，$N$ 离散时用那条练习（连通局部紧群对离散群）；

$N$ 是 Banach 时用「紧 $\to$ Banach 全零」与「有限维 Banach 之间的 RHom 只有 0 次」。

**为什么是「只剩 $\operatorname{Ext}^{0}, \operatorname{Ext}^{1}$」**：$\operatorname{Ext}^{0}$ 就是 $\operatorname{Hom}$，$\operatorname{Ext}^{1}$ 分类扩张 —— 这两项是**代数**上本来就该有的；

> 续见 proofs/imp.lc-ext-vanishing.2.md
