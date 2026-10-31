# 正交补　`def.orthogonal-complement`
正交补 $U^{\perp}$ 与直和分解
layer 11 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.orthogonal-complement)　·　[节点索引](../index.md)

设 $U \subseteq V$ 是子空间。$U$ 的**正交补**定义为

$$U^{\perp} := \{\, v \in V : \langle u, v \rangle = 0 \ \text{for all}\ u \in U \,\}$$

它是 $V$ 的子空间，并且

- $U \cap U^{\perp} = \{0\}$；
- $U \subseteq (U^{\perp})^{\perp}$；
- **有限维时** $V = U \oplus U^{\perp}$，且 $(U^{\perp})^{\perp} = U$、$\dim U^{\perp} = \dim V - \dim U$。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.orthogonal-complement.2.md](./def.orthogonal-complement.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.orthogonal-complement.3.md](./def.orthogonal-complement.3.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8

> 说明见 `notes/def.orthogonal-complement.md`

引用：`def.orthogonal-complement`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
