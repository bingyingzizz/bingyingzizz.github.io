# 内积的正定性 $\implies$ Cauchy–Schwarz
`imp.cauchy-schwarz` · 推出 · strong 边 · 根 `../`

`def.inner-product` 内积 + `def.induced-norm` 诱导范数与距离 → `thm.cauchy-schwarz` Cauchy–Schwarz

由此也得三角不等式：$\|u+v\|^{2} = \|u\|^{2} + 2\operatorname{Re}\langle u,v\rangle + \|v\|^{2} \le \|u\|^{2} + 2\|u\|\|v\| + \|v\|^{2} = (\|u\|+\|v\|)^{2}$。

> 证明的关键是「**对一切 $t$ 都非负**」：这给了一个关于 $t$ 的二次函数恒非负，于是它的判别式 $\le 0$ —— 这正是 Cauchy–Schwarz。
