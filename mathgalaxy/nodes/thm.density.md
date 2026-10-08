# 稠密性定理　`thm.density`
稠密性定理（Density Theorem）
layer 14 · 定理 · 预层与米田 · 范畴论

$\widehat{\mathcal{C}}$ 中的每个预层 $T$ 都是**可表示预层的余极限**：

$$T \;\cong\; \varinjlim_{(X, s) \in \mathcal{C}_{T}} h_{X}$$

## 为什么成立（入边，证明在 proofs/）
- `lem.yoneda` 米田引理 + `def.slice-category` 切片范畴：米田引理 $\implies$ 稠密性定理　proofs/imp.density.md
- `def.limit` 极限：用到了定义 极限　proofs/def-link.limit-density.md
- `def.slice-category` 切片范畴：用到了定义 切片范畴　proofs/def-link.slice-category-density.md
- `def.slice-category` 切片范畴：用到了定义 切片范畴　proofs/def-dep.slice-density.md

> 说明见 `notes/thm.density.md`
