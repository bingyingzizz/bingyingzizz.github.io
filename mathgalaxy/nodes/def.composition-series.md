# 合成列　`def.composition-series`
合成列与合成因子
layer 9 · 定义 · 合成列与可解群 · 抽象代数
[在星图里打开](../#n=def.composition-series)　·　[节点索引](../index.md)

群 $G$ 的一条**正规链**是一串子群

$$\{e\} = G_0 \trianglelefteq G_1 \trianglelefteq \cdots \trianglelefteq G_n = G$$

（每步只要求 $G_{i} \trianglelefteq G_{i+1}$，**不**要求 $G_i \trianglelefteq G$）。若每个商 $G_i / G_{i-1}$ 都是**单群**（$i = 1, \ldots, n$），这条链叫**合成列**。这些单群叫 $G$ 的**合成因子**，$n$ 叫链的**长度**。
> 陈述续见 [nodes/def.composition-series.2.md](./def.composition-series.2.md)


## 它能推出什么 / 谁在用它
- 被 [`thm.jordan-holder`](../nodes/thm.jordan-holder.md) Jordan–Hölder 定理 用

- …另有出边，续页见 [nodes/def.composition-series.4.md](./def.composition-series.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.composition-series.3.md](./def.composition-series.3.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §3.4

> 说明见 `notes/def.composition-series.md`

引用：`def.composition-series`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
