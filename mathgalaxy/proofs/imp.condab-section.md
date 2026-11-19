# imp.condab-section
`imp.condab-section` · 推出 · strong 边 · 根 `../`

`def.condensed-set` 凝聚态集 + `def.abelian-category` 阿贝尔范畴 + `def.grothendieck-topology` Grothendieck 拓扑 + `def.sheaf` 层 → `prop.condab-section` 截面函子保极限余极限

**证明。** 把 $\mathrm{CondAb}$ 等同于 $\mathbf{FCHaus}$ 上的阿贝尔层范畴（这是「$\mathrm{Cond} \simeq \widehat{\mathbf{FCHaus}}$」的加法版本）。
- **保余极限**：只需证预层意义的余极限**自动是层**。$F$ 自由时，$\mathbf{FCHaus}$ 上的覆盖就是有限不交并，于是对 $\coprod_{j=1}^{r} F_{j}$：
$$\Bigl(\varinjlim_{i} M_{i}\Bigr)\Bigl(\coprod_{j} F_{j}\Bigr) = \varinjlim_{i} M_{i}\Bigl(\coprod_{j} F_{j}\Bigr) = \varinjlim_{i} \bigoplus_{j} M_{i}(F_{j}) = \bigoplus_{j} \varinjlim_{i} M_{i}(F_{j}),$$
中间一步用「$\mathbf{FCHaus}$ 上的层保有限积」（即 $M(\coprod F_{j}) = \bigoplus M(F_{j})$），最后一步用 $\mathbf{Ab}$ 里有限积与有限余积一致、且滤过余极限正合。既然余极限仍满足层条件

> 续见 proofs/imp.condab-section.2.md
