# 带余除法　`thm.division-algorithm`
定理：带余除法（$K[x]$ 是欧几里得整环）
layer 10 · 定理 · 多项式与因式分解 · 抽象代数
[在星图里打开](../#n=thm.division-algorithm)　·　[节点索引](../index.md)

设 $K$ 是域，$f, g \in K[x]$，$g \ne 0$。则存在**唯一**的 $q, r \in K[x]$ 使

$$f = q\,g + r, \qquad \deg r < \deg g$$

（$r$ 叫**余式**，$q$ 叫**商**；允许 $r = 0$。）

于是 $K[x]$ 是**欧几里得整环**：存在「次数」这个满足 $\deg r < \deg g$ 的欧几里得函数。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.factor-theorem`](../nodes/thm.factor-theorem.md) 因式定理与根
- ⇒ [`thm.poly-ufd`](../nodes/thm.poly-ufd.md) K[x] 是唯一分解整环

- …另有出边，续页见 [nodes/thm.division-algorithm.3.md](./thm.division-algorithm.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.division-algorithm.2.md](./thm.division-algorithm.2.md)

refs: Lang, Algebra, Ch. IV；Dummit–Foote, Abstract Algebra, Ch. 9

> 说明见 `notes/thm.division-algorithm.md`

引用：`thm.division-algorithm`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
