# 逐点继承 $\mathbf{Set}$ 的性质
`imp.site-properties` · 推出 · strong 边 · 根 `../`

`prop.filtered-exact` 滤过余极限正合 + `def.universal-colimit` 万有关系 + `thm.sheafification` 层化 → `prop.site-properties` site 的层范畴的好性质

第 3 条具体证一下（其余同法）。设 $F \to G$ 是层范畴里的满态射。取它在层范畴中的满-单分解 $F \to I \rightarrowtail G$。对该分解层化（层上的层化是恒等），并用满态射的右可消性得 $I \to G$ 既满又单，于是是同构（前一条命题），所以 $I \cong G$ 落在 $F$ 的像里。

再由「满态射的局部判据」，$F \to G$ 是满的当且仅当局部有原像；把这个局部条件写成 $F \to G$ 的核对 $F \times_{G} F \rightrightarrows F$，就得到 $F \to G$ 是这对投影的余等化子 —— 即**正则满**。∎

> 整条证明的模子是：**先在函子范畴里逐点做，再用层化运回来**。这就是为什么前面要花力气把「滤过余极限正合」「层化保有限极限」立起来。
