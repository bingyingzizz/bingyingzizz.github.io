# 单调类　`def.monotone-class`
单调类（Monotone Class）
layer 2 · 定义 · 集合族与 σ-代数 · 分析学
[在星图里打开](../#n=def.monotone-class)　·　[节点索引](../index.md)

$\mathfrak{A} \subseteq \mathcal{P}(X)$ 是**单调类**，当且仅当它对两种单调极限都封闭：

$$\{E_j\}_{j=1}^{\infty} \nearrow  \implies \bigcup_{j=1}^{\infty} E_j \in \mathfrak{A}$$
$$\{E_j\}_{j=1}^{\infty} \searrow  \implies \bigcap_{j=1}^{\infty} E_j \in \mathfrak{A}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.subset`](../nodes/def.subset.md) 子集：用到了定义 子集　[proofs/def-dep.subset-monotone-class.md](../proofs/def-dep.subset-monotone-class.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.monotone-class.2.md](./def.monotone-class.2.md)

refs: Halmos, Measure Theory, §6

> 说明见 `notes/def.monotone-class.md`

引用：`def.monotone-class`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
