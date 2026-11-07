# 有理标准形　`thm.rational-canonical-form`　·　说明
根 `../`

⭐ **为什么叫「有理」**：历史上指 $K = \mathbb{Q}$ 的情形 —— 正是「特征多项式在 $\mathbb{Q}$ 上不分裂」的典型场合。名字沿用下来，现在指「对任意域都成立」。

**第一步：把矩阵变成模**。把 $V = K^{n}$ 看成 $K[x]$-模，规定 $x \cdot v := Av$。于是 $K[x]$-子模就是 $A$-不变子空间，$K[x]$-模同构就是相似：$A \sim B$ 当且仅当 $V_{A} \cong V_{B}$。由 Cayley–Hamilton 定理 $\chi_{A}(A) = 0$，故 $\chi_{A} \in \operatorname{Ann}(V)$，$V$ 是**挠模**；又 $\dim_{K} V = n$ 给出有限生成。

> 续见 notes/thm.rational-canonical-form.2.md
