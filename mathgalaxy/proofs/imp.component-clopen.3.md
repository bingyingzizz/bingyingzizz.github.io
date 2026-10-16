# 紧 Hausdorff 中连通分量是闭开邻域之交
`imp.component-clopen` · 推出 · strong 边 · 根 `../`

`def.connected` 连通与连通分量 + `def.clopen` 闭开集 + `def.chaus` 紧 Hausdorff 空间范畴 → `prop.component-clopen` 连通分量是闭开邻域之交

由 $C$ 的定义与 $K \cap C = \emptyset$，存在含 $x$ 的闭开集 $H$ 使 $H \cap K = \emptyset$，即 $H \subseteq U \cup V$。于是 $H \cap U$ 与 $H \cap V$ 都是 $H$ 中的闭开集（$U, V$ 不交故各自的补在 $H$ 中开），进而在 $S$ 中闭开（$H$ 闭开）。其中 $H \cap U \ni x$，所以由 $C$ 的定义 $C \subseteq H \cap U \subseteq U$，从而 $C \cap V = \emptyset$，与 $G \subseteq C \cap V$ 非空矛盾。∎

> 这一步是后面 Stone 对偶与 $\mathrm{Cond}$ 里「连通分量可控」的来源：在 $\mathbf{CHaus}$ 里，连通分量由**闭开集**这个可以自由摆弄的族描述出来。
