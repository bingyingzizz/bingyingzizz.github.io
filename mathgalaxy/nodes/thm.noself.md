# 无自属集合　`thm.noself`
任何集合都不属于自身
layer 1 · 定理 · ZFC 公理系统 · 集合论
[在星图里打开](../#n=thm.noself)　·　[节点索引](../index.md)

$$\forall A ( A \notin A )$$

更一般地，正则公理排除了任何有限的 $\in$循环：

$$A_0 \ni  A_1 \ni  \cdots \ni  A_n = A_0$$

## 为什么成立（入边，证明在 proofs/）
- [`ax.found`](../nodes/ax.found.md) 正则公理 + [`ax.pair`](../nodes/ax.pair.md) 配对公理：正则公理 + 配对公理 $\implies A \notin A$　[proofs/imp.found-to-noself.md](../proofs/imp.found-to-noself.md)

refs: Kunen, Set Theory, I.9

## 说明
这条定理说明罗素悖论里的「集合 $R = \{ x : x \notin x \}$」不可能存在——否则 $R \in R$ 与 $R \notin R$ 同时成立。

引用：`thm.noself`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
