# 选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）
`imp.hartogs-zorn` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 + `thm.hartogs` Hartogs 定理 → `lem.zorn` Zorn 引理

**⑤ 停下来就给极大元**：令 $C = \{ p(\beta ) : \beta < \alpha _{0} \}$，它是 $P$ 的一个链（而且是严格递增的），由题设存在上界 $u \in P$。

**⑥ $u$ 是极大元**：若存在 $v \in P$ 使 $u \prec v$，则由 $u \succeq c$（$\forall c \in C$）与传递性得 $v \succ c$（$\forall c \in C$），即 $v \in S(C)$ —— 与 $S(C) = \emptyset$ 矛盾。

故 $u$ 是 $P$ 的极大元。

∎

> 续见 proofs/imp.hartogs-zorn.5.md
