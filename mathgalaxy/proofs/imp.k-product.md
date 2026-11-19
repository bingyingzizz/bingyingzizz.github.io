# imp.k-product
`imp.k-product` · 推出 · strong 边 · 根 `../`

`def.compactly-generated` 紧生成空间 + `def.k-topology` k-开、k-闭与 k-拓扑 + `def.locally-compact-space` 局部紧空间 + `def.hausdorff` Hausdorff 空间 → `prop.k-product` k-化与积

**证明（第一式）。** $k$-拓扑由「哪些紧 Hausdorff 块映射连续」决定，而关键是一条逐点事实：
- **对 $T$ 紧 Hausdorff，$g : T \to X$ 连续 $\iff$ $g : T \to kX$ 连续。** 反正向显然（$kX$ 拓扑更细）；正向因为 $kX$ 的开集就是这么定义的：$U \subseteq kX$ 开 $\iff$ 沿每个紧 Hausdorff 映射的拉回开，取 $g$ 即得 $g^{-1}(U)$ 开。
- 于是对 $T$ 紧 Hausdorff：$(g_{1}, g_{2}) : T \to X \times Y$ 连续 $\iff$ $g_{1} : T\to X$ 与 $g_{2} : T \to Y$ 都连续 $\iff$ $g_{1} : T \to kX$ 与 $g_{2}$ 都连续 $\iff$ $T \to kX\times Y$ 连续。
- 两张 $k$-拓扑 $k(X\times Y)$ 与 $k(kX\times Y)$ 由**同一族**测试映射（全体 $T \to$ 该底集合，$T$ 紧 Hausdorff）的连续性刻画，故它们的开集族相同，即 $k(kX\times Y) 

> 续见 proofs/imp.k-product.2.md
