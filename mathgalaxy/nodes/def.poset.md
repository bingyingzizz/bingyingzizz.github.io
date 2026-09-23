# 偏序集　`def.poset`
偏序集 / 全序集（Partially Ordered Set）
layer 5 · 定义 · 序结构 · 序理论

设 $\prec
> 陈述续见 `nodes/def.poset.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.rel` 关系：用到了定义 关系　proofs/def-dep.rel-poset.md

## 它能推出什么 / 谁在用它
- 被 `def.ordered-field` 有序域 用
- 被 `def.order-iso` 序同构 用
- 被 `def.chain` 链 用
- 被 `def.bound` 界与确界 用
- 被 `def.wellorder` 良序集 用
- 被 `def.finchar` 有限特征 用
- 被 `lem.zorn` 佐恩引理 用
- 被 `thm.hausdorff` Hausdorff 极大原理 用
- 被 `def.real` 实数系 ℝ 用

refs: Kunen, Set Theory, I.11；Davey & Priestley, Introduction to Lattices and Order

## 说明
典型例子：$\langle \mathcal{P}(S), \subseteq \rangle$ 是偏序集但不是全序集；$\langle \mathbb{R}, \le \rangle$ 是全序集。

反对称性是说：只允许「相等」这一种互相 $\le$ 的方式，所以偏序可以看成「$\le$ 的抽象」。
