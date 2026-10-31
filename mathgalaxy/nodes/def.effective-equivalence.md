# 有效等价关系　`def.effective-equivalence`
有效等价关系
layer 13 · 定义 · 层与拓扑 · 范畴论
[在星图里打开](../#n=def.effective-equivalence)　·　[节点索引](../index.md)

对象 $X$ 上的**等价关系**是一个图 $R \rightrightarrows X$，使得对每个 $Y$，$\operatorname{Hom}(Y, R) \to \operatorname{Hom}(Y, X) \times \operatorname{Hom}(Y, X)$ 是等价关系（在 $\mathbf{Set}$ 里取）。

它叫**有效的**，如果

$$R \;\cong\; X \times_{\overline{X}} X, \qquad \overline{X} := \operatorname{coker}(R \rightrightarrows X)$$
> 陈述续见 [nodes/def.effective-equivalence.2.md](./def.effective-equivalence.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.effective-equivalence.3.md](./def.effective-equivalence.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.effective-equivalence.4.md](./def.effective-equivalence.4.md)

refs: Le Stum, An introduction to condensed mathematics, §3.1–3.2

> 说明见 `notes/def.effective-equivalence.md`

引用：`def.effective-equivalence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
