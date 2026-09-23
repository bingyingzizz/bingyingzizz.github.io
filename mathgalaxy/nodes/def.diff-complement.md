# 差集与补集　`def.diff-complement`
差集 / 补集 / 对称差（Difference, Complement & Symmetric Difference）
layer 2 · 定义 · 集合的构造 · 集合论

设 $A$、$B$、$X$ 是集合且 $A, B \subseteq X$：

- **差集**：$A \setminus B := \{ x \in A : x \notin B \}$；
- **补集**（相对于 $X$）：$A^{c} := X \setminus A$；
- **对称差**：$A \triangle B := (A \setminus B) \cup (B \setminus A)$。

基本恒等式：
> 陈述续见 `nodes/def.diff-complement.2.md`


## 为什么成立（入边，证明在 proofs/）
- `def.subset` 子集：用到了定义 子集　proofs/dep.subset-diff.md

## 它能推出什么 / 谁在用它
- 被 `def.closed-set` 闭集与闭包 用

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.diff-complement.md`
