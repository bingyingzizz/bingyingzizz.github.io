# 任意族笛卡尔积存在　`thm.arbitrary-product`
任意小族的笛卡尔积 $\prod_{i \in I} A_i$ 存在
layer 9 · 定理 · 集合的构造 · 集合论
[在星图里打开](../#n=thm.arbitrary-product)　·　[节点索引](../index.md)

设 $I$ 是集合，$\{A_i\}_{i\in I}$ 是一族集合。则存在集合

$$\prod_{i\in I} A_i = \Bigl\{ f : f \text{ 是函数},\ \operatorname{dom} f = I,\ \forall i\in I,\ f(i)\in A_i \Bigr\}$$
> 陈述续见 [nodes/thm.arbitrary-product.2.md](./thm.arbitrary-product.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`thm.product`](../nodes/thm.product.md) 笛卡尔积存在：用到了定义 笛卡尔积存在　[proofs/dep.arbproduct-product.md](../proofs/dep.arbproduct-product.md)

- …另有入边，续页见 [nodes/thm.arbitrary-product.3.md](./thm.arbitrary-product.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.arbitrary-product.4.md](./thm.arbitrary-product.4.md)

refs: Kunen, Set Theory, I.9（函数与积）

> 说明见 `notes/thm.arbitrary-product.md`

引用：`thm.arbitrary-product`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
