# 覆盖引理　`lem.covering`
覆盖引理：开球族里能挑出不交子族，三倍膨胀仍覆盖
layer 15 · 引理 · 微分定理 · 分析学
[在星图里打开](../#n=lem.covering)　·　[节点索引](../index.md)

设 $\mathcal{E}$ 是一族 $\mathbb{R}^{n}$ 中的开球，$U = \bigcup\mathcal{E}$。若 $c < m(U)$，则存在 $\mathcal{E}$ 中**两两不交**的球 $B_1, \ldots , B_k$ 使

$$\sum_{j=1}^{k} m(B_j) > 3^{-n} c$$

## 为什么成立（入边，证明在 proofs/）
- [`def.metric-space`](../nodes/def.metric-space.md) 距离空间：用到了定义 距离空间　[proofs/def-link.metric-covering.md](../proofs/def-link.metric-covering.md)
- [`def.measure`](../nodes/def.measure.md) 测度：用到了定义 测度　[proofs/def-link.measure-covering.md](../proofs/def-link.measure-covering.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/lem.covering.2.md](./lem.covering.2.md)

refs: Folland, Real Analysis, Lemma 3.15

> 说明见 `notes/lem.covering.md`

引用：`lem.covering`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
