# 差集与补集　`def.diff-complement`
差集 / 补集 / 对称差
layer 2 · 定义 · 集合的构造 · 集合论
[在星图里打开](../#n=def.diff-complement)　·　[节点索引](../index.md)

设 $A$、$B$、$X$ 是集合且 $A, B \subseteq X$：

- **差集**：$A \setminus B := \{ x \in A : x \notin B \}$；
- **补集**（相对于 $X$）：$A^{c} := X \setminus A$；
- **对称差**：$A \triangle B := (A \setminus B) \cup (B \setminus A)$。

基本恒等式：

$$A \setminus B = A \cap B^{c}, \qquad (A^{c})^{c} = A, \qquad (\bigcup_i A_i)^{c} = \bigcap_i A_i^{c}$$

最后一条就是 **De Morgan 律**。

## 它能推出什么 / 谁在用它
- 被 [`def.closed-set`](../nodes/def.closed-set.md) 闭集与闭包 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.diff-complement.2.md](./def.diff-complement.2.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.diff-complement.md`

引用：`def.diff-complement`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
