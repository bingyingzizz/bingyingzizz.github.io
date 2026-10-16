# 行列式　`def.determinant`
行列式 $\det A$（Determinant）
layer 3 · 定义 · 矩阵与行列式 · 抽象代数
[在星图里打开](../#n=def.determinant)　·　[节点索引](../index.md)

对 $A = (a_{ij}) \in M_n(K)$，定义**行列式**

$$\det A := \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma)\ \prod_{i=1}^{n} a_{i,\sigma(i)}$$

（$S_n$ 是 $n$ 次对称群、$\operatorname{sgn}$ 是置换的符号；共 $n!$ 项。）

把 $A$ 的列看成 $V = K^{n}$ 中的向量，则 $\det$ 就是「行列式的存在唯一性」里那个唯一的 $D$。

基本性质：$\det I_n = 1$；交换两列变号；有两列相同则为 $0$；$\det A^{\mathsf{T}} = \det A$。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.det-multiplicative`](../nodes/thm.det-multiplicative.md) 行列式的乘性

- …另有出边，续页见 [nodes/def.determinant.3.md](./def.determinant.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.determinant.2.md](./def.determinant.2.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 5

> 说明见 `notes/def.determinant.md`

引用：`def.determinant`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
