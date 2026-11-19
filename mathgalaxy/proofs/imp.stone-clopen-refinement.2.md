# imp.stone-clopen-refinement
`imp.stone-clopen-refinement` · 推出 · strong 边 · 根 `../`

`def.stone-space` 全不连通与 Stone 空间 + `def.clopen` 闭开集 → `prop.stone-clopen-refinement` Stone 空间的闭开加细

对每个 $\varepsilon \in \{0,1\}^{m}$ 取
$$C_{\varepsilon} := D^{\varepsilon_{1}}_{1} \cap \cdots \cap D^{\varepsilon_{m}}_{m}.$$
每个 $C_{\varepsilon}$ 是闭开的（有限交、补）✓；不同 $\varepsilon$ 的 $C_{\varepsilon}$ **两两不交** ✓；它们**并为** $S$（每点属于唯一一个 $C_{\varepsilon}$）✓。去掉空集，得到有限族 $(C_{r})$。
**③ 每块含在某一支里。** 若 $C_{\varepsilon} \ne \emptyset$，取 $s \in C_{\varepsilon}$；由 $\{D_{j}\}$ 覆盖 $S$，有 $j$ 使 $s \in D_{j}$ —— 而 $s \in D_{j}$ 说明 $\varepsilon_{j} = 1$，于是
$$C_{\varepsilon} \subseteq D_{j} \subseteq U_{\alpha(j)} ✓$$
∎
