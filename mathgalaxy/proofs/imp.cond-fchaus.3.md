# $\mathrm{Cond} \simeq \widehat{\mathbf{FCHaus}}$
`imp.cond-fchaus` · 推出 · strong 边 · 根 `../`

`prop.fchaus-sheaf` FCHaus 上层的判据 + `prop.fchaus-pretopology` FCHaus 上的预拓扑 + `def.free-presentation` 自由表示 → `thm.cond-equiv-fchaus` Cond 即 FCHaus 上的层

**反过来赋值。** 给定右边的一个 $x$ 与一个映射 $f : F'' \to S$（$F''$ 自由），由自由性 $f$ 可以提升为 $\widetilde{f} : F'' \to F$（$F \twoheadrightarrow S$ 是那个自由表示），定义

$$x_{f} := X(\widetilde{f})(x) \in X(F'')$$

**提升的选取无关紧要。** 若 $\widetilde{f}_{1}, \widetilde{f}_{2}$ 是两个提升，则 $(\widetilde{f}_{1}, \widetilde{f}_{2}) : F'' \to F \times_{S} F$ 分解为 $p \circ f'$（因为 $F' \twoheadrightarrow F \times_{S} F$ 满而 $F''$ 自由），于是

> 续见 proofs/imp.cond-fchaus.4.md
