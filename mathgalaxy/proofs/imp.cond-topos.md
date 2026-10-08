# $\mathbf{CHaus}$ 是预拓扑斯 $\implies$ $\mathrm{Cond}$ 是拓扑斯
`imp.cond-topos` · 推出 · strong 边 · 根 `../`

`def.chaus-pretopos` CHaus 是预拓扑斯 + `def.free-presentation` 自由表示 + `thm.giraud` Giraud 定理 → `thm.cond-topos` Cond 是拓扑斯

用 Giraud 定理的第四条：**造出「预层范畴 + 正合反射」就够了**。

取预层范畴 $\widehat{\mathbf{CHaus}}$，则 $\mathrm{Cond} = \widehat{\mathbf{CHaus}}$ 是它的反射子范畴（反射是层化），并且层化**正合**（保有限极限，前面的层与拓扑那一段已经证过）。所以 $\mathrm{Cond}$ 是拓扑斯。∎

也可以直接验拓扑斯的四条公理，用的都是 $\mathbf{CHaus}$ 是预拓扑斯这一条：

> 续见 proofs/imp.cond-topos.2.md
