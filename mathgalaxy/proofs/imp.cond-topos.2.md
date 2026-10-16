# $\mathbf{CHaus}$ 是预拓扑斯 $\implies$ $\mathrm{Cond}$ 是拓扑斯
`imp.cond-topos` · 推出 · strong 边 · 根 `../`

`def.chaus-pretopos` CHaus 是预拓扑斯 + `def.free-presentation` 自由表示 + `thm.giraud` Giraud 定理 → `thm.cond-topos` Cond 是拓扑斯

**小生成元集。** 层范畴由可表示预层生成，所以取全体**自由**紧 Hausdorff 空间 $\beta I$（在 $\mathrm{Cond}$ 里）作生成元集即可 —— 每个紧 Hausdorff 空间都有自由表示 $\beta S^{\mathrm{disc}} \twoheadrightarrow S$，于是每个可表示预层都被这些自由对象盖住。

**有限极限、余积、等价关系。** 层范畴里的这些构造都是**逐点**算的（在 $\mathbf{CHaus}$ 上取极限/余积/商），所以它们的不交性、万有性、有效性都由 $\mathbf{CHaus}$ 的对应性质继承过来 —— 层化保有限极限与余极限，正好把结论从预层范畴运到层范畴。∎

> 这就是整段路的终点：**从「紧 Hausdorff 空间」这一件拓扑材料出发，造出了一个拓扑斯。**
