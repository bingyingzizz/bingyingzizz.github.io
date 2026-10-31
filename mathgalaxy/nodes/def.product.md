# 积 / 余积　`def.product`
积与余积
layer 12 · 定义 · 图与极限 · 范畴论
[在星图里打开](../#n=def.product)　·　[节点索引](../index.md)

取 $I$ 为**离散范畴**（只有对象，没有非恒等的态射），图 $D : I \to \mathcal{C}$ 就只是一族对象 $(X_i)_{i \in I}$。它的极限叫**积** $\prod_{i} X_i$，余极限叫**余积** $\coprod_{i} X_i$。泛性质写成同构集就是

$$\operatorname{Hom}_{\mathcal{C}}\Bigl(Y, \prod_{i} X_i\Bigr) \;\cong\; \prod_{i} \operatorname{Hom}_{\mathcal{C}}(Y, X_i)$$

## 为什么成立（入边，证明在 proofs/）
- [`def.limit`](../nodes/def.limit.md) 极限：用到了定义 极限　[proofs/def-dep.limit-product.md](../proofs/def-dep.limit-product.md)

- …另有入边，续页见 [nodes/def.product.2.md](./def.product.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.product.3.md](./def.product.3.md)

refs: Le Stum, An introduction to condensed mathematics, §1.3

> 说明见 `notes/def.product.md`

引用：`def.product`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
