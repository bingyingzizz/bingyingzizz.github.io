# 预拓扑　`def.pretopology`
预拓扑（Pretopology）
layer 13 · 定义 · 层与拓扑 · 范畴论
[在星图里打开](../#n=def.pretopology)　·　[节点索引](../index.md)

范畴 $\mathcal{C}$ 上的**预拓扑**是对每个 $X$ 指定一族**覆盖族** $\operatorname{Cov}(X)$（每个元素是一族态射 $(X_{i} \to X)_{i \in I}$），满足：
> 陈述续见 [nodes/def.pretopology.2.md](./def.pretopology.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.category`](../nodes/def.category.md) 范畴：用到了定义 范畴　[proofs/def-dep.category-pretopology.md](../proofs/def-dep.category-pretopology.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.pretopology.4.md](./def.pretopology.4.md)

refs: Le Stum, An introduction to condensed mathematics, §3.1–3.2

- …另有入边，续页见 [nodes/def.pretopology.3.md](./def.pretopology.3.md)

## 说明
三条读成一句话：**同构是覆盖、覆盖能拉回、覆盖的覆盖还是覆盖**。

例：在 $\mathbf{Set}$ 上取 $\operatorname{Cov}(X) = \{(X_{i} \to X) : X = \bigcup_{i} X_{i}\}$，三条都成立 —— 这就是「覆盖」两个字的原型。

引用：`def.pretopology`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
