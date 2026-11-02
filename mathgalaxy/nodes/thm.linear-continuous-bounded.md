# 连续 ⟺ 有界　`thm.linear-continuous-bounded`
线性映射连续 $\iff$ 有界
layer 12 · 定理 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=thm.linear-continuous-bounded)　·　[节点索引](../index.md)

设 $E, F$ 是赋范空间，$u : E \to F$ 线性。则下列**等价**：

1. $u$ 连续；
2. $u$ 在**某一点**连续；
3. $u$ 在 $0$ 连续；
4. $u$ 有界（即 $\|u(x)\| \le C\|x\|$）；
5. $u$ 是 Lipschitz 的。

## 为什么成立（入边，证明在 proofs/）
- [`def.bounded-operator`](../nodes/def.bounded-operator.md) 有界线性算子：有界 $\iff$ 连续（线性）　[proofs/imp.fa-lincont-bounded.md](../proofs/imp.fa-lincont-bounded.md)

refs: 泛函分析讲义 2026-09-28

> 说明见 `notes/thm.linear-continuous-bounded.md`

引用：`thm.linear-continuous-bounded`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
