# 零集与完备　`def.null-set`
μ-零集 / 完备测度空间
layer 16 · 定义 · 测度的构造 · 实变函数+数学分析
[在星图里打开](../#n=def.null-set)　·　[节点索引](../index.md)

设 $(X, \mathcal{M}, \mu )$ 是测度空间，$E \in \mathcal{M}$。

若 $\mu(E) = 0$，则称 $E$ 是 **$\mu$零集**（$\mu -null set$）。

若**零集的每个子集都可测**：

$$\forall E \in \mathcal{M}, \forall F \subseteq E : \mu(E) = 0 \implies F \in \mathcal{M}$$

则称 $\mu$（或这个测度空间）**完备**。

## 为什么成立（入边，证明在 proofs/）
- [`def.complete`](../nodes/def.complete.md) 完备：两个「完备」：度量完备 vs 测度完备　[proofs/e192.analogy.md](../proofs/e192.analogy.md)

- …另有入边，续页见 [nodes/def.null-set.2.md](./def.null-set.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.completion`](../nodes/thm.completion.md) 完备化定理

- …另有出边，续页见 [nodes/def.null-set.3.md](./def.null-set.3.md)

refs: Halmos, Measure Theory, §11

> 说明见 `notes/def.null-set.md`

引用：`def.null-set`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
