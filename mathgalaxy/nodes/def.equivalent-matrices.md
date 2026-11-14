# 相抵矩阵（等价矩阵）　`def.equivalent-matrices`
相抵：$B = PAQ$
layer 15 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.equivalent-matrices)　·　[节点索引](../index.md)

设 $A, B \in M_{m \times n}(K)$。若存在可逆矩阵 $P \in GL_m(K)$ 与 $Q \in GL_n(K)$ 使

$$B = P A Q,$$

则称 $A$ 与 $B$ **相抵**（也叫**等价**）。这等价于：$A$ 能经过有限次初等行变换与初等列变换化成 $B$。
> 陈述续见 [nodes/def.equivalent-matrices.2.md](./def.equivalent-matrices.2.md)


## 它能推出什么 / 谁在用它
- ～弱边 [`def.similarity`](../nodes/def.similarity.md) 相似
- ～弱边 [`def.congruent-matrices`](../nodes/def.congruent-matrices.md) 合同矩阵

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.equivalent-matrices.3.md](./def.equivalent-matrices.3.md)

refs: Horn–Johnson, Matrix Analysis, 2nd ed., Ch. 0；Hoffman–Kunze, Linear Algebra, Ch. 4

> 说明见 `notes/def.equivalent-matrices.md`

引用：`def.equivalent-matrices`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
