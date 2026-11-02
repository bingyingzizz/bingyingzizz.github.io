# Sard 定理　`thm.sard`
定理（Sard）：临界值集是零测集
layer 24 · 定理 · 多元微分 · 数学分析
[在星图里打开](../#n=thm.sard)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f : U \to \mathbb{R}^{m}$ 是 $C^{k}$ 且 $k > n - m$（$C^{\infty}$ 时自然满足）。则 $f$ 的**临界值**全体

$$f\bigl( \{ x \in U : \operatorname{rank} Df(x) < m \} \bigr) \subseteq \mathbb{R}^{m}$$
> 陈述续见 [nodes/thm.sard.2.md](./thm.sard.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`thm.taylor-multi`](../nodes/thm.taylor-multi.md) 多元 Taylor 公式：证明提纲：对 $m$ 归纳 + Whitney 分解 + Fubini　[proofs/imp.sard.md](../proofs/imp.sard.md)

- …另有入边，续页见 [nodes/thm.sard.3.md](./thm.sard.3.md)

refs: Milnor, Topology from the Differentiable Viewpoint, §3；Sternberg, Lectures on Differential Geometry, §II.3；Guillemin–Pollack, Differential Topology, §2

> 说明见 `notes/thm.sard.md`

引用：`thm.sard`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
