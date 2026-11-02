# 截面函子保极限余极限　`prop.condab-section`　·　说明
根 `../`

**证明。** 把 $\mathrm{CondAb}$ 等同于 $\mathbf{FCHaus}$ 上的阿贝尔层范畴（这是「$\mathrm{Cond} \simeq \widehat{\mathbf{FCHaus}}$」的加法版本）。
- **保余极限**：只需证预层意义的余极限**自动是层**。$F$ 自由时，$\mathbf{FCHaus}$ 上的覆盖就是有限不交并，于是对 $\coprod_{j=1}^{r} F_{j}$：
$$\Bigl(\varinjlim_{i} M_{i}\Bigr)\Bigl(\coprod_{j} F_{j}\Bigr) = \varinjlim_{i} M_{i}\Bigl(\coprod_{j} F_{j}\Bigr) = \varinjlim_{i} \bigoplus_{j} M_{i}(F_{j}) = \bigoplus_{j} \varinjlim_{i} M_{i}(F_{j}),$$
中间一步用「$\mathbf{FCHaus}$ 上的层保有限积」（即 $M(\coprod F_{j}) = \bigoplus M(F_{j})$），最后一步用 $\mathbf{Ab}$ 里有限积与有限余积一致、且滤过余极限正合。既然余极限仍满足层条件，它就是层内的余极限，且 $\Gamma(F, -)$ 与它交换 ✓。
- **保极限**：层范畴里的极限**逐项**计算（预层极限自动是层），故 $\Gamma(F, \varprojlim M_{i}) = \varprojlim \Gamma(F, M_{i})$ ✓。∎
⭐ 推论：$\Gamma(F,-)$ 还是**正合**的（既保核又

> 续见 notes/prop.condab-section.3.md
