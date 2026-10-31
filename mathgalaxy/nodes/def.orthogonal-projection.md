# 正交投影　`def.orthogonal-projection`
正交投影
layer 12 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.orthogonal-projection)　·　[节点索引](../index.md)

设 $U \subseteq V$ 是有限维子空间，$V = U \oplus U^{\perp}$。对 $v \in V$ 唯一地写 $v = u + w$（$u \in U$、$w \in U^{\perp}$），定义

$$P_U(v) := u$$

$P_U : V \to V$ 叫**正交投影**（或正交投影算子）。它的性质：
> 陈述续见 [nodes/def.orthogonal-projection.2.md](./def.orthogonal-projection.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.orthogonal-complement`](../nodes/def.orthogonal-complement.md) 正交补：用到了定义 正交补　[proofs/dep.orthocomplement-projection.md](../proofs/dep.orthocomplement-projection.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.orthogonal-projection.3.md](./def.orthogonal-projection.3.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8

> 说明见 `notes/def.orthogonal-projection.md`

引用：`def.orthogonal-projection`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
