# imp.cg-wh-iff-qseparated
`imp.cg-wh-iff-qseparated` · 推出 · strong 边 · 根 `../`

`def.weak-hausdorff` 弱 Hausdorff 空间 + `def.quasi-separated` 拟分离对象 + `def.compactly-generated` 紧生成空间 + `def.condensed-set` 凝聚态集 → `prop.cg-wh-iff-qseparated` 紧生成：弱 Hausdorff ⟺ 拟分离

**证明。** 两个方向各用一条引理：
- **$\implies$**：$X$ 紧生成且弱 Hausdorff，则视为凝聚态集时拟分离 —— 这正是「弱 Hausdorff $\implies$ 拟分离」那条纤维积引理。
- **$\Longleftarrow$**：$X$ 紧生成且拟分离，则底空间 $X(\bullet)$ 弱 Hausdorff；而 $X$ 紧生成意味着 $X(\bullet) \cong X$（紧生成空间的 $k$-化就是它自己，且它在凝聚态世界里由 $\underline{S} \mapsto \operatorname{Hom}(S, X)$ 决定），所以 $X$ 本身弱 Hausdorff。

∎
