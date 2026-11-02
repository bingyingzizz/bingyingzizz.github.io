# imp.compact-locally-compact
`imp.compact-locally-compact` · 推出 · strong 边 · 根 `../`

`def.compact` 紧 → `def.locally-compact` 局部紧 Hausdorff 空间

设 $X$ 紧。对任意 $x \in X$：$X$ 自己是紧集（假设），而 $X$ 又是 $x$ 的邻域（$X$ 开于自身）。于是 $x \in \mathring{X} = X \subseteq X$ —— 这正是「每个点都有紧邻域」的要求（`def.locally-compact` 的判据 $x \in \mathring{K}$，取 $K = X$）✓。∎

⭐ 这条几乎是定义级别的，但它**不是**废话：局部紧的定义允许「每个点有个小的紧邻域」，紧性给的是「整体紧」，而整体紧在**子空间**上不遗传给邻域 —— 所以「紧 $\implies$ 局部紧」要用 $K = X$ 这一招，而「局部紧」的逆不成立（$\mathbb{R}$ 局部紧但不紧）。
