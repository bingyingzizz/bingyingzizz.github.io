# 逗号范畴　`def.comma-category`
逗号范畴（Comma Category）
layer 12 · 定义 · 伴随与反射 · 范畴论
[在星图里打开](../#n=def.comma-category)　·　[节点索引](../index.md)

设 $F : \mathcal{A} \to \mathcal{C}$、$G : \mathcal{B} \to \mathcal{C}$ 是两个**靶相同**的函子。**逗号范畴** $F \downarrow G$ 以

$$\bigl\{(A, B, f) : A \in \mathcal{A},\ B \in \mathcal{B},\ f : F(A) \to G(B)\bigr\}$$

为对象，从 $(A, B, f)$ 到 $(A', B', f')$ 的态射是一对 $(a : A \to A',\ b : B \to B')$，使方块交换：
> 陈述续见 [nodes/def.comma-category.2.md](./def.comma-category.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.saft`](../nodes/thm.saft.md) 伴随函子定理

- …另有出边，续页见 [nodes/def.comma-category.4.md](./def.comma-category.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.comma-category.3.md](./def.comma-category.3.md)

refs: Mac Lane, Categories for the Working Mathematician, II.6

> 说明见 `notes/def.comma-category.md`

引用：`def.comma-category`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
