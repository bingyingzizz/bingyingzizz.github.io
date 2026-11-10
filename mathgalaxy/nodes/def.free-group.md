# 自由群　`def.free-group`
自由群 $F(S)$（约化字）
layer 8 · 定义 · 代数结构 · 抽象代数
[在星图里打开](../#n=def.free-group)　·　[节点索引](../index.md)

设 $S$ 是集合。$S$ 上的**自由群** $F(S)$ 由所有**约化字** $s_{1}^{\varepsilon_{1}}\cdots s_{n}^{\varepsilon_{n}}$ 组成，其中 $s_{i}\in S$、$\varepsilon_{i}=\pm1$，且相邻的 $s_{i}=s_{i+1}$、$\varepsilon_{i}=-\varepsilon_{i+1}$ 已被相消；空字记 $1$。乘法为字的拼接后再约化。包含映射 $\iota:S\to F(S)$ 把 $s$ 送到单字母字。

## 为什么成立（入边，证明在 proofs/）
- [`def.group`](../nodes/def.group.md) 群：用到了定义 群　[proofs/dep.fg-group.md](../proofs/dep.fg-group.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.free-group.2.md](./def.free-group.2.md)

refs: Lang, Algebra, Ch. I §12 · free groups；Dummit and Foote, Abstract Algebra, §6.3 · free groups

> 说明见 `notes/def.free-group.md`

引用：`def.free-group`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
