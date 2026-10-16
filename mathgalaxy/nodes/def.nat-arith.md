# 自然数的加法与乘法　`def.nat-arith`
自然数上的加法与乘法（由递推定义）
layer 7 · 定义 · 数系的构造 · 集合论
[在星图里打开](../#n=def.nat-arith)　·　[节点索引](../index.md)

设 $\omega = \mathbb{N}$，$S(n) := n \cup \{n\}$，$0 := \emptyset$。用**递推定义**在 $\omega$ 上定义两个运算。

**加法**：对每个固定的 $m$，$n \mapsto m + n$ 是满足下式的唯一 $g : \omega \to \omega$：

$$m + 0 := m, \qquad m + S(n) := S(m + n)$$

**乘法**：同样地，

$$m \cdot 0 := 0, \qquad m \cdot S(n) := m \cdot n + m$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.induction`](../nodes/thm.induction.md) 归纳原理与递推定义：用到了定义 归纳原理与递推定义　[proofs/dep.induction-natarith.md](../proofs/dep.induction-natarith.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.nat-arith.2.md](./def.nat-arith.2.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.nat-arith.md`

引用：`def.nat-arith`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
