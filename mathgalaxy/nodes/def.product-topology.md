# 积拓扑　`def.product-topology`
积拓扑与乘积空间（Product Topology）
layer 6 · 定义 · 拓扑空间 · 拓扑学

设 $(X_{i}, \mathcal{T}_{i})_{i \in I}$ 是一族拓扑空间。$\prod_{i \in I} X_{i}$ 上的**积拓扑**是以

$$\prod_{i \in I} U_{i} \qquad (U_{i} \in \mathcal{T}_{i},\ \text{除有限多个 } i \text{ 外 } U_{i} = X_{i})$$

为基的拓扑 —— 也就是使所有投影 $\pi_{j} : \prod_{i} X_{i} \to X_{j}$ 都连续的**最粗**拓扑。

## 为什么成立（入边，证明在 proofs/）
- `def.topology` 拓扑空间与开集：用到了定义 拓扑空间与开集　proofs/def-dep.producttopo-topology.md
- `def.topology-base` 基与子基：用到了定义 基与子基　proofs/def-dep.producttopo-base.md

## 它能推出什么 / 谁在用它
- 被 `thm.quotient-product` 商映射与局部紧空间作积 用
- 被 `prop.weak-hausdorff-basic` 弱 Hausdorff 的基本性质 用
- 被 `thm.quotient-product` 商映射与局部紧空间作积 用
- 被 `prop.k-product` k-化与积 用

> 说明见 `notes/def.product-topology.md`
