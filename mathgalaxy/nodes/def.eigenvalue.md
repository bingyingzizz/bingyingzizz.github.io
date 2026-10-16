# 特征值与特征向量　`def.eigenvalue`
特征值与特征向量（Eigenvalue & Eigenvector）
layer 11 · 定义 · 特征值与 Jordan 型 · 抽象代数
[在星图里打开](../#n=def.eigenvalue)　·　[节点索引](../index.md)

设 $T : V \to V$ 线性，$V \ne \{0\}$。数 $\lambda \in K$ 叫 $T$ 的**特征值**，当且仅当存在**非零**向量 $v \in V$ 使

$$T(v) = \lambda\, v$$

这样的 $v$ 叫属于 $\lambda$ 的**特征向量**。属于 $\lambda$ 的特征向量加上 $0$ 构成子空间

$$E_{\lambda} := \ker(T - \lambda\,I) \subseteq V$$

叫**特征子空间**；$\dim E_{\lambda}$ 叫 $\lambda$ 的**几何重数**。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.diagonalizable`](../nodes/thm.diagonalizable.md) 可对角化判据

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.eigenvalue.2.md](./def.eigenvalue.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 6

> 说明见 `notes/def.eigenvalue.md`

引用：`def.eigenvalue`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
