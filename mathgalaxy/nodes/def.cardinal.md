# 基数 |A|　`def.cardinal`
基数与基数的比较
layer 8 · 定义 · 基数与等势 · 集合论
[在星图里打开](../#n=def.cardinal)　·　[节点索引](../index.md)

等势把「所有集合」分成一个个类。「集合 $A$ 的**基数**」$|A|$ 指的就是 $A$ 所在的这个等势类 —— 它衡量 $A$ 有多大，而不关心 $A$ 的元素是什么。

比较两个基数：

- $|A| \le |B|$：存在**单射** $A \to B$；
- $|A| = |B|$：存在**双射** $A \to B$（等势）；
- $|A| < |B|$：$|A| \le |B|$ 但 $|A| \ne |B|$。

若 $|A| \le |B|$ 且 $|B| \le |A|$，则 $|A| = |B|$（Schröder–Bernstein 定理）。

## 为什么成立（入边，证明在 proofs/）
- [`def.equinumerous`](../nodes/def.equinumerous.md) 等势：用到了定义 等势　[proofs/dep.equinumerous-cardinal.md](../proofs/dep.equinumerous-cardinal.md)

- …另有入边，续页见 [nodes/def.cardinal.2.md](./def.cardinal.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.cardinal.3.md](./def.cardinal.3.md)

refs: Kunen, Set Theory, I.6

> 说明见 `notes/def.cardinal.md`

引用：`def.cardinal`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
