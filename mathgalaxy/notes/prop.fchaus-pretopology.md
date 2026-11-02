# 有限紧 Hausdorff 空间上的预拓扑　`prop.fchaus-pretopology`　·　说明
根 `../`

为什么层条件「自动成立」：在自由紧 Hausdorff 空间上，满射有截面，所以「局部有原像」总能在整体上补出来（分离性由截面的存在直接给出）。**能取截面**是这里最省事的一点。

**证明（验证预拓扑的三条公理）。** 覆盖约定为：$(F_{i} \to F)_{i \in I}$，$I$ 有限且 $\coprod_{i} F_{i} \to F$ 双射。
- **恒等**：$\{\mathrm{id}_{F}\}$ 是覆盖；
- **拉回稳定**：给覆盖与任意 $F' \to F$，拉回族 $(F_{i} \times_{F} F' \to F')_{i}$ 仍然有限，且由「不交并沿任意映射拉回仍是不交并」得 $\coprod_{i}(F_{i} \times_{F} F') \cong F'$；

$\mathbf{FCHaus}$ 对有限不交并与纤维积封闭（自由对象的有限不交并还是自由的：$\beta I \coprod \beta J = \beta(I \coprod J)$）；

> 续见 notes/prop.fchaus-pretopology.2.md
