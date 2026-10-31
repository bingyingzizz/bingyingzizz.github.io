# 元素范畴　`def.elements-category`
元素范畴
layer 11 · 定义 · 单满、子对象与像 · 范畴论
[在星图里打开](../#n=def.elements-category)　·　[节点索引](../index.md)

函子 $F : \mathcal{C} \to \mathbf{Set}$ 的**元素范畴** $\operatorname{el}(F)$ 以

$$\bigl\{(Y, t) : Y \in \mathcal{C},\ t \in F(Y)\bigr\}$$

为对象，从 $(Y, t)$ 到 $(Z, u)$ 的态射取使 $F(f)(t) = u$ 的 $f : Y \to Z$。

称 $(X, s)$ 是 $F$ 的**泛元素**，如果它是 $\operatorname{el}(F)$ 的始对象。

## 为什么成立（入边，证明在 proofs/）
- [`def.function`](../nodes/def.function.md) 映射：用到了定义 映射　[proofs/def-dep.function-el.md](../proofs/def-dep.function-el.md)

- …另有入边，续页见 [nodes/def.elements-category.2.md](./def.elements-category.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.elements-category.3.md](./def.elements-category.3.md)

refs: Mac Lane, Categories for the Working Mathematician, III.7

> 说明见 `notes/def.elements-category.md`

引用：`def.elements-category`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
