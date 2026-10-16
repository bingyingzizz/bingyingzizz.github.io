# 特征多项式　`def.char-poly`
特征多项式 $\chi_T(x) = \det(x I - T)$
layer 13 · 定义 · 特征值与 Jordan 型 · 抽象代数
[在星图里打开](../#n=def.char-poly)　·　[节点索引](../index.md)

设 $T : V \to V$ 线性、$\dim V = n < \infty$。任取一组基把 $T$ 写成矩阵 $A$，定义

$$\chi_T(x) := \det(x\,I_n - A) \in K[x]$$

叫 $T$ 的**特征多项式**。它是一个 $n$ 次首一多项式，且与基的选取无关（换基给出相似的 $A$，而 $\det(P^{-1}(xI - A)P) = \det(xI - A)$）。

它的根（在 $K$ 中，或扩域中）恰好是 $T$ 的特征值，重数叫**代数重数**。展开后

$$\chi_T(x) = x^{n} - (\operatorname{tr} T)\,x^{n-1} + \cdots + (-1)^{n} \det T$$

## 它能推出什么 / 谁在用它
- 被 [`def.trace`](../nodes/def.trace.md) 迹 用

- …另有出边，续页见 [nodes/def.char-poly.3.md](./def.char-poly.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.char-poly.2.md](./def.char-poly.2.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 6；Lang, Linear Algebra

> 说明见 `notes/def.char-poly.md`

引用：`def.char-poly`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
