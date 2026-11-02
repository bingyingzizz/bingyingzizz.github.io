# 维数良定义　`thm.dimension`
定理：任意两组基等势，维数良定义
layer 10 · 定理 · 向量空间的基 · 抽象代数
[在星图里打开](../#n=thm.dimension)　·　[节点索引](../index.md)

设 $V$ 是 $K$-向量空间，$\mathcal{B}$ 与 $\mathcal{B}'$ 是 $V$ 的两组基。则 $\mathcal{B}$ 与 $\mathcal{B}'$ **等势**（有双射）。

于是可以无矛盾地定义 $V$ 的**维数**

$$\dim_K V := |\mathcal{B}|$$

（$V = \{0\}$ 时约定 $\dim V = 0$；没有有限基时称 $V$ 是**无限维**的。）

## 为什么成立（入边，证明在 proofs/）
- [`thm.steinitz`](../nodes/thm.steinitz.md) Steinitz 交换引理：交换引理 $\implies$ 维数良定义　[proofs/imp.dimension.md](../proofs/imp.dimension.md)

- …另有入边，续页见 [nodes/thm.dimension.2.md](./thm.dimension.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.dimension.3.md](./thm.dimension.3.md)

refs: Lang, Linear Algebra；Hoffman–Kunze, Linear Algebra, Ch. 2

> 说明见 `notes/thm.dimension.md`

引用：`thm.dimension`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
