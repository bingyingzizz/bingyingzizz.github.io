# 良序定理 $\implies$ 任意两个基数可比
`imp.cardinal-comparable` · 推出 · strong 边 · 根 `../`

`thm.wellordering` 良序定理 → `thm.cardinal-comparable` 基数可比定理

设 $A$、$B$ 是任意两个集合。

**① 良序化。** 由**良序定理**，$A$ 上有一个良序 $\preceq_A$、$B$ 上有一个良序 $\preceq_B$。

**② 换成序数。** 每个良序集序同构于唯一的一个序数，记作 $\alpha$、$\beta$。于是只需比较两个序数。

**③ 序数可比。** 对任意两个序数 $\alpha$、$\beta$，总有 $\alpha \in \beta$、$\alpha = \beta$、$\beta \in \alpha$ 三者之一成立（这一步是序数理论的基本事实，用的是良序性）。

- 若 $\alpha \subseteq \beta$：序同构给出单射 $A \to B$，于是 $|A| \le |B|$；
- 若 $\beta \subseteq \alpha$：同理 $|B| \le |A|$。

所以必有 $|A| \le |B|$ 或 $|B| \le |A|$。$\blacksquare$

> 续见 proofs/imp.cardinal-comparable.2.md
