# 有界算子的延拓　`thm.bounded-extension`
稠密子空间上的有界算子唯一延拓
layer 15 · 定理 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=thm.bounded-extension)　·　[节点索引](../index.md)

设 $E, F$ 都是 Banach 空间，$G \subseteq E$ 是**稠密**子空间，$u : G \to F$ 有界（线性）。则存在**唯一**的有界线性 $\tilde u : E \to F$ 使 $\tilde u|_G = u$，并且

$$\|\tilde u\| = \|u\| .$$

## 为什么成立（入边，证明在 proofs/）
- [`def.complete`](../nodes/def.complete.md) 完备：完备性 $\implies$ 稠密延拓存在　[proofs/imp.fa-extension.md](../proofs/imp.fa-extension.md)

refs: 泛函分析讲义 2026-09-28

> 说明见 `notes/thm.bounded-extension.md`

引用：`thm.bounded-extension`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
