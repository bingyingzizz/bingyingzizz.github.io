# 投射 / 内射对象　`def.projective-object`
投射对象与内射对象
layer 14 · 定义 · 紧 Hausdorff 空间 · 拓扑学
[在星图里打开](../#n=def.projective-object)　·　[节点索引](../index.md)

范畴 $\mathcal{C}$ 中对象 $P$ 叫**投射的**，如果函子 $h_{P} = \operatorname{Hom}_{\mathcal{C}}(P, -)$ **保持满态射**。对偶地，$I$ 叫**内射的**，如果 $h^{I}$ 把单态射送到满态射。

展开成提升条件就是：对每个满态射 $A \twoheadrightarrow B$ 与每个 $P \to B$，都存在提升 $P \to A$ 使三角形交换：

$$\begin{array}{ccc} & P & \\ \swarrow & \downarrow & \searrow \\ A & \twoheadrightarrow & B \end{array}$$
> 陈述续见 [nodes/def.projective-object.2.md](./def.projective-object.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.projective-object.3.md](./def.projective-object.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.projective-object.4.md](./def.projective-object.4.md)

refs: Le Stum, An introduction to condensed mathematics, §2.1–2.2

> 说明见 `notes/def.projective-object.md`

引用：`def.projective-object`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
