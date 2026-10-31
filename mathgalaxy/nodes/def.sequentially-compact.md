# 列紧　`def.sequentially-compact`
列紧 / 序列紧
layer 14 · 定义 · 度量空间 · 拓扑学
[在星图里打开](../#n=def.sequentially-compact)　·　[节点索引](../index.md)

距离空间 (X, d) **列紧**（序列紧），当且仅当 $X$ 中每个序列都有收敛到 $X$ 中的子列：

$$\forall\{x_n\} \subseteq X, \exists\{x_{n_k}\}\text{ 与} \exists x \in X : x_{n_k} \to x$$

## 它能推出什么 / 谁在用它
- ⟺ [`def.compact`](../nodes/def.compact.md) 紧

- …另有出边，续页见 [nodes/def.sequentially-compact.3.md](./def.sequentially-compact.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.sequentially-compact.2.md](./def.sequentially-compact.2.md)

refs: Munkres, Topology, §28

## 说明
在度量空间里「列紧 $\iff$ 紧」（见下面的箭头），但在一般拓扑空间里**不等价** —— 列紧严格更强。度量空间好用的地方正是这里。

注意子列收敛到的是 $X$ 中的点：列紧是内蕴性质，不看外面那个空间。

引用：`def.sequentially-compact`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
