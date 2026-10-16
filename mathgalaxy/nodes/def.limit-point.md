# 聚点　`def.limit-point`
聚点 / 极限点（Limit Point）
layer 14 · 定义 · 实数完备性的等价刻画 · 分析学
[在星图里打开](../#n=def.limit-point)　·　[节点索引](../index.md)

设 $S \subseteq \mathbb{R}$，$x \in \mathbb{R}$。称 $x$ 是 $S$ 的**聚点**（也叫极限点），当且仅当 $x$ 的每个去心邻域都与 $S$ 相交：

$$\forall \varepsilon > 0,\ \exists s \in S :\ 0 < |s - x| < \varepsilon$$

等价的序列说法：存在 $S \setminus \{x\}$ 中的数列 $s_n \to x$。

把 $S$ 换成一个数列的项集，就得到「$x$ 是 $\{x_n\}$ 的聚点」=「$\{x_n\}$ 有子列收敛到 $x$」。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.limit-point.2.md](./def.limit-point.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 2

> 说明见 `notes/def.limit-point.md`

引用：`def.limit-point`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
