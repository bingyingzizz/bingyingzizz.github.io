# 谱序列　`def.spectral-sequence`
谱序列
layer 16 · 定义 · 过滤与谱序列 · 同调代数
[在星图里打开](../#n=def.spectral-sequence)　·　[节点索引](../index.md)

**谱序列**由两部分组成：

1. 一族复形 $E^{p,q}_{r}$（$p, q, r \in \mathbb{Z}$，$r \ge r_{0}$），微分

$$d^{p,q}_{r} : E^{p,q}_{r} \longrightarrow E^{p+r,\, q-r+1}_{r}$$

使得 $E^{p,q}_{r+1} \cong H^{p,q}(E_{r}) = \ker d^{p,q}_{r} / \operatorname{im} d^{p-r,\, q+r-1}_{r}$；
2. 一族**带过滤**的对象 $H^{n}$（$n \in \mathbb{Z}$），使得对每个 $p, q$ 与所有充分大的 $r$，
> 陈述续见 [nodes/def.spectral-sequence.2.md](./def.spectral-sequence.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.spectral-sequence.3.md](./def.spectral-sequence.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.spectral-sequence.4.md](./def.spectral-sequence.4.md)

refs: Le Stum, An introduction to condensed mathematics, §7.2

> 说明见 `notes/def.spectral-sequence.md`

引用：`def.spectral-sequence`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
