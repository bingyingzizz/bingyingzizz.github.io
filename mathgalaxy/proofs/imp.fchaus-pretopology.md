# imp.fchaus-pretopology
`imp.fchaus-pretopology` · 推出 · strong 边 · 根 `../`

`def.chaus` 紧 Hausdorff 空间范畴 + `def.condensed-set` 凝聚态集 + `def.grothendieck-topology` Grothendieck 拓扑 → `prop.fchaus-pretopology` 有限紧 Hausdorff 空间上的预拓扑

**证明（验证预拓扑的三条公理）。** 覆盖约定为：$(F_{i} \to F)_{i \in I}$，$I$ 有限且 $\coprod_{i} F_{i} \to F$ 双射。
- **恒等**：$\{\mathrm{id}_{F}\}$ 是覆盖；
- **拉回稳定**：给覆盖与任意 $F' \to F$，拉回族 $(F_{i} \times_{F} F' \to F')_{i}$ 仍然有限，且由「不交并沿任意映射拉回仍是不交并」得 $\coprod_{i}(F_{i} \times_{F} F') \cong F'$；

$\mathbf{FCHaus}$ 对有限不交并与纤维积封闭（自由对象的有限不交并还是自由的：$\beta I \coprod \beta J = \beta(I \coprod J)$）；

> 续见 proofs/imp.fchaus-pretopology.2.md
