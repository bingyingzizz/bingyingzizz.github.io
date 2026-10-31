# 可度量化空间　`def.metrizable`
拓扑可由一个度量给出
layer 14 · 定义 · 可度量化 · 拓扑学
[在星图里打开](../#n=def.metrizable)　·　[节点索引](../index.md)

拓扑空间 $(X, \mathcal{T})$ 叫**可度量化的**，如果存在 $X$ 上的距离 $d$，使 $d$ 诱导的拓扑恰是 $\mathcal{T}$：

$$\mathcal{T}_{d} = \mathcal{T},\qquad \mathcal{T}_{d} := \{\, U \subseteq X : \forall x \in U\ \exists r > 0,\ B_{d}(x, r) \subseteq U \,\}.$$

等价地说：$X$ 与某个距离空间**同胚**，即存在一个与 $\mathcal{T}$ 相容的度量（compatible metric）。

## 它能推出什么 / 谁在用它
- 被 [`thm.urysohn-metrization`](../nodes/thm.urysohn-metrization.md) 乌雷松度量化定理 用

- …另有出边，续页见 [nodes/def.metrizable.3.md](./def.metrizable.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.metrizable.2.md](./def.metrizable.2.md)

refs: Munkres, Topology (2nd ed.), Sections 20 and 40

> 说明见 `notes/def.metrizable.md`

引用：`def.metrizable`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
