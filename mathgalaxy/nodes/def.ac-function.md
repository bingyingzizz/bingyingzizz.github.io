# 绝对连续函数　`def.ac-function`
绝对连续函数 AC（Absolutely Continuous Function）
layer 14 · 定义 · 有界变差与绝对连续 · 分析学
[在星图里打开](../#n=def.ac-function)　·　[节点索引](../index.md)

函数 $F : [a, b] \to \mathbb{C}$ 是**绝对连续的**，当且仅当

$$\forall\varepsilon > 0, \exists\delta > 0 :\text{ 任意有限个两两不交的区间} (a_j, b_j) \subseteq [a, b]\text{ 满足} \sum(b_j - a_j) < \delta,\text{ 就一定有} \sum|F(b_j) - F(a_j)| < \varepsilon$$

## 为什么成立（入边，证明在 proofs/）
- [`def.interval`](../nodes/def.interval.md) 区间：用到了定义 区间　[proofs/dep.interval-bv.md](../proofs/dep.interval-bv.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.ac-function.2.md](./def.ac-function.2.md)

refs: Folland, Real Analysis, §3.5

> 说明见 `notes/def.ac-function.md`

引用：`def.ac-function`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
