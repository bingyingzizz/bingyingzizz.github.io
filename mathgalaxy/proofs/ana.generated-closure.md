# 「取一切包含它的 X 之交」——生成同一个模板
`ana.generated-closure` · 类比（弱边） · weak 边 · 根 `../`

`def.generated-sigma` 生成的 σ-代数 → `def.vs` 向量空间的基

两处都在做同一件事：**给定一点种子，造出包含它的最小结构**。

- **生成的 $\sigma$-代数**：$\mathcal{M}(\mathcal{E}) = \bigcap \{ \mathfrak{A} : \mathfrak{A} \supseteq \mathcal{E},\ \mathfrak{A}$ 是 $\sigma$-代数 $\}$。
- **由 $S$ 生成的子空间 / 张成**：$\operatorname{span} S = \bigcap \{ W : W \supseteq S,\ W$ 是子空间 $\}$。

**共同的招**：不直接写「最小的那个」，而是**取一切候选之交** —— 交封闭保证了交出来还是同类结构，
$\mathcal{P}(X)$（或整个空间）保证了候选族不空。这两句话就是良定义性证明的全部。

**为什么值得记**：凡是要「造最小的封闭结构」（子群、理想、闭包、$\sigma$-代数、$\sigma$-环），
都是这个模板；反过来，验证一个「包含关系」时，也总是把两边都化成「交」。

> 续见 proofs/ana.generated-closure.2.md
