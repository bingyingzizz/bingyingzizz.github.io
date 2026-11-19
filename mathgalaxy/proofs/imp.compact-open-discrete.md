# imp.compact-open-discrete
`imp.compact-open-discrete` · 推出 · strong 边 · 根 `../`

`def.compact-open-topology` 紧开拓扑 → `prop.compact-open-discrete` 离散时函数空间是积

**证明。** 比较两边的基本开集。
- $X$ 离散时，紧 Hausdorff 的 $g : S \to X$ 的像 $g(S)$ 是**有限**集（紧 $\implies$ 有限，因为 $X$ 上只有离散拓扑，紧子集有限）。于是紧开拓扑的生成元是
$$W_{S,V} = \{\, f : X\to Y \;\mid\; f\bigl(g(S)\bigr)\subseteq V \,\} = \bigcap_{x \in F} \{\, f : f(x)\in V \,\},\qquad F := g(S)\ \text{有限};$$
- 而 $\{f : f(x) \in V\}$ 正是**积拓扑**（$Y^{X} = \prod_{x\in X} Y$）下的基本开集（只有 $x$ 那个坐标被限制）。所以两边由同一族基本开集生成，恒等映射是同胚。∎
