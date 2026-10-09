# 滤过范畴可换成有向集　`prop.filtered-directed`
滤过 $\implies$ 存在共尾的有向集
layer 14 · 命题 · 图与极限 · 范畴论

若 $I$ 是**滤过**范畴，则存在**有向集** $J$ 与函子 $u : J \to I$，使得对任何图 $D : I \to \mathcal{C}$：

若 $\varinjlim_{J} D \circ u$ 存在，则 $\varinjlim_{I} D$ 存在，且 $\varinjlim_{J} D\circ u \cong \varinjlim_{I} D$。

## 为什么成立（入边，证明在 proofs/）
- `def.filtered-category` 滤过范畴：用到了定义 滤过范畴　proofs/def-dep.filtereddir-filtered.md
- `def.chain` 链：用到了定义 链　proofs/def-dep.filtereddir-chain.md
- `def.cofinal-functor` 共尾函子：用到了定义 共尾函子　proofs/def-dep.filtereddir-cofinal.md

> 说明见 `notes/prop.filtered-directed.md`
