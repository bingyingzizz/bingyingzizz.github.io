# 完备化定理　`thm.completion`
定理：任何测度空间都能完备化
layer 16 · 定理 · 测度的构造 · 分析学
[在星图里打开](../#n=thm.completion)　·　[节点索引](../index.md)

设 $(X, \mathcal{M}, \mu )$ 是测度空间。令

$$\mathcal{N} = \{ N \in \mathcal{M} : \mu(N) = 0 \}$$

$$\bar{\mathcal{M}} = \{ E \cup F : E \in \mathcal{M},\ F \subseteq N,\ N \in \mathcal{N} \}$$

则
> 陈述续见 [nodes/thm.completion.2.md](./thm.completion.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`def.null-set`](../nodes/def.null-set.md) 零集与完备：零集 $\implies$ 完备化　[proofs/imp.completion.md](../proofs/imp.completion.md)

- …另有入边，续页见 [nodes/thm.completion.3.md](./thm.completion.3.md)

## 它能推出什么 / 谁在用它
- ⇒ [`prop.completion-measurable-function`](../nodes/prop.completion-measurable-function.md) 完备化后可改在零集上

- …另有出边，续页见 [nodes/thm.completion.4.md](./thm.completion.4.md)

refs: Halmos, Measure Theory, §13；Folland, Real Analysis, Prop. 1.6

> 说明见 `notes/thm.completion.md`

引用：`thm.completion`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
