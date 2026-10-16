# 范畴嵌入复形　`prop.category-into-complexes`　·　说明
根 `../`

**证明。**
**1.** 复形之间的态射是 $\mathbb{Z}$ 指标的一族映射 $f^{n} : [M]^{n} \to [N]^{n}$ 且与微分交换；而 $[M]$、$[N]$ 只在 $0$ 次非零，微分又是零，交换性自动成立 ✓。于是
$$\operatorname{Hom}_{\mathcal{C}(\mathcal{C})}([M], [N]) = \operatorname{Hom}_{\mathcal{C}}(M, N) \quad \text{（只有 } n = 0 \text{ 这一项）}\;\checkmark$$
即全忠实 ✓。
**2.** 复形范畴里的极限与余极限**逐项计算**（见「复形范畴的性质」）。逐项看：$0$ 次上得到原图在该处的极限（对 $[M_{i}]$ 逐项取极限，$0$ 次那一项恰是 $\lim M_{i}$）✓；其余次上得到「一堆零对象的极限」—— 而 $0$ 既是始对象又是终对象，故那些极限与余极限仍是 $0$ ✓。于是 $[\lim M_{i}] = \lim [M_{i}]$，$[\varinjlim M_{i}] = \varinjlim [M_{i}]$ ✓。∎

> 续见 notes/prop.category-into-complexes.2.md
