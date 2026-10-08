# 序同构　`def.order-iso`
序同构与序型（Order Isomorphism）
layer 6 · 定义 · 序结构 · 序理论

设 $(A, \preceq )$ 与 $(B, \sqsubseteq )$ 是**偏序集**。双射 $f : A \to B$ 称为**序同构**，当且仅当

$$\forall a, b \in A\; ( a \preceq b \iff f(a) \sqsubseteq f(b) )$$

即 $f$ 与 $f^{-1}$ **都保序**。此时称 $A$ 与 $B$ **序同构**，记 $A \cong B$。

## 为什么成立（入边，证明在 proofs/）
- `def.poset` 偏序集：用到了定义 偏序集　proofs/dep.poset-order-iso.md

refs: Kunen, Set Theory, I.11；Jech, Set Theory, 2.2

> 说明见 `notes/def.order-iso.md`
