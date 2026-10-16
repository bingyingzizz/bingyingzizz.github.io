# 正交　`def.orthogonality`
正交与正交分解
layer 10 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.orthogonality)　·　[节点索引](../index.md)

设 $V$ 是内积空间。

- $u \perp v$（称 $u$ 与 $v$ **正交**）$\iff \langle u, v \rangle = 0$；
- $S \perp T$：$S$ 中每个向量与 $T$ 中每个向量正交；
- $\{v_1, \ldots, v_k\}$ 叫**标准正交组**，当且仅当 $\langle v_i, v_j \rangle = \delta_{ij}$；
- $\{v_i\}$ 是**标准正交基**，当且仅当它既是一组基又是标准正交组。

**勾股定理**：$u \perp v \implies \|u + v\|^{2} = \|u\|^{2} + \|v\|^{2}$。

## 它能推出什么 / 谁在用它
- 被 [`def.orthogonal-complement`](../nodes/def.orthogonal-complement.md) 正交补 用

- …另有出边，续页见 [nodes/def.orthogonality.3.md](./def.orthogonality.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.orthogonality.2.md](./def.orthogonality.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8

> 说明见 `notes/def.orthogonality.md`

引用：`def.orthogonality`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
