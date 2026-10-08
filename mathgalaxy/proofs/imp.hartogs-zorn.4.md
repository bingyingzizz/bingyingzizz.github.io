# 选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）
`imp.hartogs-zorn` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 + `thm.hartogs` Hartogs 定理 → `lem.zorn` 佐恩引理

**⑥ $u$ 是极大元**：若存在 $v \in P$ 使 $u \prec v$，则由 $u \succeq c$（$\forall c \in C$）与传递性得 $v \succ c$（$\forall c \in C$），即 $v \in S(C)$ —— 与 $S(C) = \emptyset$ 矛盾。故 $u$ 是 $P$ 的极大元。∎

$>$ 这一路线的分工很干净：**AC 负责「挑」，Hartogs 负责「停」**。对比之下，经由良序定理的证法（见「良序定理 $\iff$ 佐恩引理」那条黑线）是把「停」交给 Burali–Forti 悖论。

> 比走良序定理更直：整段只挑一次元素，终止性由 Hartogs 定理（ZF 可证）兜底。
