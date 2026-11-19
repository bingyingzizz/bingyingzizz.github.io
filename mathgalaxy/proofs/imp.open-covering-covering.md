# imp.open-covering-covering
`imp.open-covering-covering` · 推出 · strong 边 · 根 `../`

`def.condensed-set` 凝聚态集 + `def.grothendieck-topology` Grothendieck 拓扑 → `prop.open-covering-covering` 开覆盖给出覆盖

**证明。**
**（一）$X = S$ 紧 Hausdorff。** 开覆盖可取有限子覆盖，而紧 Hausdorff 是正规的，每块开集里含一个闭邻域、闭子集紧 ✓ —— 于是把开覆盖换成**有限的紧覆盖**，而「有限族拼起来等于全空间」正是 $\mathbf{FCHaus}$ 上预拓扑允许的覆盖 ✓。
**（二）一般 $X$。** 取 $f : S \to X$（$S$ 紧 Hausdorff），把覆盖拉回：$S = \bigcup_i f^{-1}(X_{i})$ 仍是开覆盖，由 (一) 得 $(S \times_{X} X_{i} \to S)_{i}$ 是 $S$ 的覆盖 ✓；

覆盖沿覆盖下降（传递性），于是 $(X_{i} \to X)_{i}$ 是 $X$ 的覆盖 ✓。

∎
