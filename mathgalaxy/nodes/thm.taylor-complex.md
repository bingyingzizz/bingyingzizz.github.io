# 全纯函数的 Taylor 展开　`thm.taylor-complex`
定理：全纯函数可展成 Taylor 级数
layer 21 · 定理 · Cauchy 理论 · 复变函数
[在星图里打开](../#n=thm.taylor-complex)　·　[节点索引](../index.md)

**白话**：全纯函数在任意一点的附近都是一个幂级数 —— 也就是说，对复函数而言「可微」与「能写成幂级数」是同一件事。

设 $f$ 在圆盘 $D(a, R)$ 上全纯。则对 $z \in D(a, R)$，

$$f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}\,(z - a)^n,$$
> 陈述续见 [nodes/thm.taylor-complex.2.md](./thm.taylor-complex.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`prop.zero-isolated`](../nodes/prop.zero-isolated.md) 零点的孤立性与阶

- …另有出边，续页见 [nodes/thm.taylor-complex.4.md](./thm.taylor-complex.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.taylor-complex.3.md](./thm.taylor-complex.3.md)

refs: 王晓光《复变函数》笔记，第 11 章 · 全纯函数的幂级数；Ahlfors, Complex Analysis, Ch. 5 · Series and Product Developments

> 说明见 `notes/thm.taylor-complex.md`

引用：`thm.taylor-complex`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
