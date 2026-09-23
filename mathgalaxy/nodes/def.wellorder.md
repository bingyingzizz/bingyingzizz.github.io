# 良序集　`def.wellorder`
良序集（Well-Ordered Set）
layer 6 · 定义 · 序结构 · 序理论

全序集 $(W, \preceq )$ 是**良序的**，当且仅当 $W$ 的每个非空子集都有最小元：

$$\forall S \subseteq W ( S \ne \emptyset \to \exists m \in S, \forall s \in S, m \preceq s )$$

等价于：不存在无穷严格递减链 $w_{0} \succ w_{1} \succ w_{2} \succ \cdots$。

## 为什么成立（入边，证明在 proofs/）
- `def.poset` 偏序集：用到了定义 偏序集　proofs/def-link.wellorder-poset.md
- `def.finchar` 有限特征：两种「用有限/最小的东西控制无穷」的手法　proofs/ana.tame-infinite.md
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-wellorder.md

## 它能推出什么 / 谁在用它
- 被 `def.ordinal` 序数 用
- 被 `thm.recursion-wellorder` 超限递归 用
- ⇒ `thm.recursion-wellorder` 超限递归
- 被 `thm.wellordering` 良序定理 用
- 被 `thm.hartogs` Hartogs 定理 用
- ～弱边 `def.finchar` 有限特征

refs: Kunen, Set Theory, I.11

> 说明见 `notes/def.wellorder.md`
