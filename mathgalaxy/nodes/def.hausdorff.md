# Hausdorff 空间　`def.hausdorff`
Hausdorff 空间 / $T_{2}$
layer 5 · 定义 · 分离公理 · 拓扑学
[在星图里打开](../#n=def.hausdorff)　·　[节点索引](../index.md)

拓扑空间 $X$ 叫 **Hausdorff 空间**（或 **$T_{2}$ 空间**），如果任意两个不同点都**可以被开集分开**：

$$\forall x \ne y \in X,\ \exists U \ni x,\ V \ni y\ \text{open}:\quad U \cap V = \emptyset$$

## 为什么成立（入边，证明在 proofs/）
- [`def.regular-space`](../nodes/def.regular-space.md) 正则空间：正则空间推出 Hausdorff（$T_2$）　[proofs/imp.regular-hausdorff.md](../proofs/imp.regular-hausdorff.md)

- …另有入边，续页见 [nodes/def.hausdorff.2.md](./def.hausdorff.2.md)

## 它能推出什么 / 谁在用它
- 被 [`prop.hausdorff-reflective`](../nodes/prop.hausdorff-reflective.md) Hausdorff 空间是反射子范畴 用

- …另有出边，续页见 [nodes/def.hausdorff.3.md](./def.hausdorff.3.md)

refs: Engelking, General Topology, Ch. 1 §1.5；Munkres, Topology

> 说明见 `notes/def.hausdorff.md`

引用：`def.hausdorff`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
