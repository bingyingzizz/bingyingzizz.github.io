# 正则值原像定理　`thm.regular-value`
定理：正则值的原像是子流形
layer 25 · 定理 · 多元微分 · 数学分析
[在星图里打开](../#n=thm.regular-value)　·　[节点索引](../index.md)

设 $U \subseteq \mathbb{R}^{n}$ 开，$f : U \to \mathbb{R}^{m}$ 是 $C^{1}$（$m \le n$）。点 $c \in \mathbb{R}^{m}$ 叫 $f$ 的**正则值**，当且仅当对每个 $x \in f^{-1}(c)$，$Df(x)$ 都**满射**；否则叫**临界值**。
> 陈述续见 [nodes/thm.regular-value.2.md](./thm.regular-value.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`thm.implicit-function`](../nodes/thm.implicit-function.md) 隐函数定理：隐函数定理 $\implies$ 正则值的原像是子流形　[proofs/imp.regular-value.md](../proofs/imp.regular-value.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.regular-value.3.md](./thm.regular-value.3.md)

refs: Guillemin–Pollack, Differential Topology, §1；Spivak, Calculus on Manifolds, Ch. 2

> 说明见 `notes/thm.regular-value.md`

引用：`thm.regular-value`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
