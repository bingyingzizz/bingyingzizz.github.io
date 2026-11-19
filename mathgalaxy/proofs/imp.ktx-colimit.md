# imp.ktx-colimit
`imp.ktx-colimit` · 推出 · strong 边 · 根 `../`

`def.category-of-topological-spaces` 拓扑空间范畴 + `def.compactly-generated` 紧生成空间 + `def.k-topology` k-开、k-闭与 k-拓扑 → `prop.ktx-colimit` kX 是紧空间的余极限

**证明。** 按 $k$-拓扑的定义，$U \subseteq kX$ 开 $\iff$ 对**每个**连续 $g : S \to X$（$S$ 紧 Hausdorff），$g^{-1}(U)$ 在 $S$ 中开。
另一方面，$\mathbf{Top}$ 里一张图 $\mathcal{D}$ 的余极限 $L$ 的拓扑有标准刻画：$U \subseteq L$ 开 $\iff$ 对图上每个对象的「余射」$D_{i} \to L$，$U$ 的拉回在 $D_{i}$ 中开。
把图取成「对象 = 全体连续映射 $g : S \to X$；态射 = 使三角形交换的连续映射」：余射就是 $g$ 本身，于是 $L$ 上的拓扑正是「由全体 $g$ 拉回定出的 $k$-拓扑」，即 $L = kX$（两者有同一个底集合同一个开集族）。∎
