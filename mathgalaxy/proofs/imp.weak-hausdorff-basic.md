# imp.weak-hausdorff-basic
`imp.weak-hausdorff-basic` · 推出 · strong 边 · 根 `../`

`def.weak-hausdorff` 弱 Hausdorff 空间 + `def.chaus` 紧 Hausdorff 空间范畴 + `def.condensed-set` 凝聚态集 + `def.fibered-product` 纤维积 / 纤维余积 → `prop.weak-hausdorff-basic` 弱 Hausdorff 的基本性质

**证明。** 五条都只用定义。
- **紧 Hausdorff 子空间闭**：$K \subseteq X$ 紧 Hausdorff，含入 $K \hookrightarrow X$ 就是定义里的那个 $f$，故 $K = f(K)$ 闭。
- **$T_{1}$**：单点 $\{x\}$ 是紧 Hausdorff 空间（它自己的）的像，故闭 —— 单点闭就是 $T_{1}$。
- **$f(S)$ 紧 Hausdorff**：$f(S)$ 紧（连续像），且由定义它在 $X$ 中闭；闭子空间的子空间拓扑是 Hausdorff 的，故 $f(S)$ 紧 Hausdorff。
- **$\Delta_{X}$ 是 $k$-闭的**：取紧 Hausdorff 的 $g = (g_{1}, g_{2}) : T \to X\times X$。

> 续见 proofs/imp.weak-hausdorff-basic.2.md
