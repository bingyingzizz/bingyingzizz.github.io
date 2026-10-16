# 滤过 + 有限余极限 ⟹ 所有余极限　`prop.filtered-finite-colimits`　·　说明
根 `../`

**证明。** 记 $\mathcal{C}$ 有有限余极限与滤过余极限。
- **先看小指标**：设 $I$ 是任一小范畴，$D : I \to \mathcal{C}$。令 $\operatorname{Fin}(I)$ 是 $I$ 的**有限子范畴**（对象集有限、且对其中每对对象只取有限多个态射）的全体，按包含构成偏序 —— 它是**滤过**的（两个有限子范畴的并仍有限）✓。
- **两步走**：$\varinjlim_{I} D$ 可以这样算：先在每个有限子范畴 $J$（沿含入 $J \hookrightarrow I$）上取余极限 $\varinjlim_{J}D|_{J}$ —— 这是**有限**余极限（有限图）✓；再沿 $J$ 的滤过序取余极限，得到 $\varinjlim_{J \in \operatorname{Fin}(I)}\bigl(\varinjlim_{J} D\bigr)$，它与 $\varinjlim_{I}D$ 满足同一个泛性质（两条余锥的相容性互相翻译）故同构 ✓。
- 于是任何余极限都是「有限余极限的滤过余极限」，两者都在 $\mathcal{C}$ 里，故 $\mathcal{C}$ 有所有余极限 ✓。∎
⚠️ 前提「有限余极限」不能只留「余积」：还要有推出 / 余等化子

> 续见 notes/prop.filtered-finite-colimits.2.md
