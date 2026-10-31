# 根的个数不超过次数　`prop.root-bound`
命题：$\deg f = n$ 时 $f$ 至多有 $n$ 个根（计重数）
layer 12 · 命题 · 多项式与因式分解 · 抽象代数
[在星图里打开](../#n=prop.root-bound)　·　[节点索引](../index.md)

设 $f \in K[x]$ 是非零多项式，$\deg f = n$。则 $f$ 在 $K$ 中至多有 $n$ 个根（互不相同的根）。

更精确地（用**重数**）：存在 $a_1, \ldots, a_m \in K$（互异）与正整数 $e_1, \ldots, e_m$ 使

$$f = (x - a_1)^{e_1} \cdots (x - a_m)^{e_m}\, h, \qquad h(a_i) \ne 0 \ \text{for all } i$$

此时 $e_1 + \cdots + e_m \le n$（$e_i$ 叫根 $a_i$ 的**重数**）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.primary-decomposition`](../nodes/thm.primary-decomposition.md) 根子空间分解

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.root-bound.2.md](./prop.root-bound.2.md)

refs: Lang, Algebra, Ch. IV；Dummit–Foote, Abstract Algebra, Ch. 9

> 说明见 `notes/prop.root-bound.md`

引用：`prop.root-bound`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
