# 选择公理 + Hartogs 定理 $\implies$ 佐恩引理（路线 $1\implies2$）
`imp.hartogs-zorn` · 推出 · strong 边 · 根 `../`

`ax.choice` 选择公理 + `thm.hartogs` Hartogs 定理 → `lem.zorn` 佐恩引理

**④ 必停**：由 **Hartogs 定理**，$\aleph (P)$ 是不能单射进 $P$ 的最小序数。把递归的上限取到 $\aleph (P)$ 就够 —— 若对一切 $\alpha < \aleph (P)$ 都不停，则 $\alpha \mapsto p(\alpha )$ 就是一个单射 $\aleph (P) \to P$，与 $\aleph (P)$ 的定义矛盾。故存在 $\alpha _{0} < \aleph (P)$ 使 $S(\{ p(\beta ) : \beta < \alpha _{0} \}) = \emptyset$。（这一步只用到 ZF，不用 AC。）

**⑤ 停下来就给极大元**：令 $C = \{ p(\beta ) : \beta < \alpha _{0} \}$，它是 $P$ 的一个链（而且是严格递增的），由题设存在上界 $u \in P$。

> 续见 proofs/imp.hartogs-zorn.4.md
