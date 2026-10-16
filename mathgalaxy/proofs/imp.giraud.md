# Giraud 定理的证明
`imp.giraud` · 推出 · strong 边 · 根 `../`

`def.topos` 拓扑斯 + `def.canonical-topology` 标准拓扑 + `def.generator` 生成元集 + `lem.representable-quotient` 可表示性的下降 → `thm.giraud` Giraud 定理

**(2) $\implies$ (3)。** 取 $\mathcal{C} = \mathcal{T}$，配上 $\mathcal{T}$ 上的**标准拓扑**。此时层范畴就是 $\mathcal{T}$ 自己（因为标准拓扑下的层恰好是可表示的那些），于是 $\mathcal{T} \simeq \widehat{\mathcal{C}}$。∎

**(3) $\implies$ (4)。** 预层范畴 $\widehat{\mathcal{C}}$ 是拓扑斯，而层范畴是它的**反射子范畴**，反射（层化）保有限极限 —— 这正是 (4) 的形式。∎

> 续见 proofs/imp.giraud.2.md
