# 等距与正交变换　`def.isometry`
等距、正交变换与酉变换
layer 10 · 定义 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=def.isometry)　·　[节点索引](../index.md)

线性映射 $T : V \to V$ 叫**等距**，当且仅当它保持内积（等价地保持范数）：

$$\langle Tv, Tw \rangle = \langle v, w \rangle \quad (\forall v, w) \qquad \iff \qquad \|Tv\| = \|v\| \quad (\forall v)$$

实数情形称**正交变换**，复数情形称**酉变换**；它们的矩阵分别叫正交矩阵（$Q^{\mathsf{T}}Q = I$）与酉矩阵（$U^{\dagger}U = I$）。

等距的等价刻画：$T^{\ast}T = I$（$\iff T$ 可逆且 $T^{\ast} = T^{-1}$）。全体正交（酉）变换构成群 $O(n)$（$U(n)$）。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.isometry.2.md](./def.isometry.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8

> 说明见 `notes/def.isometry.md`

引用：`def.isometry`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
