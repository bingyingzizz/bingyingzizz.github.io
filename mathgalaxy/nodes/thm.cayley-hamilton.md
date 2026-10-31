# Cayley–Hamilton 定理　`thm.cayley-hamilton`
定理（Cayley–Hamilton）：$\chi_T(T) = 0$
layer 14 · 定理 · 特征值与 Jordan 型 · 抽象代数
[在星图里打开](../#n=thm.cayley-hamilton)　·　[节点索引](../index.md)

设 $T : V \to V$ 是有限维 $K$-向量空间上的线性映射，$\chi_T$ 是它的特征多项式。把 $\chi_T$ 里出现的 $x$ 换成 $T$（常数项乘 $I$），得到算子 $\chi_T(T)$。则

$$\chi_T(T) = 0$$

（右边是**零算子**；矩阵形式是零矩阵。）

矩阵形式：对 $A \in M_n(K)$ 有 $\chi_A(A) = 0$（零矩阵）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.minimal-poly-divisor`](../nodes/thm.minimal-poly-divisor.md) 极小多项式整除特征多项式

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.cayley-hamilton.2.md](./thm.cayley-hamilton.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 6；Lang, Linear Algebra

> 说明见 `notes/thm.cayley-hamilton.md`

引用：`thm.cayley-hamilton`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
