# PID 上无挠即平坦 $\implies$ $\mathbb{Q}$ 平坦但不投射
`imp.flat-not-projective` · 推出 · strong 边 · 根 `../`

`prop.flat-domain-torsionfree` 平坦模无挠 + `thm.lambek` 只需有限生成理想 → `ex.flat-not-projective` 平坦但不投射

**平坦**：$\mathbb{Z}$ 是主理想整环、$\mathbb{Q}$ 无挠，由 `prop.flat-domain-torsionfree` 的反向得平坦。也可以直接对有限生成理想用 Lambek：$\mathbb{Z}$ 的理想都是 $(n)$，而 $n \cdot : \mathbb{Q} \to \mathbb{Q}$ 是单射 ✓。

**不投射**：设 $\mathbb{Q}$ 投射。取满射 $F = \bigoplus_{i \in I} \mathbb{Z} \twoheadrightarrow \mathbb{Q}$，投射性给出截面 $s$，于是 $\mathbb{Q}$ 是 $F$ 的直和项、特别地是 $F$ 的子群。

> 续见 proofs/imp.flat-not-projective.2.md
