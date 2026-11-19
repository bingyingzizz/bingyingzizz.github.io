# imp.weak-hausdorff-basic
`imp.weak-hausdorff-basic` · 推出 · strong 边 · 根 `../`

`def.weak-hausdorff` 弱 Hausdorff 空间 + `def.chaus` 紧 Hausdorff 空间范畴 + `def.condensed-set` 凝聚态集 + `def.fibered-product` 纤维积 / 纤维余积 → `prop.weak-hausdorff-basic` 弱 Hausdorff 的基本性质

$g_{1}(T)$、$g_{2}(T)$ 由上一款是紧 Hausdorff，故 $g_{1}(T)\times g_{2}(T)$ 紧 Hausdorff，于是 $\Delta_{X} \cap \bigl(g_{1}(T)\times g_{2}(T)\bigr) = \Delta_{g_{1}(T)}$（两个紧 Hausdorff 集的「相等点」）在其中**闭**；

而 $g^{-1}(\Delta_{X}) = g^{-1}\bigl(\Delta_{X}\cap(g_{1}(T)\times g_{2}(T))\bigr)$ 是闭集的逆像，闭 ✓。
- **反过来（$X$ 紧生成 + $\Delta$ $k$-闭 $\implies$ 弱 Hausdorff）**：取 $f : S\to X$（$S$ 紧 Hausdorff），要证 $f(S)$ 闭。

$X$ 紧生成，故只需证对每个紧 Hausdorff 的 $h : T \to X$，$h^{-1}\bigl(f(S)\bigr)$ 在 $T$ 中闭。

> 续见 proofs/imp.weak-hausdorff-basic.3.md
