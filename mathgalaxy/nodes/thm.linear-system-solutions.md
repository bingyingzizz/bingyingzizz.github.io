# 线性方程组的解结构　`thm.linear-system-solutions`
定理：线性方程组的解结构
layer 13 · 定理 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=thm.linear-system-solutions)　·　[节点索引](../index.md)

设 $A \in M_{m \times n}(K)$、$b \in K^{m}$，考虑方程组 $Ax = b$。

- **有解** $\iff$ $\operatorname{rank} A = \operatorname{rank}(A \mid b)$（把 $b$ 添成第 $n+1$ 列）；
- 有解时，解集是**仿射子空间**

$$x_0 + \ker A = \{\, x_0 + u : u \in \ker A \,\}$$
> 陈述续见 [nodes/thm.linear-system-solutions.2.md](./thm.linear-system-solutions.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.linear-system-solutions.3.md](./thm.linear-system-solutions.3.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 1；Lang, Linear Algebra

> 说明见 `notes/thm.linear-system-solutions.md`

引用：`thm.linear-system-solutions`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
