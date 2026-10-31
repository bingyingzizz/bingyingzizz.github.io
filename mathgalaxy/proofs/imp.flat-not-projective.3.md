# PID 上无挠即平坦 $\implies$ $\mathbb{Q}$ 平坦但不投射
`imp.flat-not-projective` · 推出 · strong 边 · 根 `../`

`prop.flat-domain-torsionfree` 平坦模无挠 + `thm.lambek` 只需有限生成理想 → `ex.flat-not-projective` 平坦但不投射

**另一条路**：$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Q}, \mathbb{Z}) = 0$。若 $\mathbb{Q}$ 投射，$\operatorname{Hom}_{\mathbb{Z}}(\mathbb{Q}, -)$ 保满射，于是满射 $F \twoheadrightarrow \mathbb{Q}$ 被送到满射 $\operatorname{Hom}(\mathbb{Q}, F) \to \operatorname{Hom}(\mathbb{Q}, \mathbb{Q})$，而左边逐个直和项都是 $0$、右边含 $\mathrm{id}$，矛盾 ✓。∎

> 这条把「平坦」与「投射」的差距钉在一个具体例子上：$\mathbb{Q}$ 的平坦性来自「能除」，非投射性来自「不是自由模的直和项」。
