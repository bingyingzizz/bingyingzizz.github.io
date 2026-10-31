# 群环　`def.group-ring`
群环 $R[G]$
layer 8 · 定义 · 群上同调 · 同调代数+抽象代数
[在星图里打开](../#n=def.group-ring)　·　[节点索引](../index.md)

设 $R$ 是有 $1$ 的交换环、$G$ 是群。**群环** $R[G]$ 的元素是**形式有限和**

$$\sum_{g \in G} a_{g}\, g ,$$

其中 $a_{g} \in R$，且 $a_{g} = 0$ 对除有限多个 $g$ 之外的所有 $g$ 成立。加法逐分量，乘法按双线性展开：

$$\Bigl(\sum_{g} a_{g} g\Bigr)\Bigl(\sum_{h} b_{h} h\Bigr) := \sum_{g,h}\, a_{g} b_{h}\, (gh) .$$

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：用到了定义 群　[proofs/def-link.group-ring-group.md](../proofs/def-link.group-ring-group.md)

- …另有入边，续页见 [nodes/def.group-ring.2.md](./def.group-ring.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.group-ring.3.md](./def.group-ring.3.md)

refs: Weibel, An Introduction to Homological Algebra, Chapter 6（群环与群模）

> 说明见 `notes/def.group-ring.md`

引用：`def.group-ring`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
