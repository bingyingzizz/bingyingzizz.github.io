# 加法范畴　`def.additive-category`
加法范畴
layer 14 · 定义 · 加法与阿贝尔范畴 · 同调代数
[在星图里打开](../#n=def.additive-category)　·　[节点索引](../index.md)

**加法范畴**是满足以下两条的预加法范畴：

1. 有**零对象**（$\operatorname{End}(M) = 1$，即 $1_{M} = 0_{M}$ 的对象，见 `def.zero-object`）；
2. 任意两个对象有**直和** $M = M_{1} \oplus M_{2}$：存在态射 $p_{k} : M \to M_{k}$、$i_{k} : M_{k} \to M$ 使 $p_{1} i_{1} = 1_{M_{1}}$、$p_{2} i_{2} = 1_{M_{2}}$、$i_{1} p_{1} + i_{2} p_{2} = 1_{M}$。
> 陈述续见 [nodes/def.additive-category.2.md](./def.additive-category.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.category-of-complexes`](../nodes/def.category-of-complexes.md) 复形范畴 用

- …另有出边，续页见 [nodes/def.additive-category.4.md](./def.additive-category.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.additive-category.3.md](./def.additive-category.3.md)

refs: Le Stum, An introduction to condensed mathematics, §5.1

> 说明见 `notes/def.additive-category.md`

引用：`def.additive-category`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
