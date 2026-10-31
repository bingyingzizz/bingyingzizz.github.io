# Cayley 定理　`thm.cayley`
定理（Cayley）：每个群都是置换群
layer 11 · 定理 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=thm.cayley)　·　[节点索引](../index.md)

设 $G$ 是群。**左乘作用**给出单同态

$$\rho : G \hookrightarrow \operatorname{Sym}(G), \qquad \rho(g)(h) := gh$$

特别地，$|G| = n$ 时 $G$ 同构于 $S_n$ 的一个子群。

## 为什么成立（入边，证明在 proofs/）
- [`def.group-action`](../nodes/def.group-action.md) 群作用 + [`def.permutation-group`](../nodes/def.permutation-group.md) 置换群与对称群：左乘作用是自由作用 $\implies$ Cayley 定理　[proofs/imp.cayley.md](../proofs/imp.cayley.md)

- …另有入边，续页见 [nodes/thm.cayley.2.md](./thm.cayley.2.md)

refs: Lang, Algebra, Ch. I §5；Dummit–Foote, Abstract Algebra, §4.1

> 说明见 `notes/thm.cayley.md`

引用：`thm.cayley`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
