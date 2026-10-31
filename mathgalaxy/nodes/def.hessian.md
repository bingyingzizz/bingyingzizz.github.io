# Hessian 矩阵　`def.hessian`
Hessian 矩阵
layer 17 · 定义 · 多元微分 · 数学分析
[在星图里打开](../#n=def.hessian)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f : U \to \mathbb{R}$ 在 $a$ 的二阶偏导都存在。**Hessian 矩阵**是

$$H_f(a) := \Bigl( \frac{\partial^{2} f}{\partial x_i \,\partial x_j}(a) \Bigr)_{1 \le i, j \le n} \in M_n(\mathbb{R})$$

若 $f \in C^{2}$，则 $H_f(a)$ 是**对称**矩阵。

## 为什么成立（入边，证明在 proofs/）
- [`def.partial-derivative`](../nodes/def.partial-derivative.md) 偏导数：用到了定义 偏导数　[proofs/dep.partial-hessian.md](../proofs/dep.partial-hessian.md)

- …另有入边，续页见 [nodes/def.hessian.2.md](./def.hessian.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Milnor, Morse Theory, §2

> 说明见 `notes/def.hessian.md`

引用：`def.hessian`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
