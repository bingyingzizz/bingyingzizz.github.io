# 一致连续　`def.uniform-continuity`
一致连续
layer 15 · 定义 · 连续与紧性 · 数学分析+拓扑学
[在星图里打开](../#n=def.uniform-continuity)　·　[节点索引](../index.md)

设 $X \subseteq \mathbb{R}$，$f : X \to \mathbb{R}$。称 $f$ **一致连续**，当且仅当

$$\forall \varepsilon > 0,\ \exists \delta > 0,\ \forall x, x' \in X :\ |x - x'| < \delta \implies |f(x) - f(x')| < \varepsilon$$

与「连续」的唯一差别是量词的**顺序**：这里 $\delta$ 出现在 $\forall x$ 之前，所以同一个 $\delta$ 要对 $X$ 上所有点同时管用。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.uniform-continuity.2.md](./def.uniform-continuity.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.uniform-continuity.3.md](./def.uniform-continuity.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 4

> 说明见 `notes/def.uniform-continuity.md`

引用：`def.uniform-continuity`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
