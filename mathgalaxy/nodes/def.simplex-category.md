# 单纯形范畴　`def.simplex-category`
单纯形范畴 $\Delta$
layer 8 · 定义 · 图与极限 · 范畴论

**单纯形范畴** $\Delta$ 的对象是正整数

$$[n] := n + 1 := \{\, 0, 1, \ldots, n \,\} \qquad (n \in \mathbb{N}),$$

态射是**保序映射** $[m] \to [n]$。它由两类基本的态射生成：

- **面映射** $\delta^{i} : [n-1] \to [n]$：跳过 $i$（$i = 0, \ldots, n$），不取 $i$ 的保序单射；
- **退化映射** $\sigma^{i} : [n+1] \to [n]$：把 $i$ 与 $i+1$ 撞在一起（$i = 0, \ldots, n$），保序满射。

## 为什么成立（入边，证明在 proofs/）
- `def.category` 范畴：用到了定义 范畴　proofs/def-dep.simplexcat-category.md

> 说明见 `notes/def.simplex-category.md`
