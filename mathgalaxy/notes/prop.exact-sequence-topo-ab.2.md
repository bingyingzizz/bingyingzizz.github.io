# 拓扑阿贝尔群正合列的搬运　`prop.exact-sequence-topo-ab`　·　说明
根 `../`

**证明。**
- **左正合**：函子 $M\mapsto\underline{M}$ 保所有极限（上一条），于是 $0\to\underline{M'}\to\underline{M}$ 正合、且 $\underline u$ 是单射 ✓。
- **中段的像 = 核**：$v\circ u = 0$ 逐点成立；反向「$v(m) = 0 \implies m\in u(M')$」逐点由拓扑正合列给出 ✓。
- **右端满**：由满态射判据（在自由紧 Hausdorff 对象上逐点满），取自由 $F$ 与 $y : F \to M''$。$y(F)$ 是 $M''$ 里的**紧 Hausdorff** 子集（$F$ 紧、$M''$ 弱 Hausdorff 故 $y(F)$ 闭且 Hausdorff）；由**紧提升条件**取紧 Hausdorff $K\subseteq M$ 使 $y(F)\subseteq v(K)$。对每点挑一个原像，得到映射 $F\to K\to M$；连续性由「$v$ 在紧块上是商映射」（拓扑正合列里 $v$ 是商映射，限制到$K$、$y(F)$ 上仍是商映射）给出。于是 $y$ 在图下提升，$\underline v(F)$ 满 ✓。∎
