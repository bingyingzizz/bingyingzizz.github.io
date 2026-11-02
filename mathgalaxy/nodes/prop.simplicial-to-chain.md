# 单纯对象给出链复形　`prop.simplicial-to-chain`
命题：单纯对象的交替和给出微分
layer 11 · 命题 · 复形与导出三角 · 同调代数
[在星图里打开](../#n=prop.simplicial-to-chain)　·　[节点索引](../index.md)

设 $K_{\bullet}$ 是加法范畴 $\mathcal{C}$ 中的（半）**单纯对象**，记 $K_{n} := K_{\bullet}([n])$、面映射 $d^{n}_{i} : K_{n} \to K_{n-1}$（$i = 0, \ldots, n$）。令

$$d_{n} := \sum_{i=0}^{n} (-1)^{i} d^{n}_{i} : K_{n} \longrightarrow K_{n-1}.$$

则 $d_{n-1} \circ d_{n} = 0$，于是 $K_{\bullet}$ 成为一个**链复形**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.simplicial-to-chain.2.md](./prop.simplicial-to-chain.2.md)

refs: Le Stum, An introduction to condensed mathematics, §7.1

> 说明见 `notes/prop.simplicial-to-chain.md`

引用：`prop.simplicial-to-chain`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
