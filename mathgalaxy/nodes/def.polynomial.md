# 一元多项式　`def.polynomial`
一元多项式（Polynomial）
layer 0 · 定义 · 多项式与因式分解 · 抽象代数
[在星图里打开](../#n=def.polynomial)　·　[节点索引](../index.md)

设 $K$ 是域。$K$ 上的一个**一元多项式**是形式表达式

$$f = a_0 + a_1 x + a_2 x^{2} + \cdots + a_n x^{n}, \qquad a_i \in K$$

（只有有限多项系数非零）；$x$ 叫**未定元**，$a_i$ 叫**系数**。

若最高次非零系数是 $a_n \ne 0$，称 $f$ 的**次数**为 $n$，记 $\deg f := n$。规定零多项式没有次数（或记 $\deg 0 := -\infty$），非零常数多项式的次数为 $0$。$a_n$ 叫**首项系数**；$a_n = 1$ 时称 $f$ 是**首一**的。
> 陈述续见 [nodes/def.polynomial.2.md](./def.polynomial.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.polynomial-ring`](../nodes/def.polynomial-ring.md) 多项式环 用

- …另有出边，续页见 [nodes/def.polynomial.3.md](./def.polynomial.3.md)

refs: Lang, Algebra, Ch. IV；Dummit–Foote, Abstract Algebra, Ch. 9

> 说明见 `notes/def.polynomial.md`

引用：`def.polynomial`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
