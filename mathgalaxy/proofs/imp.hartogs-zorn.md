# 选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）
`imp.hartogs-zorn` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 + `thm.hartogs` Hartogs 定理 → `lem.zorn` 佐恩引理

设 $(P, \preceq )$ 是非空偏序集，且 $P$ 的每个链都有上界。目标是造出一个极大元。

**① 一个选择函数**：由 AC，$\mathcal{P}(P) \setminus \{\emptyset \}$ 上有选择函数 $\varphi$，即 $\varphi (A) \in A$ 对每个非空 $A \subseteq P$ 成立。整段证明只挑这一次。

**② 链的严格上界**：对链 $C \subseteq P$ 记

$$S(C) = \{ p \in P : \forall c \in C, p \succ  c \}$$

（约定 $S(\emptyset ) = P$。）注意「$C$ 有上界」与「$S(C) \ne \emptyset$」不是一回事：$S$ 要的是**严格**上界。

**③ 超限递归**：只要 $S$ 非空就往下走 ——

> 续见 proofs/imp.hartogs-zorn.2.md
