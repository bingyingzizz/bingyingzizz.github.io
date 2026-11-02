# 拓扑阿贝尔群正合列的搬运　`prop.exact-sequence-topo-ab`　·　说明
根 `../`

左正合是自动的（上一条函子保所有极限）；右端要的是「$\underline{v}$ 是满态射」，而凝聚态里满态射的判据就是「对自由紧 Hausdorff 空间逐点满」，于是归结为紧提升条件。

📌 **局部紧时紧提升条件自动满足** —— 所以对局部紧阿贝尔群，正合列可以整条搬过去。

**证明。**
- **左正合**：函子 $M\mapsto\underline{M}$ 保所有极限（上一条），于是 $0\to\underline{M'}\to\underline{M}$ 正合、且 $\underline u$ 是单射 ✓。
- **中段的像 = 核**：$v\circ u = 0$ 逐点成立；反向「$v(m) = 0 \implies m\in u(M')$」逐点由拓扑正合列给出 ✓。
- **右端满**：由满态射判据（在自由紧 Hausdorff 对象上逐点满），取自由 $F$ 与 $y : F \to M''$。

$y(F)$ 是 $M''$ 里的**紧 Hausdorff** 子集（$F$ 紧、$M''$ 弱 Hausdorff 故 $y(F)$ 闭且 Hausdorff）；

由**紧提升条件**取紧 Hausdorff $K\subseteq M$ 使 $y(F)\subseteq v(K)$。

对每点挑一个原像，得到映射 $F\to K\to M$；

> 续见 notes/prop.exact-sequence-topo-ab.2.md
