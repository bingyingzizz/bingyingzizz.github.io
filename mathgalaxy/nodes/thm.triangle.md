# 三角不等式　`thm.triangle`
三角不等式 $|x + y| \le |x| + |y|$
layer 10 · 定理 · 数系的构造 · 集合论+分析学
[在星图里打开](../#n=thm.triangle)　·　[节点索引](../index.md)

设 $K$ 是有序域（如 $\mathbb{Q}$、$\mathbb{R}$），$x, y \in K$。则

$$|x + y| \le |x| + |y|$$

并且由此得到两个常用的变形：

$$\big| |x| - |y| \big| \le |x - y|, \qquad |x_1 + x_2 + \cdots + x_n| \le |x_1| + |x_2| + \cdots + |x_n|$$

（后者由前者对 $n$ 归纳。）

## 为什么成立（入边，证明在 proofs/）
- [`def.abs`](../nodes/def.abs.md) 绝对值 |x|：绝对值的定义 $\implies$ 三角不等式　[proofs/imp.triangle.md](../proofs/imp.triangle.md)

- …另有入边，续页见 [nodes/thm.triangle.2.md](./thm.triangle.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`def.cauchy-null`](../nodes/def.cauchy-null.md) Cauchy 列与零列

refs: Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/thm.triangle.md`

引用：`thm.triangle`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
