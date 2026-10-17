# 方向导数　`def.directional-derivative`
方向导数（Directional Derivative）
layer 17 · 定义 · 多元微分 · 分析学
[在星图里打开](../#n=def.directional-derivative)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f : U \to \mathbb{R}^{m}$，$a \in U$，$v \in \mathbb{R}^{n}$。$f$ 在 $a$ 沿方向 $v$ 的**方向导数**是（若该极限存在）

$$D_v f(a) := \lim_{t \to 0} \frac{f(a + t v) - f(a)}{t}$$
> 陈述续见 [nodes/def.directional-derivative.2.md](./def.directional-derivative.2.md)


## 它能推出什么 / 谁在用它
- 被 [`def.total-differential`](../nodes/def.total-differential.md) 可微与全微分 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.directional-derivative.3.md](./def.directional-derivative.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 9；Spivak, Calculus on Manifolds, Ch. 2

> 说明见 `notes/def.directional-derivative.md`

引用：`def.directional-derivative`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
