# 链同伦　`def.chain-homotopy`　·　说明
根 `../`

**为什么「链同伦 $\implies$ 同调上相等」**：设 $z \in C_{n}$ 是闭链（$\partial z = 0$）。则

$$g(z) - f(z) = \partial' P(z) + P\partial(z) = \partial' P(z),$$

即 $g(z) - f(z)$ 是 $D$ 中的**边缘**，于是它代表的同调类是 $0$。也就是说 $[g(z)] = [f(z)]$，对每个闭链成立 —— 正是 $f_{*} = g_{*}$。∎

⭐ **它是「同伦」在代数侧的翻译**：拓扑里的同伦是「两映射之间的一条连续形变」，链复形里没有空间可形变，于是把形变换成一个**升一次**的同态 $P$。$\partial P + P\partial$ 这个组合恰好是「链复形的同伦」应该有的样子：它与 $\partial$ **交换**（$\partial T = T\partial$，所以 $T$ 是链映射），于是把闭链送到边缘；反交换的是 $P$ 与 $\partial$ 的逐项关系（$\partial P = T - P\partial$）。

> 续见 notes/def.chain-homotopy.2.md
