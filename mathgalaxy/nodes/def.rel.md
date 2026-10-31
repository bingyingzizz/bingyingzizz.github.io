# 关系　`def.rel`
关系
layer 4 · 定义 · 关系与函数 · 集合论
[在星图里打开](../#n=def.rel)　·　[节点索引](../index.md)

设 $A$、$B$ 是集合。

**关系** $R$ 由有序对组成；$R \subseteq A \times B$ 表示 $R$ 是 $A$ 到 $B$ 的关系。

- **定义域** $\operatorname{dom} R = \{ a : \exists b (a, b) \in R \}$；
- **值域** $\operatorname{ran} R = \{ b : \exists a (a, b) \in R \}$；
- **逆** $R^{-1} = \{ (b, a) : (a, b) \in R \}$。

## 为什么成立（入边，证明在 proofs/）
- [`def.pair`](../nodes/def.pair.md) 有序对：用到了定义 有序对　[proofs/def-link.rel-pair.md](../proofs/def-link.rel-pair.md)
- [`def.subset`](../nodes/def.subset.md) 子集：用到了定义 子集　[proofs/def-dep.subset-rel.md](../proofs/def-dep.subset-rel.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.rel.2.md](./def.rel.2.md)

refs: Kunen, Set Theory, I.5

> 说明见 `notes/def.rel.md`

引用：`def.rel`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
