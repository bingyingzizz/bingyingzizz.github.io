# 伪逆　`def.pseudoinverse`
Moore–Penrose 伪逆：不可逆矩阵的「逆」
layer 32 · 定义 · 矩阵分解与最小二乘 · 抽象代数
[在星图里打开](../#n=def.pseudoinverse)　·　[节点索引](../index.md)

**在做什么**：奇异矩阵、长方矩阵都没有逆，但仍然有「最好用的那个替代品」。伪逆 $A^{+}$ 是唯一满足四条 Penrose 条件的矩阵。
> 陈述续见 [nodes/def.pseudoinverse.2.md](./def.pseudoinverse.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`thm.least-squares`](../nodes/thm.least-squares.md) 最小二乘：列满秩时最小二乘算子就是伪逆　[proofs/imp.least-squares-pseudoinverse.md](../proofs/imp.least-squares-pseudoinverse.md)

- …另有入边，续页见 [nodes/def.pseudoinverse.3.md](./def.pseudoinverse.3.md)

refs: Horn–Johnson, Matrix Analysis；Ben-Israel–Greville, Generalized Inverses: Theory and Applications

> 说明见 `notes/def.pseudoinverse.md`

引用：`def.pseudoinverse`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
