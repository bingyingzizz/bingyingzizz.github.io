# 单纯映射　`def.simplicial-map`
单纯映射：顶点层面的映射，以及它诱导的链映射
layer 19 · 定义 · 同调群 · 拓扑学
[在星图里打开](../#n=def.simplicial-map)　·　[节点索引](../index.md)

设 $K, L$ 是单纯复形。映射 $f : V(K) \to V(L)$ 叫**单纯映射**（simplicial map），如果

$$\sigma \in K \ \implies \ f(\sigma) \in L.$$

（$f$ 不要求在每条单纯形上单射；$f(\sigma)$ 可以比 $\sigma$ 低维。）单纯映射在几何实现上由「线性延拓」唯一确定：
> 陈述续见 [nodes/def.simplicial-map.2.md](./def.simplicial-map.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.simplicial-map.3.md](./def.simplicial-map.3.md)

refs: Munkres, Elements of Algebraic Topology, Ch. 1 · Simplicial maps；Hatcher, Algebraic Topology, Ch. 2 §2.1 · simplicial maps and induced homomorphisms

> 说明见 `notes/def.simplicial-map.md`

引用：`def.simplicial-map`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
