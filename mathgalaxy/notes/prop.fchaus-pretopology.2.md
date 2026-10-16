# FCHaus 上的预拓扑　`prop.fchaus-pretopology`　·　说明
根 `../`

**证明（验证预拓扑的三条公理）。** 覆盖约定为：$(F_{i} \to F)_{i \in I}$，$I$ 有限且 $\coprod_{i} F_{i} \to F$ 双射。
- **恒等**：$\{\mathrm{id}_{F}\}$ 是覆盖；
- **拉回稳定**：给覆盖与任意 $F' \to F$，拉回族 $(F_{i} \times_{F} F' \to F')_{i}$ 仍然有限，且由「不交并沿任意映射拉回仍是不交并」得 $\coprod_{i}(F_{i} \times_{F} F') \cong F'$；$\mathbf{FCHaus}$ 对有限不交并与纤维积封闭（自由对象的有限不交并还是自由的：$\beta I \coprod \beta J = \beta(I \coprod J)$）；
- **复合**：覆盖的覆盖拼起来还是覆盖。
另外，$\mathbf{FCHaus}$ 里的覆盖 $\coprod_{i} F_{i} \to F$ 是**双射**，于是每个 $F_{i} \to F$ 都是含入，而「$F \to F_{i}$ 的截面」由 $F_{i}$ 的闭性 + 完全性给出 —— 这就是为什么这里的层条件好验。∎
