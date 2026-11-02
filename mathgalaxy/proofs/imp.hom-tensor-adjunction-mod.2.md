# 平衡双加性的万有性质 $\implies$ 张量–内 Hom 伴随
`imp.hom-tensor-adjunction-mod` · 推出 · strong 边 · 根 `../`

`prop.module-tensor-universal` 张量积对双线性映射万有 + `def.tensor-module` 模的张量积 → `thm.hom-tensor-adjunction-mod` 张量与内同态的伴随

复合两个双射即得同构。**自然性**：同构由显式公式 $f \mapsto \bigl(m \mapsto (n \mapsto f(m \otimes n))\bigr)$ 给出，公式里没有任何选取，故对 $M$ 与 $P$ 都自然 ✓。∎

**另一条等价的证法**：取 $M$ 的自由表现 $R^{(J)} \to R^{(I)} \to M \to 0$，先用 $M = R$ 的情形（即「单位」$R \otimes N \cong N$）验证，再用五引理把同构推到 $M$ 上。

> 两个来源缺一不可：`prop.module-tensor-universal` 给「双线性 = 线性」这半句（在 $\mathbb{Z}$ 与域上写的），`def.tensor-module` 给一般 $R$ 上平衡关系的形式。
