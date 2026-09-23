# 良序定理 $\iff$ 佐恩引理
`eq.wo-zorn` · 等价 · strong 边 · 根 `../`

`thm.wellordering` 良序定理 → `lem.zorn` 佐恩引理

**$u$ 是极大元**：若存在 $w \in P$ 使 $u \prec w$，则 $w \succ u \succeq c$（$\forall c \in C$），故 $w \in U(C)$ 是有严格上界的元素，与「停止条件」矛盾。

故 $u$ 是 $P$ 的 $\preceq$极大元。∎

**佐恩引理 ⇒ 良序定理**

设 $X$ 是集合。考虑「$X$ 的部分良序」全体：

$$\mathcal{W} = \{ (W, \preceq_W) : W \subseteq X, \preceq_W\text{ 是} W\text{ 上的良序} \}$$

按**初始段延拓**排序：

$(W_{1}, \preceq _{1}) \le (W_{2}, \preceq _{2}) \iff W_{1} \subseteq W_{2}$，$\preceq _{1} = \preceq _{2}|W_{1}$，且 $W_{1}$ 是 $(W_{2}, \preceq _{2})$ 的一个前段。

1. $(\mathcal{W}, \le )$ 是偏序集（三条性质直接验证）。

2. **每个链有上界**：设 $\mathcal{D} \subseteq \mathcal{W}$ 是链。令 $W^{*} = \bigcup \{ W : (W, \preceq ) \in \mathcal{D} \}$，在 $W^{*}$ 上定义

> 续见 proofs/eq.wo-zorn.3.md
